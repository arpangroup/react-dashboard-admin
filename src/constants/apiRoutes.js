export const API_ROUTES = {
  USERS: "/api/v1/users",
  USER_BY_ID: (id) => `/api/v1/users/${id}`,
  TRANSACTIONS: "/api/v1/transactions",
  USER_TRANSACTIONS: (userId) => `/api/v1/transactions/user/${userId}`,
  KYC_LIST: "/api/v1/kyc",
  RANK_CONFIGS: "/api/v1/rankings",
  SCHEMA_LIST: "/api/v1/investment-schemas",
  SCHEMA_By_ID: (id) =>`/api/v1/investment-schemas/${id}`,
  // Notification Templates
  MAIL_CONNECTION_TEST: "/api/v1/notifications/mail-connection-test",
  TEMPLATE_LIST: (type) => `/api/v1/templates/${type}`,
  TEMPLATE_BY_ID: (type, id) => `/api/v1/templates/${type}/${id}`,
  // Configs...
  CONFIG_PROPERTIES: "http://localhost:8888/nft_app/dev",
  UPDATE_CONFIG: "http://localhost:8888/api/v1/configs/update",
  // Add more as needed...
};
