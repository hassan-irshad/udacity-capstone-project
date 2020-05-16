import { CatalogueItem } from '../models/CatalogueItem'
import { CreateCatalogueRequest } from '../requests/CreateCatalogueRequest'
import { CatalogueAccess } from '../dataLayer/catalogueAccess'

import { parseUserId } from '../auth/utils'

import * as uuid from 'uuid'

const catalogueAccess = new CatalogueAccess()
const bucketName = process.env.IMAGES_S3_BUCKET

export async function createCatalogue(
    createCatalogueRequest: CreateCatalogueRequest,
    jwtToken: string
  ): Promise<CatalogueItem> {
  
    const itemId = uuid.v4()
    const userId = parseUserId(jwtToken)
  
    return await catalogueAccess.createCatalogue({
      catalogueId: itemId,
      createdAt: new Date().toISOString(),
      userId,
      ...createCatalogueRequest
    })
  }

  export async function getCatalogues(jwtToken: string) {
    const userId = parseUserId(jwtToken)
    return await catalogueAccess.getAllCatalogues(userId)
  }

  export async function deleteCatalogue(catalogueId: string, jwtToken: string) {
    const userId = parseUserId(jwtToken)
    return await catalogueAccess.deleteCatalogue(catalogueId, userId)
  }
  
  export async function catalogueExist(catalogueId: string, jwtToken: string) {
    const userId = parseUserId(jwtToken)
    return await catalogueAccess.catalogueExists(catalogueId, userId)
  }

  export async function saveImageUrl(catalogueId: string, imageId: string, jwtToken) {
    const userId = parseUserId(jwtToken)
    const imageUrl = `https://${bucketName}.s3.amazonaws.com/${imageId}`
    return await catalogueAccess.saveImageUrl(userId, catalogueId, imageUrl)
}