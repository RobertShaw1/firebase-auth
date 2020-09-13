async function routes(fastify, options) {
  fastify.post('/hello', async (request, reply) => {
    console.log('request :>> ', request);
    reply.send('success!');
  });
}

module.exports = routes;
