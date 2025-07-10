import { mockResponses } from "../mocks/mockResponses";
import { findMockResponse } from "../mocks/findMockResponse";

const isMockMode = process.env.REACT_APP_API_MOCK === 'true';

const apiClient = {
  get: async (url) => {
    if (isMockMode) {
      const [baseUrl, queryString ] = url.split("?");
      const queryParams = new URLSearchParams(url.split("?")[1] || "");
      const fullMockUrl = `${baseUrl}${queryString ? `?${queryString}` : ""}`;
      
      console.log(`[MOCK] GET: ${fullMockUrl}`);

      // Try direct match first
      //const handler = mockResponses[baseUrl] || findMockResponse(baseUrl);
      let handler = mockResponses[baseUrl];
      let params = {};

      // If not found, try dynamic matching
      if (!handler) {
        const match = findMockResponse(baseUrl, mockResponses);
        if (match) {
          handler = match.handler;
          params = match.params;
        }
      }

      // If no direct match, try dynamic pattern match
      if (typeof handler === "function") {
        //return await handler(queryParams);
        return await handler({ ...params, queryParams });
      }

      throw new Error(`No mock handler found for URL: ${url}`);
    }

    // Real API request
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  },
};

export default apiClient;
