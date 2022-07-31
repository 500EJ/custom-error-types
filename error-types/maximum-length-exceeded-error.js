const ValidationError = require("./validation-error");

class MaximumLengthExceededError extends ValidationError {
  constructor(amountExceeded, ...params) {
    super(...params);

    this.name = "MaximumLengthExceededError";
    this.message = amountExceeded
      ? `Maximum length exceeded by ${amountExceeded}`
      : "Maximum length exceeded";
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
