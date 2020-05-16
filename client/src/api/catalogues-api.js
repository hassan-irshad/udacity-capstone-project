import { apiEndpoint } from '../config'
import Axios from 'axios'


export async function getCatalogues(idToken) {
  console.log('Fetching Catalogues')

  const response = await Axios.get(`${apiEndpoint}/catalogue`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    },
  })
  console.log('Todos:', response.data)
  return response.data.catalogues
}

export async function createCatalogue(idToken, newCatalogue) {
  const response = await Axios.post(`${apiEndpoint}/catalogue`,  JSON.stringify(newCatalogue), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  })
  return response.data.catalogue
}

// export async function patchTodo(
//   idToken: string,
//   todoId: string,
//   updatedTodo: UpdateTodoRequest
// ): Promise<void> {
//   await Axios.patch(`${apiEndpoint}/todos/${todoId}`, JSON.stringify(updatedTodo), {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${idToken}`
//     }
//   })
// }

export async function deleteCatalogue(catalogueId, idToken) {
  await Axios.delete(`${apiEndpoint}/catalogue/${catalogueId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  })
}

// export async function getUploadUrl(
//   idToken: string,
//   todoId: string
// ): Promise<string> {
//   const response = await Axios.post(`${apiEndpoint}/todos/${todoId}/attachment`, '', {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${idToken}`
//     }
//   })
//   return response.data.uploadUrl
// }

// export async function uploadFile(uploadUrl: string, file: Buffer): Promise<void> {
//   await Axios.put(uploadUrl, file)
// }