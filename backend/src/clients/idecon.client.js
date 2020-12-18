
const axios = require('axios')
const axiosRetry = require('axios-retry')

const retryConfig = {
  retries: 0,
  shouldResetTimeout: true,
  retryCondition: () => true
}

const baseURL = "https://indecon.online/"

class IdeconApiClient {
  apiClientInstance() {
    const apiInstance = axios.create({
      baseURL: baseURL,
      timeout: 5000
    })
    axiosRetry(apiInstance, retryConfig)
    return apiInstance
  }

  getLatest() {
    return new Promise((resolve, reject) => {
      const client = this.apiClientInstance()
      client.request({
        url: 'last',
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
        url: `values/${key}`,
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
        url: `date/${key}/${date}`,
        method: 'get'
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

module.exports = IdeconApiClient
