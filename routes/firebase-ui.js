async function routes(fastify, options) {
  fastify.get('firebase-ui', async (request, reply) => {
    reply.sendFile('firebase.html')
  })
}

module.exports = routes
