import { Inngest } from 'inngest';
import { asHandler, endpoint } from 'next-better-api';
import { z } from 'zod';
import { prisma } from '@acme/db';

const inngest = new Inngest({ name: 'My App' });

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
