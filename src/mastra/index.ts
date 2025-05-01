
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { flowerAgent } from './agents';

export const mastra = new Mastra({
  agents: { flowerAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
