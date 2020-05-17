export default class ErrorFactory extends Error {
  statusCode: Number;
  message: string;
  error: string | null;

  private constructor(statusCode: number, message: string, error?: string) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.error = error || null;
  }
}
