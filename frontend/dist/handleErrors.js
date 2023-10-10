/**
 * Centralized error handling function.
 * @param error - The error object to be handled.
 */
import { showErrorMessage } from "./showErrorMessage.js";
export function handleErrors(error) {
    if (error instanceof Error) {
        console.error('An error occurred:', error.message);
    }
    else {
        console.error('An unknown error occurred:', error);
    }
    showErrorMessage('error-message', 'An error occurred. Please try again.', 3000);
}
//# sourceMappingURL=handleErrors.js.map