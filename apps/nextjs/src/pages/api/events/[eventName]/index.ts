import { asHandler, endpoint } from 'next-better-api';
import { z } from 'zod';
import { prisma } from '@acme/db';

import EventQueue from '~/pages/api/queues/event';

const scoredEvent = endpoint(
  {
    method: 'post',
    querySchema: z.object({
      eventName: z.string(),
      userEmail: z.string(),
    }),
    responseSchema: z.union([
      z.object({
        message: z.string(),
        errorCode: z.string(),
      }),
      z.undefined(),
    ]),
  },
  async ({ query }) => {
    // TODO: Criar método pra autenticação sistemica
    // pegar companyId do token da requisição
    const companyId = 'algum numero';
    const { eventName, userEmail } = query;
    const event = await prisma.event.findFirst({
      where: {
        name: eventName,
        companyId,
      },
    });

    if (!event) {
      return {
        status: 404,
        body: {
          message: `Event with name ${eventName} not found`,
          errorCode: 'EVENT_NOT_FOUND',
        },
      };
    }

    const user = await prisma.employee.findFirst({
      where: {
        email: userEmail,
        companyId,
      },
    });

    if (!user) {
      return {
        status: 404,
        body: {
          message: `User with email ${userEmail} not found`,
          errorCode: 'USER_NOT_FOUND',
        },
      };
    }

    await EventQueue.enqueue(
      { eventName, companyId, userEmail }, // job to be enqueued
      { delay: '24h' }, // scheduling options
    );

    return {
      status: 200,
    };
  },
);

export default asHandler([scoredEvent]);
