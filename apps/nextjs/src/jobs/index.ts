import { createFunction } from 'inngest';

export const playerScoredEvent = createFunction(
  'Processing player scored event',
  'player/scored.event',
  async (event) => {
    console.log('Received event', event);
  },
);

type PlayerScoredEvent = {
  name: 'player/scored.event';
  data: {
    companyId: string;
    playerId: string;
    eventId: string;
  };
};

export type Events = {
  'player/scored.event': PlayerScoredEvent;
};
