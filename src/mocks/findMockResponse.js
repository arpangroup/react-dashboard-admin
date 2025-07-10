import { mockResponses } from "./mockResponses";

/**
 * Attempts to match a mock response based on partial or dynamic route pattern
 * @param {string} url - full request URL
 * @returns {function|null} - async mock function if matched
 */
export const findMockResponse = (url) => {
  // Try exact match first
  if (mockResponses[url]) return mockResponses[url];

  // Match by prefix (useful for /users/:id, /transactions/user/:id)
  const match = Object.entries(mockResponses).find(([pattern]) =>
    url.startsWith(pattern.split("?")[0]) // strip query params
  );

  return match?.[1] || null;
};
