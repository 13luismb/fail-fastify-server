import { FastifyPluginAsync } from "fastify";

let count = 0;

const example: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get("/", async function (_request, reply) {
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

export default example;
