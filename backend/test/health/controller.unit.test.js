const { check } = require('../../src/api/health/controller')

describe('Health controller unit test', () => {
  test('Should return UP in check method', async() => {
    const response = await check()
    expect(response).toEqual({"status": "UP"})
  })
})
