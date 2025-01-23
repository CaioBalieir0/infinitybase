import { Request, Response, NextFunction } from "express";

export const validateFilters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.query;

  if (title && typeof title !== "string") {
    return res.status(400).json({ message: "O título não deve ser nulo." });
  }
  next();
};
