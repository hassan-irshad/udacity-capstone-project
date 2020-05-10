import { CatalogueItem } from '../models/CatalogueItem'
import { CreateCatalogueRequest } from '../requests/CreateCatalogueRequest'
import { CatalogueAccess } from '../dataLayer/catalogueAccess'

import * as uuid from 'uuid'

const catalogueAccess = new CatalogueAccess()

export async function createCatalogue(
    createCatalogueRequest: CreateCatalogueRequest,
    // jwtToken: string
  ): Promise<CatalogueItem> {
  
    const itemId = uuid.v4()
    // const userId = parseUserId(jwtToken)
  
    return await catalogueAccess.createCatalogue({
      catalogueId: itemId,
      createdAt: new Date().toISOString(),
      ...createCatalogueRequest
    })
  }

  export async function getCatalogues() {
    return await catalogueAccess.getAllCatalogues('abc')
  }

  export async function deleteCatalogue(catalogueId: string) {
    return await catalogueAccess.deleteCatalogue(catalogueId, 'abc')
  }
  
  export async function catalogueExist(catalogueId: string) {
    return await catalogueAccess.catalogueExists(catalogueId, 'abc')
  }