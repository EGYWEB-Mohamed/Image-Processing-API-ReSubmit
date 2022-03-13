import express, { Request, Response } from "express";
import { ResizeQueryValidator } from "../../utilities/Validations";
import Paths from "../../utilities/Paths";
import fs from "fs";
import { Resize } from "../../utilities/Sharp";

const resize = express.Router();

resize.get("/resize", async (request: Request, response: Response): Promise<void> => {
  const validate = await ResizeQueryValidator(request.query);
  if (typeof validate == "boolean") {
    const sourceName = (request.query.source as string).split(".")[0];
    const defaultName =
      sourceName + "-" + request.query.width + "x" + request.query.height + ".jpg";
    const checkIfExist = fs.existsSync(Paths.outImagePath + "/" + defaultName);
    if (checkIfExist) {
      response.sendFile(Paths.outImagePath + "/" + defaultName);
    } else {
      await Resize({
        source: request.query.source as string,
        width: parseInt(request.query.width as string),
        height: parseInt(request.query.height as string),
        output: defaultName
      });
      response.sendFile(Paths.outImagePath + "/" + defaultName);
    }
  } else {
    response.status(400).json(validate);
  }
});

export default resize;
