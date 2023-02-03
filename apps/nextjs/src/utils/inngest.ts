import { Inngest } from 'inngest';

import { Events } from './../jobs/index';

export const inngest = new Inngest<Events>({ name: 'Ponto.Acao' });
