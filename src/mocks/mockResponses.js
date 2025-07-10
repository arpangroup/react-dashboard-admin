import { API_ROUTES } from "../constants/apiRoutes";

export const mockResponses = {
  [API_ROUTES.USERS]: async (queryParams) => USERS,
  [API_ROUTES.USER_BY_ID(1)]: async () => USER_BY_ID,
  [API_ROUTES.TRANSACTIONS]: async (queryParams) => TRANSACTIONS,
  [API_ROUTES.USER_TRANSACTIONS(1)]: async () => TRANSACTIONS,
  [API_ROUTES.KYC_LIST]: async () => KYC_LIST,
  [API_ROUTES.RANK_CONFIGS]: async () => RANK_CONFIGS,
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

const KYC_LIST = { content:[
 {"kycId":1,"fullname":"Mock User1","documentType":"NATIONAL_ID","createdAt":"2025-07-10T18:44:58.884196","status":"PENDING"},
 {"kycId":1,"fullname":"Mock User2","documentType":"NATIONAL_ID","createdAt":"2025-07-10T18:44:58.884196","status":"REJECTED"},
 {"kycId":1,"fullname":"Mock User2","documentType":"NATIONAL_ID","createdAt":"2025-07-10T18:44:58.884196","status":"VERIFIED"}
]};

const RANK_CONFIGS = { content: [
  {"id":1,"code":"RANK_0","displayName":"TrustAI Member","rankOrder":0,"minDepositAmount":15.0000,"minInvestmentAmount":15.0000,"minReferralTotalDeposit":0.0000,"minReferralTotalInvestment":0.0000,"minTotalEarnings":0.0000,"minDirectReferrals":0,"minTeamSize":0,"minTeamVolume":0,"txnPerDay":0,"requiredLevelCounts":{"1":0,"2":0,"3":0},"commissionPercentage":0.00,"rankBonus":10,"description":null,"active":true,"achievable":false,"imageUrl":null,"rewardType":"CASH","rankType":"PERFORMANCE"},
  {"id":2,"code":"RANK_1","displayName":"TrustAI Leader","rankOrder":1,"minDepositAmount":40.0000,"minInvestmentAmount":0.0000,"minReferralTotalDeposit":0.0000,"minReferralTotalInvestment":0.0000,"minTotalEarnings":0.0000,"minDirectReferrals":0,"minTeamSize":0,"minTeamVolume":0,"txnPerDay":1,"requiredLevelCounts":{"1":0,"2":0,"3":0},"commissionPercentage":1.00,"rankBonus":20,"description":null,"active":true,"achievable":false,"imageUrl":null,"rewardType":"CASH","rankType":"PERFORMANCE"},
  {"id":3,"code":"RANK_2","displayName":"TrustAI Captain","rankOrder":2,"minDepositAmount":300.0000,"minInvestmentAmount":100.0000,"minReferralTotalDeposit":0.0000,"minReferralTotalInvestment":0.0000,"minTotalEarnings":0.0000,"minDirectReferrals":4,"minTeamSize":0,"minTeamVolume":0,"txnPerDay":1,"requiredLevelCounts":{"1":4,"2":5,"3":1},"commissionPercentage":1.70,"rankBonus":20,"description":null,"active":true,"achievable":false,"imageUrl":null,"rewardType":"CASH","rankType":"PERFORMANCE"},
  {"id":4,"code":"RANK_3","displayName":"TrustAI Victor","rankOrder":3,"minDepositAmount":600.0000,"minInvestmentAmount":200.0000,"minReferralTotalDeposit":0.0000,"minReferralTotalInvestment":0.0000,"minTotalEarnings":0.0000,"minDirectReferrals":6,"minTeamSize":0,"minTeamVolume":0,"txnPerDay":1,"requiredLevelCounts":{"1":6,"2":25,"3":5},"commissionPercentage":2.30,"rankBonus":20,"description":null,"active":true,"achievable":false,"imageUrl":null,"rewardType":"CASH","rankType":"PERFORMANCE"},
  {"id":5,"code":"RANK_4","displayName":"TrustAI Champion","rankOrder":4,"minDepositAmount":1500.0000,"minInvestmentAmount":300.0000,"minReferralTotalDeposit":0.0000,"minReferralTotalInvestment":0.0000,"minTotalEarnings":0.0000,"minDirectReferrals":12,"minTeamSize":0,"minTeamVolume":0,"txnPerDay":1,"requiredLevelCounts":{"1":12,"2":35,"3":10},"commissionPercentage":2.80,"rankBonus":20,"description":null,"active":true,"achievable":false,"imageUrl":null,"rewardType":"CASH","rankType":"PERFORMANCE"},
  {"id":6,"code":"RANK_5","displayName":"TrustAI Silver","rankOrder":5,"minDepositAmount":3000.0000,"minInvestmentAmount":400.0000,"minReferralTotalDeposit":0.0000,"minReferralTotalInvestment":0.0000,"minTotalEarnings":0.0000,"minDirectReferrals":16,"minTeamSize":0,"minTeamVolume":0,"txnPerDay":1,"requiredLevelCounts":{"1":16,"2":70,"3":20},"commissionPercentage":3.30,"rankBonus":20,"description":null,"active":true,"achievable":false,"imageUrl":null,"rewardType":"CASH","rankType":"PERFORMANCE"},
  {"id":7,"code":"RANK_6","displayName":"TrustAI Gold","rankOrder":6,"minDepositAmount":6000.0000,"minInvestmentAmount":500.0000,"minReferralTotalDeposit":0.0000,"minReferralTotalInvestment":0.0000,"minTotalEarnings":0.0000,"minDirectReferrals":20,"minTeamSize":0,"minTeamVolume":0,"txnPerDay":1,"requiredLevelCounts":{"1":20,"2":160,"3":40},"commissionPercentage":3.80,"rankBonus":20,"description":null,"active":true,"achievable":false,"imageUrl":null,"rewardType":"CASH","rankType":"PERFORMANCE"},
  {"id":8,"code":"RANK_7","displayName":"TrustAI Platinum","rankOrder":7,"minDepositAmount":15000.0000,"minInvestmentAmount":500.0000,"minReferralTotalDeposit":0.0000,"minReferralTotalInvestment":0.0000,"minTotalEarnings":0.0000,"minDirectReferrals":35,"minTeamSize":0,"minTeamVolume":0,"txnPerDay":1,"requiredLevelCounts":{"1":35,"2":350,"3":50},"commissionPercentage":4.50,"rankBonus":20,"description":null,"active":true,"achievable":false,"imageUrl":null,"rewardType":"CASH","rankType":"PERFORMANCE"}
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