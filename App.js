import Express from "express";

const app = Express();

app.get("/", (_, res) => {
  res.send("hello world");
});

export default app;
