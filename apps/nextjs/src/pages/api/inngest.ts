import { createFunction } from 'inngest';
import { serve } from 'inngest/next';

const processEvent = createFunction(
  'Processing player scored event',
  'player/scored.event',
  async (event) => {
    console.log('Received event', event);
  },
);

export default serve("Your app's name", [processEvent]);
