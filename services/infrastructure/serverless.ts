import type { AWS } from '@serverless/typescript';

import { functions } from './src/functions';

const plugins = [
  'serverless-bundle',
  'serverless-plugin-test-helper',
];

/**
 * Serverless Configuration for AWS
 */
const configuration: AWS = {
  service:          'infrastructure',
  frameworkVersion: '3',
  plugins,
  provider:         {
    name:       'aws',
    runtime:    'nodejs14.x',
    region:     'eu-west-1',
    apiGateway: {
      minimumCompressionSize:     1024,
      shouldStartNameWithService: true,
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions,
  package: { individually: true },
  custom:  {
    bundle: {
      sourcemaps:   false,
      excludeFiles: '**/*.test.ts',
    },
  },
};

module.exports = configuration;
