class JsonError extends Error {
  constructor (status, message) {
    super(message);
    this.status = status;
  }
}
exports.JsonError = JsonError;
