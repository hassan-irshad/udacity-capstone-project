/**
 * Fields in a request to create a Catalogue item.
 */
export interface CreateCatalogueRequest {
    name: string
    description: string,
    dueDate: string,
    userId: string
  }