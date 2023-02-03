import { asHandler, endpoint } from 'next-better-api';
import { z } from 'zod';
import { prisma } from '@acme/db';

import { inngest } from '~/utils/inngest';

const scoredEvent = endpoint(
  {
    method: 'post',
    querySchema: z.object({
      playerId: z.string(),
    }),
    bodySchema: z.object({
      eventId: z.string(),
    }),
    responseSchema: z.union([
      z.object({
        message: z.string(),
        errorCode: z.string(),
      }),
      z.undefined(),
    ]),
  },
  async ({ query, body }) => {
    // TODO: Criar método pra autenticação sistemica
    // pegar companyId do token da requisição
    const companyId = 'cldokpav3000067ld7fabdew2';
    const { playerId } = query;
    const { eventId } = body;

    const player = await prisma.player.findFirst({
      where: {
        id: playerId,
        companyId,
      },
    });

    if (!player) {
      return {
        status: 404,
        body: {
          message: `Player with id ${playerId} not found`,
          errorCode: 'PLAYER_NOT_FOUND',
        },
      };
    }

    const event = await prisma.event.findFirst({
      where: {
        id: eventId,
        companyId,
      },
    });

    if (!event) {
      return {
        status: 404,
        body: {
          message: `Event with id ${eventId} not found`,
          errorCode: 'EVENT_NOT_FOUND',
        },
      };
    }

    const today = new Date();

    if (event.initialDate && today < event.initialDate) {
      return {
        status: 400,
        body: {
          message: `Event with id ${eventId} has not started yet`,
          errorCode: 'EVENT_NOT_STARTED',
        },
      };
    }

    if (event.finalDate && today > event.finalDate) {
      return {
        status: 400,
        body: {
          message: `Event with id ${eventId} has already ended`,
          errorCode: 'EVENT_ALREADY_ENDED',
        },
      };
    }

    if (event.limit) {
      const playersQuantityInThisEvent = await prisma.playerHasEvent.count({
        where: {
          eventId,
        },
      });

      if (playersQuantityInThisEvent >= event.limit) {
        return {
          status: 400,
          body: {
            message: `Event with id ${eventId} has reached the limit of players`,
            errorCode: 'EVENT_LIMIT_REACHED',
          },
        };
      }
    }

    if (event.limitPerPlayer) {
      const playersQuantityInThisEvent = await prisma.playerHasEvent.count({
        where: {
          eventId,
          playerId,
        },
      });

      if (playersQuantityInThisEvent >= event.limitPerPlayer) {
        return {
          status: 400,
          body: {
            message: `Player with id ${playerId} has reached the limit of times on this event`,
            errorCode: 'EVENT_PLAYER_LIMIT_REACHED',
          },
        };
      }
    }

    await inngest.send({
      name: 'player/scored.event',
      data: {
        playerId,
        eventId,
        companyId,
      },
    });

    return {
      status: 200,
    };
  },
);

export default asHandler([scoredEvent]);
