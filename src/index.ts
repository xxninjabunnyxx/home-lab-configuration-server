import express from "express";
import ubuntu from "./controllers/ubuntu";
import windows from "./controllers/windows";

const app = express();
const port = 7070;

app.use("/ubuntu", ubuntu);
app.use("/windows", windows);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
