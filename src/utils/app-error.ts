export class AppError extends Error {
  constructor(
    public statusCode,
    public message,
    public isOperational = true,
    public stack = "",
  ) {
    super(message);

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
