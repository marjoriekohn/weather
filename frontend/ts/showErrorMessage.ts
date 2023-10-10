/**
 * Utility function to display messages to the user.
 * @param elementId - The id of the HTML element where the message will be displayed.
 * @param message - The message to display.
 * @param duration - The time in milliseconds the message will be displayed for.
 */
export function showErrorMessage(elementId: string, message: string, duration: number): void {
    const element = document.getElementById(elementId);

    if (element) {
        element.innerHTML = message;
        element.style.display = 'inline'; //block?
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    }
}