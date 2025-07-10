export const API_ROUTES = {
  USERS: "/api/v1/users",
  USER_BY_ID: (id) => `/api/v1/users/${id}`,
  TRANSACTIONS: "/api/v1/transactions",
  USER_TRANSACTIONS: (userId) => `/api/v1/transactions/user/${userId}`,
  SEND_EMAIL: "/api/v1/notifications/email",
  // Add more as needed...
};
