export const API_ROUTES = {
  USERS: "/api/v1/users",
  USER_BY_ID: (id) => `/api/v1/users/${id}`,
  USER_TRANSACTIONS: (userId) => `/api/v1/transactions/user/${userId}`,
  TRANSACTIONS: "/api/v1/transactions",
  SEND_EMAIL: "/api/v1/notifications/email",
  // Add more as needed...
};
