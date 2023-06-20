import { CustomError } from '@/helpers'
import type { Request, Response, NextFunction } from 'express'

export const handleErrors = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return next()
  } catch (error) {
    if (error instanceof CustomError) {
      const { statusCode, message } = error
      return res.status(statusCode).json({
        success: false,
        message,
      })
    }

    return res.json({ error })
  }
}
