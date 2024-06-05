import fastify from "fastify";
import { z } from "zod";
import dotenv from "dotenv";
import { routes } from './routes';

dotenv.config();

const app = fastify();

routes(app);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server runing!");
});
