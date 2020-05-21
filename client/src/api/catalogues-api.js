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

export async function test() {
  const body = {
    lat: 40.7769099,
	  lng: -73.9822532,
	  radius: 100
  }
  const s = JSON.stringify(body)
  const response = await Axios.post('https://dyt2z6tvoh.execute-api.us-east-1.amazonaws.com/dev/geo', s, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('test', response)
}

export async function deleteCatalogue(catalogueId, idToken) {
  await Axios.delete(`${apiEndpoint}/catalogue/${catalogueId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  })
}

export async function getUploadUrl(idToken, catalogueId) {
  const response = await Axios.post(`${apiEndpoint}/catalogue/${catalogueId}/attachment`, '', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  })
  return response.data.uploadUrl
}

export async function uploadFile(uploadUrl, file) {
  await Axios.put(uploadUrl, file)
}