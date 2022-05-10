import { handlerPath } from '@packages/common';

/**
 * Entrypoint for Serverless handlers
 */
export const functions = {
  health: {
    handler: `${handlerPath(__dirname)}/health.main`,
    events:  [
      {
        http: {
          method: 'get',
          path:   'health',
        },
      },
    ],
  },
};
