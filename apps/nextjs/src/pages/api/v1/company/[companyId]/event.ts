import { asHandler, endpoint } from 'next-better-api';
import { nullable, z } from 'zod';
import { Event } from '@acme/db';

import { trpcCaller } from './../../../trpc/[trpc]';

const createEvent = endpoint(
  {
    method: 'post',
    querySchema: z.object({
      companyId: z.string(),
    }),
    bodySchema: z.object({
      name: z.string(),
      description: z.string().optional(),
      initialDate: z.date().optional(),
      finalDate: z.date().optional(),
      limit: z.number().optional(),
      limitPerPlayer: z.number().optional(),
      score: z.number(),
    }),
    responseSchema: z.undefined(),
  },
  async ({ query, body }) => {
    await trpcCaller.event.create({
      ...body,
      companyId: query.companyId,
    });
    return {
      status: 201,
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

export default asHandler([createEvent, getEvents]);
