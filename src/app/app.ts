import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

export = app;
