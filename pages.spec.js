import App from "./App.js";
import request from "supertest";

describe("Router Test", () => {
  test("should return true", async () => {
    const res = await request(App).post("/create");

    expect(res.ok).toBeTruthy();
  });

  test("should return Create Page", async () => {
    const res = await request(App).post("/create");

    expect(res.text).toMatch("Create Page");
    expect(res.text).not.toBeInstanceOf(Array);
  });

  test("should return method POST", async () => {
    const res = await request(App).post("/create");

    expect(res.req.method).toMatch("POST");
    expect(res.req.method).toMatch("GET");
  });
});
