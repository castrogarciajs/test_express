import { Router } from "express";

const router = Router();

router.post("/create", (req, res) => {
  res.send("Create Page");
});

router.put("/update", (req, res) => {
  res.send("Update Page");
});

router.delete("/delete", (req, res) => {
  res.send("Delete Pages");
});

export default router;
