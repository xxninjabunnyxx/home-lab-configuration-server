"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ubuntu_1 = __importDefault(require("./controllers/ubuntu"));
const windows_1 = __importDefault(require("./controllers/windows"));
const app = (0, express_1.default)();
const port = 7070;
app.use("/ubuntu", ubuntu_1.default);
app.use("/windows", windows_1.default);
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
