import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import { CreateCatalogueRequest } from '../../requests/CreateCatalogueRequest'
import { createLogger } from '../../utils/logger'

import { createCatalogue } from '../../businessLogic/catalogue'

const logger = createLogger('createCatalogue')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const newCatalogue: CreateCatalogueRequest = JSON.parse(event.body)
//   const jwtToken = event.headers.Authorization.split(' ')[1]

  logger.info('Creating new Catalogue')

  const catalogue = await createCatalogue(newCatalogue)
  
  logger.info('Catalogue created')

  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      catalogue
    })
  }
}