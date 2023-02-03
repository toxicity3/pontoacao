import { serve } from 'inngest/next';

import { playerScoredEvent } from './../../jobs/index';

export default serve('Ponto.Acao', [playerScoredEvent]);
