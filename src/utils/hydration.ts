/**
 * Checks if the code is running on the server or the client.
 * True if the code is running on the server, false if it is running on the client.
 */
export const isOnServer = typeof window === 'undefined';
