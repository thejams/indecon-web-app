const server = require('../../src/app')
const request = require('supertest')

describe('Idecon controller integration test', () => {
  test('should retrieve system health', async() => {
    const response = await request(server.callback())
      .get('/idecon')
    expect(response.status).toEqual(200)
  })

  test('should retrieve system health', async() => {
    const response = await request(server.callback())
      .get('/idecon/cobre')
    expect(response.status).toEqual(200)
  })

  test('should retrieve system health', async() => {
    const response = await request(server.callback())
      .get('/idecon/cobre/02-01-2020')
    expect(response.status).toEqual(200)
  })
})
