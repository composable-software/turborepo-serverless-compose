import validator from '@middy/validator';

import type { APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';
import { response } from '@packages/common';

import { middleware } from '../common';

const schema = {
  type:       'object',
  properties: {
    body: {
      type:       'object',
      properties: {
        foo: { type: 'string', minLength: 12, maxLength: 19 },
        bar: { type: 'string' },
      },
      required: ['foo'],
    },
  },
} as const;

export interface Foo {
  foo: string
  bar?: string
}

async function handler({ body }: APIGatewayProxyEvent<{ body: Foo }>): Promise<APIGatewayProxyResult> {
  return response(StatusCodes.OK, body);
}

/**
 * Decorate handler with base middleware and validation middleware
 */
export const main = middleware(handler).use(validator({ inputSchema: schema }));
