import express from "express";
import { createCourse } from "./routes";

const app = express();
const port = 8888;

app.get("/", createCourse);

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
