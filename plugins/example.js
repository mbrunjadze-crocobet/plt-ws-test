/// <reference path="../global.d.ts" />
'use strict'
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.get("/ws", {websocket: true}, (conn, req) => {
    conn.socket.on("message", (message) => {
      conn.socket.send(message)
    })

    conn.socket.send("hello")
  })
}
