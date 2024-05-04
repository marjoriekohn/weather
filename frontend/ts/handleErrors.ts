/**
 * Centralized error handling function.
 * @param error - The error object to be handled.
 */
import {showErrorMessage} from "./showErrorMessage";
export function handleErrors(error: unknown): void {
    if (error instanceof Error) {
        console.error('Oops, an error occurred:', error.message);
    } else {
        console.error('Oops, an unknown error occurred:', error);
    }
    showErrorMessage('error-message', 'Oops, an error occurred. Please try again.', 3000);
}