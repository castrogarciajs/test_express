import App from "./App.js";
import request from "supertest";

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
