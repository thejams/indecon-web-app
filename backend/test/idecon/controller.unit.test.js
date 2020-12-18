const { getLatest, getElement, getElementByDate } = require('../../src/api/idecon/controller')
const IdeconApiClient = require('../../src/clients/idecon.client')
const sinon = require('sinon')

describe('Health controller unit test', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  test('Should return the latest values for the economics objects', async() => {
    const LATEST_OBJECTS = {
      'cobre': {
        'key': 'cobre',
        'name': 'Precio del Cobre, dólares por libra',
        'unit': 'dolar',
        'date': 1584489600,
        'value': 2.39
      }
    }
    const ideconApiClientStub = sandbox.stub(IdeconApiClient.prototype, 'getLatest').returns(Promise.resolve(LATEST_OBJECTS))
    const response = await getLatest()
    sinon.assert.calledOnce(ideconApiClientStub)
    expect(response).toEqual(LATEST_OBJECTS)
  })

  test('Should return all values for a specific element', async() => {
    const ELEMENT = {
      'key': 'cobre',
      'name': 'Precio del Cobre, dólares por libra',
      'unit': 'dolar',
      'values': {
        '1546387200': 2.71,
      }
    }
    const ideconApiClientStub = sandbox.stub(IdeconApiClient.prototype, 'getElement').returns(Promise.resolve(ELEMENT))
    const response = await getElement('cobre')
    sinon.assert.calledOnce(ideconApiClientStub)
    expect(response).toEqual(ELEMENT)
  })

  test('Should return error when key param is missing in getElement function', async() => {
    try {
      await getElement()
    } catch (error) {
      expect(error.message).toBe('Key param is required')
    }
  })

  test('Should return all values for a specific element in a specific date', async() => {
    const ELEMENT = {
      'key': 'cobre',
      'name': 'Precio del Cobre, dólares por libra',
      'unit': 'dolar',
      'date': 1577923200,
      'value': 2.81
    }
    const ideconApiClientStub = sandbox.stub(IdeconApiClient.prototype, 'getElementByDate').returns(Promise.resolve(ELEMENT))
    const response = await getElementByDate('cobre', '02-01-2020')
    sinon.assert.calledOnce(ideconApiClientStub)
    expect(response).toEqual(ELEMENT)
  })

  test('Should return error when key param is missing in getElementByDate function', async() => {
    try {
      await getElementByDate()
    } catch (error) {
      expect(error.message).toBe('Error: Key and date params are required')
    }
  })
})
