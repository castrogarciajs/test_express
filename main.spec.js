import App from "./App.js";
import request from "supertest";

describe("TEST app express", () => {
  let SERVER;

  beforeEach(() => {
    SERVER = App.listen(3000);
  });

  afterEach(() => {
    SERVER.close();
  });

  test("should return the port 3000", () => {
    expect(SERVER.address().port).toBe(3000);
    expect(SERVER.address().port).not.toBe(8080);
  });

  test("should return status 200", async () => {
    const res = await request(App).get("/");

    expect(res.status).toBe(200);
    expect(res.status).not.toBe(404);
  });

  test("should return status 404", async () => {
    const res = await request(App).get("/not");

    expect(res.status).toBe(404);
    expect(res.status).not.toBe(200);
  });

  test("should return Hello World", async () => {
    const res = await request(App).get("/");

    expect(res.text).toMatch("hello world");
    expect(typeof res.text).not.toBe(0);
  });

  test("should return ", async () => {
    const res = await request(App).get("/");

    expect(res.req.method).toMatch("GET");
    expect(res.req.method).not.toMatch("POST");
  });
});
