import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import { main as handler } from '../../src/functions/health';

describe('GET /health', () => {
  test('returns 200 HTTP', async () => {
    await expect(handler()).resolves.toMatchObject({
      body:       ReasonPhrases.OK,
      statusCode: StatusCodes.OK,
    });
  });
});
