import { API_ROUTES } from "../constants/apiRoutes";

export const mockResponses = {
  // Static paginated user list
  [API_ROUTES.USERS]: async (queryParams) => {return USERS},

  // Static response for a specific user (hardcoded userId = 123)
  [API_ROUTES.USER_BY_ID(123)]: async () => ({
    id: 123,
    username: "mockuser123",
    email: "mock123@example.com",
    walletBalance: 500,
    profitBalance: 50,
    country: "India",
  }),

  // Static transactions for a specific user
  [API_ROUTES.USER_TRANSACTIONS(123)]: async () => ({
    content: [
      {
        txnDate: "2025-07-10T10:00:00Z",
        txnRefId: "TXN123456",
        txnType: "Deposit",
        amount: 200,
        gateway: "PayPal",
        status: "Success",
        userId: 123,
        user: "mockuser123",
      },
    ],
    totalPages: 1,
  }),
};



const USERS = { content:[
    {id:1,username:`mockuser1`,email:`mock1@example.com`,rankCode:"RANK_1",walletBalance:1000,profitBalance:100,referralCode:`REF1`,createdAt:new Date().toISOString(),kycStatus:"Verified",active:true,accountStatus:"Active"},
    {id:1,username:`mockuser2`,email:`mock2@example.com`,rankCode:"RANK_2",walletBalance:2000,profitBalance:200,referralCode:`REF2`,createdAt:new Date().toISOString(),kycStatus:"Verified",active:true,accountStatus:"Pending"},
] };