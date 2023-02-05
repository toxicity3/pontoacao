import { asHandler, endpoint } from 'next-better-api';
import { z } from 'zod';
import { Event } from '@acme/db';

import { trpcCaller } from '~/pages/api/trpc/[trpc]';

const getEventById = endpoint(
  {
    method: 'post',
    querySchema: z.object({
      companyId: z.string(),
      eventId: z.string(),
    }),
    responseSchema: z.union([
      z.object({
        message: z.string(),
        errorCode: z.string(),
      }),
      z.object({
        name: z.string(),
        description: z.string().nullable(),
        initialDate: z.date().nullable(),
        finalDate: z.date().nullable(),
        limit: z.number().nullable(),
        limitPerPlayer: z.number().nullable(),
        score: z.number(),
      }),
    ]),
  },
  async ({ query }) => {
    const event = await trpcCaller.event.getByIdAndCompanyId({
      id: query.eventId,
      companyId: query.companyId,
    });
    if (!event) {
      return {
        status: 404,
        body: {
          message: 'Event not found',
          errorCode: 'EVENT_NOT_FOUND',
        },
      };
    }
    return {
      status: 201,
      body: {
        name: event.name,
        description: event.description,
        initialDate: event.initialDate,
        finalDate: event.finalDate,
        limit: event.limit,
        limitPerPlayer: event.limitPerPlayer,
        score: event.score,
      },
    };
  },
);

const getEvents = endpoint(
  {
    method: 'post',
    querySchema: z.object({
      companyId: z.string(),
    }),
    responseSchema: z
      .object({
        name: z.string(),
        description: z.string().nullable(),
        initialDate: z.date().nullable(),
        finalDate: z.date().nullable(),
        limit: z.number().nullable(),
        limitPerPlayer: z.number().nullable(),
        score: z.number().min(1),
      })
      .array(),
  },
  async ({ query }) => {
    const events = await trpcCaller.event.getByCompanyId(query.companyId);
    return {
      status: 201,
      body: events.map((event: Event) => ({
        name: event.name,
        description: event.description,
        initialDate: event.initialDate,
        finalDate: event.finalDate,
        limit: event.limit,
        limitPerPlayer: event.limitPerPlayer,
        score: event.score,
      })),
    };
  },
);

export default asHandler([getEventById, getEvents]);
