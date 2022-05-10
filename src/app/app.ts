import express from "express";
import cors from "cors";
import log from "../utils/logger";

const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

export default app;
