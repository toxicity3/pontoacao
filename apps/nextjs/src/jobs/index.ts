import { EventPayload, NonRetriableError, createFunction } from 'inngest';
import { prisma } from '@acme/db';

export const playerScoredEvent = createFunction(
  'Processing player scored event',
  'player/scored.event',
  async ({ event: queueEvent }) => {
    const { companyId, playerId, eventId } =
      queueEvent.data as PlayerScoredEventPayload;

    const player = await prisma.player.findFirst({
      where: {
        id: playerId,
        companyId,
      },
    });

    if (!player) {
      throw new NonRetriableError(`Player with id ${playerId} not found`);
    }

    const event = await prisma.event.findFirst({
      where: {
        id: eventId,
        companyId,
      },
    });

    if (!event) {
      throw new NonRetriableError(`Event with id ${eventId} not found`);
    }

    const today = new Date();

    if (event.initialDate && today < event.initialDate) {
      throw new NonRetriableError(
        `Event with id ${eventId} has not started yet`,
      );
    }

    if (event.finalDate && today > event.finalDate) {
      throw new NonRetriableError('Event with id ${eventId} has already ended');
    }

    if (event.limit) {
      const playersQuantityInThisEvent = await prisma.playerHasEvent.count({
        where: {
          eventId,
        },
      });

      if (playersQuantityInThisEvent >= event.limit) {
        throw new NonRetriableError(
          'Event with id ${eventId} has reached the limit of players',
        );
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
        throw new NonRetriableError(
          `Player with id ${playerId} has reached the limit of times on this event`,
        );
      }
    }

    await prisma.playerHasEvent.create({
      data: {
        playerId,
        eventId,
        score: event.score,
      },
    });
  },
);

interface PlayerScoredEventPayload {
  companyId: string;
  playerId: string;
  eventId: string;
}

type PlayerScoredEvent = {
  name: 'player/scored.event';
  data: PlayerScoredEventPayload;
};

export type Events = {
  'player/scored.event': PlayerScoredEvent;
};
