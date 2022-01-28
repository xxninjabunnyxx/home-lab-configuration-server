import { Router } from "express";
import { promises as fs } from "fs";
const windows = Router();

windows.get("/workstation", async (req, res, next) => {
  res.send(await fs.readFile("./src/scripts/windows-workstation.ps1", "utf-8"));
});

export default windows;
