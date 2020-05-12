import { CreateImageRequest } from '../requests/CreateImageRequest'
import { ImageItem } from '../models/ImageItem'
import { ImageAccess } from '../dataLayer/imageAccess'
import * as uuid from 'uuid'
 
const imageAccess = new ImageAccess()

export async function createImage(
    createImageRequest: CreateImageRequest
  ): Promise<ImageItem> {
  
    const itemId = uuid.v4()
  
    return await imageAccess.createImage({
      imageId: itemId,
      createdAt: new Date().toISOString(),
      ...createImageRequest
    })
  }