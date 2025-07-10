import { mockResponses } from "../mocks/mockResponses";
import { findMockResponse } from "../mocks/findMockResponse";

const isMockMode = process.env.REACT_APP_API_MOCK === 'true';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const apiClient = {
  async get(url) {
    if (isMockMode) {
      const mockHandler = mockResponses[url] || findMockResponse(url);
      if (mockHandler) {
        console.log(`[MOCK] GET ${url}`);
        await delay(300);
        return await mockResponses[url]();
      }
    }

    const response = await fetch(url);
    if (!response.ok) throw new Error(`API error: ${response.statusText}`);
    return await response.json();
  },

  async post(url, body) {
    if (isMockMode) {
      const mockHandler = mockResponses[url] || findMockResponse(url);
      if (mockHandler) {
        console.log(`[MOCK] POST ${url}`, body);
        await delay(300); // simulate network delay
        return await mockHandler(body);
      }
    }

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error(`API error: ${response.statusText}`);
    return await response.json();
  },

  async put(url, body) {
    const method = "PUT";
    if (isMockMode) {
      const mockHandler = mockResponses[url] || findMockResponse(url);
      if (mockHandler) {
        console.log(`[MOCK] ${method} ${url}`, body);
        await delay(300);
        return await mockHandler(body);
      }
    }

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error(`API error: ${response.statusText}`);
    return await response.json();
  },

  async delete(url) {
    const method = "DELETE";
    if (isMockMode) {
      const mockHandler = mockResponses[url] || findMockResponse(url);
      if (mockHandler) {
        console.log(`[MOCK] ${method} ${url}`);
        await delay(300);
        return await mockHandler();
      }
    }

    const response = await fetch(url, { method });
    if (!response.ok) throw new Error(`API error: ${response.statusText}`);
    return await response.json();
  },
};

export default apiClient;
