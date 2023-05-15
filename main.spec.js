import app from "./App.js";
import request from "supertest";

let SERVER;

beforeEach(() => {
  SERVER = app.listen(3000);
});

afterEach(() => {
  SERVER.close();
});

test("should return the port 3000", () => {
  expect(SERVER.address().port).toBe(3000);
});
