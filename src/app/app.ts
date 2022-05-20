import express from "express";
import cors from "cors";

const app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

export = app;
