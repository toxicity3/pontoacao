import { asHandler, endpoint } from 'next-better-api';
import { z } from 'zod';
import { prisma } from '@acme/db';

const getScore = endpoint(
  {
    method: 'get',
    querySchema: z.object({
      companyId: z.string(),
      playerId: z.string(),
    }),
    responseSchema: z.union([
      z.object({
        message: z.string(),
        errorCode: z.string(),
      }),
      z.object({
        score: z.number(),
      }),
    ]),
  },
  async ({ query }) => {
    const { companyId, playerId } = query;

    const playerEvents = await prisma.playerHasEvent.findMany({
      where: {
        player: {
          id: playerId,
          companyId,
        },
      },
    });

    const score = playerEvents.reduce((acc, { score }) => {
      if (!score) return acc;
      acc += score;
      return acc;
    }, 0);

    return {
      status: 201,
      body: {
        score,
      },
    };
  },
);

export default asHandler([getScore]);
