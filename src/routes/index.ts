import express, { Request, Response } from "express";

import Paths from "../utilities/Paths";
import resize from "./api/resize";

const routes = express.Router();

routes.get("/", (request: Request, response: Response): void => {
  response.status(200).sendFile(Paths.htmlPath + "/index.html");
});
routes.use("/api", resize);
export default routes;
