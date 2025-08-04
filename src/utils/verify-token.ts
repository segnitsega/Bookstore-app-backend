import { Request, Response, NextFunction } from "express";
import { catchAsync } from "./catchAsync";
import { ApiError } from "./apiError";
import jwt from "jsonwebtoken";

interface DecodedToken{
  id: string;
  role: string;
};

export interface RequestProp extends Request {
    user: DecodedToken
}

export const verifyToken = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization as string;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ApiError(401, "Unauthorized: No token provided");
  }

  const token = authHeader.split(" ")[1];
  try {
    const secret = process.env.JWT_SECRET!;
    const decoded = jwt.verify(token, secret) as DecodedToken;

    (req as Request & {user: DecodedToken}).user = decoded;

    next();
  } catch (err) {
    throw new ApiError(403, "Forbidden: Invalid or expired token")
  }

});
