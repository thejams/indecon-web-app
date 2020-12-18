const server = require('../../src/app')
const request = require('supertest')

describe('Health integration test', () => {
  test('should retrieve system health', async() => {
    const response = await request(server.callback())
      .get('/health')
    expect(response.status).toEqual(200)
  })
})
