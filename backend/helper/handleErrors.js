"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = void 0;
/**
 * Centralized error handling function.
 * @param error - The error object to be handled.
 */
const showErrorMessage_js_1 = require("./showErrorMessage.js");
function handleErrors(error) {
    if (error instanceof Error) {
        console.error('An error occurred:', error.message);
    }
    else {
        console.error('An unknown error occurred:', error);
    }
    (0, showErrorMessage_js_1.showErrorMessage)('error-message', 'An error occurred. Please try again.', 3000);
}
exports.handleErrors = handleErrors;
//# sourceMappingURL=handleErrors.js.map