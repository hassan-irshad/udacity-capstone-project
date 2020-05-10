import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import * as AWSXRay from 'aws-xray-sdk'

const XAWS = AWSXRay.captureAWS(AWS)

import { CatalogueItem } from '../models/CatalogueItem'

export class CatalogueAccess {

    constructor(
        private readonly docClient: DocumentClient = createDynamoDBClient(),
        private readonly catalogueTable = process.env.CATALOGUE_TABLE,
    ) {}

    async createCatalogue(todo: CatalogueItem): Promise<CatalogueItem> {
        await this.docClient.put({
            TableName: this.catalogueTable,
            Item: todo
        }).promise()

        return todo;
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