import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import { CreateImageRequest } from '../../requests/CreateImageRequest'
import { createLogger } from '../../utils/logger'

import { createImage } from '../../businessLogic/images'

const logger = createLogger('createImage')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const newImage: CreateImageRequest = JSON.parse(event.body)

  logger.info('Creating new iamge')

  const image = await createImage(newImage)
  
  logger.info('Image created')

  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      image
    })
  }
}