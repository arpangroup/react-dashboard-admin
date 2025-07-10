import { API_ROUTES } from "../constants/apiRoutes";

export const mockResponses = {
  [API_ROUTES.USERS]: async (queryParams) => {return USERS},
  [API_ROUTES.USER_BY_ID(1)]: async () => {return USER_BY_ID},
  [API_ROUTES.TRANSACTIONS]: async () => {return TRANSACTIONS},
  [API_ROUTES.USER_TRANSACTIONS(1)]: async () => {return TRANSACTIONS},
};



const USERS = { content:[
    {id:1,username:`mockuser1`,email:`mock1@example.com`,rankCode:"RANK_1",walletBalance:1000,profitBalance:100,referralCode:`REF1`,createdAt:new Date().toISOString(),kycStatus:"Verified",active:true,accountStatus:"Active"},
    {id:1,username:`mockuser2`,email:`mock2@example.com`,rankCode:"RANK_2",walletBalance:2000,profitBalance:200,referralCode:`REF2`,createdAt:new Date().toISOString(),kycStatus:"Verified",active:true,accountStatus:"Pending"},
] };

const TRANSACTIONS = { content:[
  {"id":11,"userId":1,"amount":-5000.00,"txnType":"BONUS","status":"SUCCESS","txnDate":"2025-07-10T12:52:55.423931"},
  {"id":10,"userId":1,"amount":-5000.00,"txnType":"INTEREST","status":"SUCCESS","txnDate":"2025-07-10T12:52:55.415475"},
  {"id":9,"userId":1,"amount":-5000.00,"txnType":"EXCHANGE","status":"SUCCESS","txnDate":"2025-07-10T12:52:55.405128"},
  {"id":8,"userId":1,"amount":-5000.00,"txnType":"REFERRAL","status":"SUCCESS","txnDate":"2025-07-10T12:52:55.394505"},
  {"id":7,"userId":1,"amount":-5000.00,"txnType":"REFUND","status":"SUCCESS","txnDate":"2025-07-10T12:52:55.384488"},
  {"id":6,"userId":1,"amount":-5000.00,"txnType":"DEPOSIT","status":"SUCCESS","txnDate":"2025-07-10T12:52:55.374489"},
  {"id":5,"userId":1,"amount":-5000.00,"txnType":"SIGNUP_BONUS","status":"SUCCESS","txnDate":"2025-07-10T12:52:55.357449"},
  {"id":4,"userId":1,"amount":-5000.00,"txnType":"INVESTMENT","status":"SUCCESS","txnDate":"2025-07-10T12:52:55.346174"},
  {"id":3,"userId":1,"amount":-5000.00,"txnType":"SUBTRACT","status":"CANCELLED","txnDate":"2025-07-10T12:52:55.335173"},
  {"id":2,"userId":1,"amount":5000.00,"txnType":"REFUND","status":"PENDING","txnDate":"2025-07-10T12:52:55.32642"},
  {"id":1,"userId":1,"amount":-5000.00,"txnType":"INVESTMENT","status":"SUCCESS","txnDate":"2025-07-10T12:52:55.292279"}
]};

const USER_BY_ID = {
    "id": 1,
    "username": "mockuser1",
    "firstname": "Mock",
    "lastname": "User1",
    "country": "INDIA",
    "email": "mock1@example.com",
    "mobile": "9876543210",
    "walletBalance": 1000,
    "profitBalance": 100,
    "referralCode": "REF1",
    "rankCode": "RANK_1",
    "kyc": {
        "kycId": 1,
        "email": null,
        "phone": null,
        "address": null,
        "documentType": "NATIONAL_ID",
        "emailVerifyStatus": "UNVERIFIED",
        "phoneVerifyStatus": "UNVERIFIED",
        "status": "PENDING",
        "kycRejectionReason": null
    },
    "accountStatus": {
        "accountStatus": "PENDING",
        "kycStatus": "PENDING",
        "emailVerifyStatus": "UNVERIFIED",
        "phoneVerifyStatus": "UNVERIFIED",
        "emailVerified": false,
        "phoneVerified": false,
        "kycVerified": false,
        "sendMoneyEnabled": false,
        "depositEnabled": false,
        "withdrawEnabled": false,
        "accountActive": false
    },
    "createdAt": "10 Jul Thu, 2025 12:52 PM"
}