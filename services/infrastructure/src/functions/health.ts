import type { APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { response } from '@packages/common';

export const main = async (): Promise<APIGatewayProxyResult> => {
  return response(StatusCodes.OK, ReasonPhrases.OK);
};
