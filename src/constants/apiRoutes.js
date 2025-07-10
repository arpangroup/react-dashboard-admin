export const API_ROUTES = {
  USERS: "/api/v1/users",
  USER_BY_ID: (id) => `/api/v1/users/${id}`,
  TRANSACTIONS: "/api/v1/transactions",
  USER_TRANSACTIONS: (userId) => `/api/v1/transactions/user/${userId}`,
  KYC_LIST: "/api/v1/kyc",
  RANK_CONFIGS: "/api/v1/rankings",
  SCHEMA_LIST: "/api/v1/investment-schemas",
  SCHEMA_By_ID: (id) =>`/api/v1/investment-schemas/${id}`,

  // Not Implemented Yet
  SEND_EMAIL: "/api/v1/notifications/email",
  // Add more as needed...
};
