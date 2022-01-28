import { Router } from "express";
import { promises as fs } from "fs";
const ubuntu = Router();

ubuntu.get("/workstation", async (req, res, next) => {
  res.send(await fs.readFile("./src/scripts/ubuntu-workstation.sh", "utf-8"));
});

ubuntu.get("/server", async (req, res, next) => {
  res.send(await fs.readFile("./src/scripts/ubuntu-server.sh", "utf-8"));
});

export default ubuntu;
