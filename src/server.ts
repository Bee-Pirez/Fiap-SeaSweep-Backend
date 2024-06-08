import fastify from "fastify";
import { z } from "zod";
import dotenv from "dotenv";
import { routes } from './routes';
import cors from "@fastify/cors";

dotenv.config();

const app = fastify();

app.register(cors, {
  origin: '*', 
});

routes(app);

app.listen({ host: '0.0.0.0',port: process.env.PORT ? Number(process.env.PORT): 3333 }).then(() => {
  console.log("HTTP server runing!");
});
