import sharp from "sharp";
import { SharpInterface } from "./Interfaces";
import Paths from "./Paths";

export async function Resize(params: SharpInterface) {
  try {
    return await sharp(Paths.srcImagePath + "/" + params.source)
      .resize({
        width: params.width ?? 500,
        height: params.height ?? 500
      })

      .toFormat("jpg")
      .toFile(Paths.outImagePath + "/" + params.output);
  } catch (error) {
    console.log(error);
  }
}
