import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import { createLogger } from '../../utils/logger'
import { catalogueExist, deleteCatalogue } from '../../businessLogic/catalogue'

const logger = createLogger('deleteCatalogue')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const jwtToken = event.headers.Authorization.split(' ')[1]
    const catalogueId = event.pathParameters.catalogueId

    logger.info('Checking if id exist')

    if (!catalogueId) {
        logger.info('Provide catalogue id')
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                error: 'Provide todoId.'
            })
        }
    }

    const validId = await catalogueExist(catalogueId, jwtToken)

    if (!validId) {
        logger.info('Catalogue not exist')
        return {
            statusCode: 404,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                error: 'Catalogue of the provided Id not found.'
            })
        }
    }

    logger.info('Deleting Catalogue')

    await deleteCatalogue(catalogueId, jwtToken)

    return {
        statusCode: 201,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            message: 'Catalogue deleted'
        })
    }
}