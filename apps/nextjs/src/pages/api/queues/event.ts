import { Queue } from 'quirrel/next';

interface EventQueueJob {
  eventId: string;
  companyId: string;
  playerId: string;
}

export default Queue<EventQueueJob>(
  'api/queues/event', // 👈 the route it's reachable on
  async (job) => {
    console.log('Received job', job);
  },
);
