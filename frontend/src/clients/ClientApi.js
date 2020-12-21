import axios from 'axios'
import axiosRetry from 'axios-retry'

const retryConfig = {
  retries: 2,
  shouldResetTimeout: true,
  retryCondition: () => true,
}

const baseURL = "http://localhost:3001/"

export default class ClientAPI {

  apiClientInstance() {
    const apiInstance = axios.create({
      baseURL: baseURL,
      timeout: 5000
    })
    axiosRetry(apiInstance, retryConfig)
    return apiInstance
  }

  getLatestElements() {
    return new Promise((resolve, reject) => {
      const client = this.apiClientInstance()
      client.request({
        url: 'idecon/',
        method: 'get'
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  getElement(key) {
    return new Promise((resolve, reject) => {
      const client = this.apiClientInstance()
      client.request({
        url: `idecon/${key}`,
        method: 'get'
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  getElementByDate(key, date) {
    return new Promise((resolve, reject) => {
      const client = this.apiClientInstance()
      client.request({
        url: `idecon/${key}/${date}`,
        method: 'get'
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
