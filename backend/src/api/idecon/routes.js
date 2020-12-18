const router = require('koa-router')()
const controller = require('./controller')

router.get('/', async ctx => {
  try {
    ctx.ok(await controller.getLatest())
  } catch (error) {
    ctx.throw(500, error.message)
  }
})

router.get('/:key', async ctx => {
  try {
    const { key } = ctx.params
    ctx.ok(await controller.getElement(key))
  } catch (error) {
    ctx.throw(500, error.message)
  }
})

router.get('/:key/:date', async ctx => {
  try {
    const { date, key } = ctx.params
    if (!date || !key) {
      ctx.throw(400, 'date and key param are required')
    } else {
      ctx.ok(await controller.getElementByDate(key, date))
    }
  } catch (error) {
    ctx.throw(500, error.message)
  }
})

module.exports = router.routes()
