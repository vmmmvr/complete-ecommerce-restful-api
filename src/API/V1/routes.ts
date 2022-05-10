import { NextFunction, Request, Response, Express } from "express";

export default function (app: Express) {
  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.json({
      success: true,
    });
  });
}
