import fastify from "fastify";
import { z } from 'zod';

const app = fastify()

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server runing!");
});