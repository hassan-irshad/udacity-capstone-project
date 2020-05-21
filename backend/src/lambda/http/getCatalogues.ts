import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import { createLogger } from '../../utils/logger'
import { getCatalogues } from '../../businessLogic/catalogue'

const logger = createLogger('getCatalogue')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log('Processign Event: ', event);
  const jwtToken = event.headers.Authorization.split(' ')[1]

  logger.info('Getting Catalogues')

  const catalogues = await getCatalogues(jwtToken)

  return { 
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      catalogues
    })
  }
}