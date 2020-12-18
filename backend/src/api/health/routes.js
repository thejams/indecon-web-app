const router = require('koa-router')()
const controller = require('./controller')

router.get('/', async ctx => ctx.ok(await controller.check()))

module.exports = router.routes()
