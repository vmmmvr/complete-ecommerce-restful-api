import { NextFunction, Request, Response } from "express";
import log from "../../../utils/logger";
import { createCustomer } from "../service/customer.service";

export const createCustomerHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const createdCustomer = await createCustomer(req.body);

    return res.status(200).json({
      success: true,
      data: createdCustomer,
    });
  } catch (e: any) {
    return res.status(409).send(e);
  }
};

// export const createCustomerHandler = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//   } catch (e: any) {
//     return res.status(500).send(e.msg);
//   }
// };
