import express from "express";
import ubuntu from "./controllers/ubuntu";

const app = express();
const port = 3001;

app.use("/ubuntu", ubuntu);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});