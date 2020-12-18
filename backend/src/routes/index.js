const Router = require('koa-router')

const health = require('../api/health/routes')
const idecon = require('../api/idecon/routes')

const router = new Router()

router.use('/health', health)
router.use('/idecon', idecon)

module.exports = router
