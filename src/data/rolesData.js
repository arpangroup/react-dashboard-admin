export const modules = [
  {
    title: "Customer Management",
    id: "CustomerManagement",
    permissions: [
      { label: "Customer List", id: "customer-list", value: "1", checked: true },
      { label: "Customer Login", id: "customer-login", value: "2" },
      { label: "Customer Mail Send", id: "customer-mail-send", value: "3" },
      { label: "Customer Basic Manage", id: "customer-basic-manage", value: "4" },
      { label: "Customer Balance Add Or Subtract", id: "customer-balance-add-or-subtract", value: "5" },
      { label: "Customer Change Password", id: "customer-change-password", value: "6" },
      { label: "All Type Status", id: "all-type-status", value: "7" },
    ],
  },
  {
    title: "KYC Management",
    id: "KycManagement",
    permissions: [
      { label: "KYC View", id: "kyc-view", value: "8" },
      { label: "KYC Approve", id: "kyc-approve", value: "9" },
    ],
  },
  {
    title: "Role Management",
    id: "RoleManagement",
    permissions: [
      { label: "Role List", id: "role-list", value: "10" },
      { label: "Role Create", id: "role-create", value: "11" },
    ],
  },
  // Add other modules like Staff Management, Plan Management, etc.
];