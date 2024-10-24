"use strict";

let count = 0;

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    try {
      if (count === 3) {
        count = 0;
        return { res: "Working response" };
      }

      count++;
      throw new Error("Forced error");
    } catch (e) {
      reply.code(400).send({ error: "Forced error" });
    }
  });
};
