import { mockResponses } from "./mockResponses";

/**
 * Attempts to match a mock response based on dynamic route pattern
 * e.g., /api/v1/transactions/user/:userId
 * @param {string} url - the incoming full request path (no query params)
 * @returns {function|null} - the matching mock response function
 */
export const findMockResponse = (url) => {
  console.log("findMockResponse: ", url);

  for (const [pattern, handler] of Object.entries(mockResponses)) {
    // Convert "/api/v1/transactions/user/:id" to a regex
    const regexPattern = "^" + pattern.replace(/:\w+/g, "\\d+") + "$";
    const regex = new RegExp(regexPattern);

    if (regex.test(url)) {
      return handler;
    }
  }

  return null;
};
