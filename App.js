import Express from "express";

const App = Express();

App.get("/", (_, res) => {
  res.send("hello world");
});

export default App;
