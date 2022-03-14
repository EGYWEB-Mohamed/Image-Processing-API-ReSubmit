import supertest from "supertest";
import fs from "fs";
import app from "../index";
import Paths from "../utilities/Paths";
import { Resize } from "../utilities/Sharp";

// create a request object
const request = supertest(app);

describe("Image Processing Function", (): void => {
  it("Invalid Param Endpoint", async (): Promise<void> => {
    const response = await request.get("/api/resize?source=programmer.webp&width=99&height=99");
    expect(response.status).toBe(400);
  });

  it("Valid Param Endpoint", async (): Promise<void> => {
    const response = await request.get("/api/resize?source=programmer.webp&width=500&height=500");
    expect(response.status).toBe(200);
  });

  it("Image Processed Endpoint", async (): Promise<void> => {
    await request.get("/api/resize?source=programmer.webp&width=500&height=500");
    const checkIfExist = fs.existsSync(Paths.outImagePath + "/" + "programmer-500x500.jpg");
    expect(checkIfExist).toBeTrue();
  });

  it("Image Processed Functionality", async (): Promise<void> => {
    const checkFunction = async () => {
      await Resize({
        source: "flag.jpg",
        width: 750,
        height: 750,
        output: "flag-750x750.jpg"
      });
    };
    expect(checkFunction).not.toThrow();
  });
});

// Remove Test Image
afterAll(() => {
  fs.unlinkSync(Paths.outImagePath + "/" + "programmer-500x500.jpg");
  fs.unlinkSync(Paths.outImagePath + "/" + "flag-500x500.jpg");
});
