import supertest from "supertest";
import fs from "fs";
import app from "../index";
import Paths from "../utilities/Paths";

// create a request object
const request = supertest(app);

describe("Endpoints Response", (): void => {
  describe("Home Page", (): void => {
    it("/", async (): Promise<void> => {
      const response = await request.get("/");
      expect(response.status).toBe(200);
    });
  });
  describe("Image API", (): void => {
    it("Check /api/resize", async (): Promise<void> => {
      const response = await request.get("/api/resize?source=flag.jpg&width=500&height=500");
      expect(response.status).toEqual(200);
    });
  });
});

describe("Image Processing Function", (): void => {
  it("Invalid Param", async (): Promise<void> => {
    const response = await request.get("/api/resize?source=programmer.webp&width=99&height=99");
    expect(response.status).toBe(400);
  });

  it("Valid Param", async (): Promise<void> => {
    const response = await request.get("/api/resize?source=programmer.webp&width=500&height=500");
    expect(response.status).toBe(200);
  });

  it("Image Processed", async (): Promise<void> => {
    await request.get("/api/resize?source=programmer.webp&width=500&height=500");
    const checkIfExist = fs.existsSync(Paths.outImagePath + "/" + "programmer-500x500.jpg");
    expect(checkIfExist).toBeTrue();
  });
});

// Remove Test Image
afterAll(() => {
  fs.unlinkSync(Paths.outImagePath + "/" + "programmer-500x500.jpg");
  fs.unlinkSync(Paths.outImagePath + "/" + "flag-500x500.jpg");
});
