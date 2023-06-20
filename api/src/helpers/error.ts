export class CustomError extends Error {
  statusCode: number
  constructor(message: string) {
    super(message)
    this.statusCode = 500
  }
}

function CustomErrorFactory(statusCode: number) {
  return (message?: string) => {
    const error = new CustomError(message ?? 'Could not process your request')
    error.statusCode = statusCode
  }
}

export const ServerError = CustomErrorFactory(500)
export const BadRequestError = CustomErrorFactory(400)
export const UnauthorizedError = CustomErrorFactory(401)
export const ForbiddenError = CustomErrorFactory(403)
export const NotFoundError = CustomErrorFactory(404)
