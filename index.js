'use strict'
require('make-promises-safe') // installs an 'unhandledRejection' handler
require('dotenv').config()

const path = require('path')
const fastify = require('fastify')({
  logger: true,
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
})

fastify.register(require('fastify-formbody'))

const options = {
  prefix: '/auth',
}

const routes = require('./routes')
routes.forEach((route) => {
  fastify.register(route, options)
})

const { PORT = 2222 } = process.env
const start = async () => {
  try {
    await fastify.listen(PORT)
    console.log(fastify.printRoutes())
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
