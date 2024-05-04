/**
 * Centralized error handling function.
 * @param error - The error object to be handled.
 */
import {showErrorMessage} from "./showErrorMessage";

export function handleErrors(error: unknown): void {
    // @ts-ignore
    console.error("Error caught in handleErrors:", error.message);
}