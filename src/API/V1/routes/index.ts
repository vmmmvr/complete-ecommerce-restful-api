import { NextFunction, Request, Response, Express } from "express";
import customer from "./customer";

export default function (app: Express) {
  customer(app);
}
