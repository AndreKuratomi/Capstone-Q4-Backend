import express, { Request, Response } from "express";
import router from "./routes";
import { handleError } from "./middlewares/errors.middlewares";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "./swagger.js";

const app = express();

app.use(express.json());

app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);

app.use(router);

app.use(handleError);

export default app;
