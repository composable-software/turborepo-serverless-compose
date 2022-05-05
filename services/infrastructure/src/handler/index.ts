import { handlerPath } from '@packages/common';

/**
 * Entrypoint for Serverless handlers
 */
export const functions = {
  foo: {
    handler: `${handlerPath(__dirname)}/foo.main`,
    events:  [
      {
        http: {
          method: 'post',
          path:   'foo',
        },
      },
    ],
  },
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
