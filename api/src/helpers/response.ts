import type { Response } from 'express'

export const handleSuccessResponse = (res: Response, data: unknown) =>
  res.status(200).json({ data })
