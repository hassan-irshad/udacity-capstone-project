import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import * as AWSXRay from 'aws-xray-sdk'

const XAWS = AWSXRay.captureAWS(AWS)

import { ImageItem } from '../models/ImageItem'

export class ImageAccess {

    constructor(
        private readonly docClient: DocumentClient = createDynamoDBClient(),
        private readonly imageTable = process.env.IMAGES_TABLE,
    ) {}

    async createImage(image: ImageItem): Promise<ImageItem> {
        await this.docClient.put({
            TableName: this.imageTable,
            Item: image
        }).promise()

        return image;
    }

    async getAllImages(catalogueId: string): Promise<ImageItem[]> {
        const result = await this.docClient.query({
            TableName: this.imageTable,
            KeyConditionExpression: 'catalogueId = :h',
            ExpressionAttributeValues: {
                ':h': catalogueId
            }
        }).promise()

        const items = result.Items
        return items as ImageItem[]
    }

    async deleteImage(imageId: string, catalogueId: string) {
        await this.docClient.delete({
            TableName: this.imageTable,
            Key: {
                imageId,
                catalogueId
            },
        }).promise()
    }

    async imageExists(imageId: string, catalogueId: string) {
        const result = await this.docClient
            .get({
                TableName: this.imageTable,
                Key: {
                    catalogueId,
                    imageId
                }
            })
            .promise()

        return !!result.Item
    }
}

function createDynamoDBClient() {
    if (process.env.IS_OFFLINE) {
        console.log('Creating a local DynamoDB instance')
        return new XAWS.DynamoDB.DocumentClient({
            region: 'localhost',
            endpoint: 'http://localhost:8000'
        })
    }

    return new XAWS.DynamoDB.DocumentClient()
}