class Failure extends Error {
  error: Boolean;
  message: string;

  constructor({ ErrorMessage = "" }: { ErrorMessage: string }) {
    super();
    this.error = true;
    this.message = ErrorMessage;
  }
}

export default Failure;
