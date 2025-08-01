import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateSignup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const requiredDetailSchema = z.object({
      firstName: z.string().min(3, "First name is required").optional(),
      lastName: z.string().min(3, "Last name is required").optional(),
      email: z.string().email(),
      password: z.string().min(6),   
    });

    const result = requiredDetailSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      })
      return
    }
    req.body = result.data;
    next();
  } 

export const validateUpdateProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const updateProfileSchema = z.object({
      firstName: z.string().min(3, "First name is required").optional(),
      lastName: z.string().min(3, "Last name is required").optional(),
      state: z.string().optional(),
      city: z.string().optional(),
      preferredGenre: z.string().optional(),
      preferredPrice: z.string().optional(),
      userId: z.int()
    });

    const result = updateProfileSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      })
      return
    }
    req.body = result.data;
    next();
  }