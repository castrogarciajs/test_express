import Express from "express";
import router from "./pages.js";

const App = Express();

App.get("/", (_, res) => {
  res.send("hello world");
});

App.use(router);

export default App;
