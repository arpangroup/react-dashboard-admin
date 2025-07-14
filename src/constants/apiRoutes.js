import { act } from "react";

export const API_ROUTES = {
  USERS: "/api/v1/users",
  USER_BY_ID: (id) => `/api/v1/users/${id}`,
  // KYC
  KYC_LIST: "/api/v1/kyc",
  KYC_BY_ID: (kycId) => `/api/v1/kyc/${kycId}`,
  KYC_SUBMIT: (kycId, action) => `/api/v1/kyc/${kycId}/${action}`, // ['approve', 'reject']  
  // Transactions:
  TRANSACTIONS: "/api/v1/transactions",
  USER_TRANSACTIONS: (userId) => `/api/v1/transactions/user/${userId}`,
  // Deposit:
  DEPOSIT_LIST: "/api/v1/deposits", 
  DEPOSIT_REQUEST: (isManual) => !isManual ? "/api/v1/deposits" : `/api/v1/deposits/manual`, 
  DEPOSIT_ACTION: (action, id) => `/api/v1/deposits/${action}/${id}`, // ['approve', 'reject']
  //...
  RANK_CONFIGS: "/api/v1/rankings",
  SCHEMA_LIST: "/api/v1/investment-schemas",
  SCHEMA_By_ID: (id) =>`/api/v1/investment-schemas/${id}`,
  // Investment:
  INVESTMENT_INVESTMENT_LIST: "",
  // Notification Templates
  MAIL_CONNECTION_TEST: "/api/v1/notifications/mail-connection-test",
  SEND_MAIL: "/api/v1/notifications/send-email",
  TEMPLATE_LIST: (type) => `/api/v1/templates/${type}`,
  TEMPLATE_BY_ID: (type, id) => `/api/v1/templates/${type}/${id}`,
  // Configs...
  CONFIG_PROPERTIES: "http://localhost:8888/nft_app/dev",
  UPDATE_CONFIG: "http://localhost:8888/api/v1/configs/update",
  // Add more as needed...
};
