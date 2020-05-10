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

  export async function getCatlogues() {
    return await catalogueAccess.getAllCatalogues('abc')
  }
  