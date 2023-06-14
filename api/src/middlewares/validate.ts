import type { Request, Response, NextFunction } from 'express'
import type { AnyObjectSchema } from 'yup'

export const validate =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req

    try {
      await schema.validate(body)
      return next()
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
