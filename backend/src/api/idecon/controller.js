const moment = require('moment')
const IdeconApiClient = require('../../clients/idecon.client')
const ideconApiClient = new IdeconApiClient()

exports.getLatest = async() => {
  try {
    const latest = await ideconApiClient.getLatest()
    return Promise.resolve(latest)
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.getElement = async(key) => {
  try {
    if (!key) {
      throw new Error('Key param is required')
    }
    const ideconElement = await ideconApiClient.getElement(key)
    return Promise.resolve(ideconElement)
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.getElementByDate = async(key, date) => {
  try {
    if (!key || !date) {
      throw new Error('Key and date params are required')
    }
    const formattedDate = moment(new Date(date)).format("MM-DD-YYYY")
    const ideconElement = await ideconApiClient.getElementByDate(key, formattedDate)
    return Promise.resolve(ideconElement)
  } catch (error) {
    throw new Error(error)
  }
}
