import validator from "validator";
import { UrlQueryInterface } from "./Interfaces";
import fs from "fs";
import Paths from "./Paths";

export const ResizeQueryValidator = async (
  params: UrlQueryInterface
): Promise<boolean | string> => {
  if (!params.width || !params.height || !params.source) {
    return "Parameter {width & height & source} Cant Be Empty";
  }
  if (validator.isInt(params.width) && parseInt(params.width) <= 100) {
    return "Width Should be Integer And More Then 100px";
  }
  if (validator.isInt(params.height) && parseInt(params.height) <= 100) {
    return "Height Should be Integer And More Then 100px";
  }
  if (!fs.existsSync(Paths.srcImagePath + "/" + params.source)) {
    return "Image Selected Is Not Found in Source Directory";
  }
  return true;
};
