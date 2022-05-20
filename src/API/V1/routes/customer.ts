import { NextFunction, Request, Response, Express } from "express";
import { createCustomerHandler } from "../controller/customer.controller";
import { validateRequest } from "./Middleware/validateRequest";
import { createCustomerSchema } from "./schema/customer.schema";
export default function (app: Express) {
  app.post(
    "/api/customer/register",
    validateRequest(createCustomerSchema),
    createCustomerHandler
  );
}
