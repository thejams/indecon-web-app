const Koa = require('koa')
const Helmet = require('koa-helmet')
const Cors = require('@koa/cors')
const BodyParser = require('koa-bodyparser')
const Respond = require('koa-respond')

const router = require('../routes')

const app = new Koa()

app.use(Helmet())
app.use(Cors())
app.use(Respond())
app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true
}))

app.use(router.routes())

module.exports = app
