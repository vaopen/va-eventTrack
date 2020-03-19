const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

const app = new Koa()
const router = new Router({})
app.use(bodyParser())

process.on('uncaughtException', function(err) {
  console.error('Error caught in uncaughtException event:', err)
})

router.post('/eventTrack', async(ctx, next) => {
  console.log(ctx.request.body)
  ctx.response.body = ctx.request.body
  // ctx.response.body = {
  //   a: '11'
  // }
})

app.use(cors())
app.use(router.routes())

app.listen(8888, () => {
  console.log(`the server is start at port 8888`)
})