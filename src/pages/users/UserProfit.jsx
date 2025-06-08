import React, { useState } from 'react';
import PageTitle from "../../components/page_title/PageTitle";
import Badge from "../../components/Badge";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { NavLink } from 'react-router-dom';
ModuleRegistry.registerModules([AllCommunityModule]);


const UserProfit = () => {

  const UserCell = ({ data }) => {
    const { userId, user } = data;
    return (
      <NavLink to={`/admin/users/${userId}/edit`}>
        {user}
      </NavLink>
    )
  }

  const AmountCell = ({ value }) => {
    if (!value) return null;

    // Remove currency and commas, just check for minus sign
    const isNegative = value.trim().startsWith('-');

    const style = {
      color: isNegative ? '#ef476f' : '#06d6a0', // red or green
      fontWeight: 'bold',
    };

    return <span style={style}>{value}</span>;
  };

  const [rowData] = useState([
    { date: "Jun 07 2025 05:26", userId: 1, user: "TestTest2362", type: "Signup Bonus", amount: "-+8 INR", profitFrom: "System", description: "Signup Bonus" },
    { date: "Jun 07 2025 05:26", userId: 2, user: "JohnDoe123", type: "Signup Bonus", amount: "+8 INR", profitFrom: "System", description: "Signup Bonus" },
    { date: "Jun 07 2025 05:26", userId: 2, user: "JohnDoe123", type: "Referral", amount: "+50 INR", profitFrom: "test2test27066", description: "Deposit Referral Bonus Via Test2 Test2 - Level 1" },
    { date: "Jun 07 2025 05:26", userId: 2, user: "JohnDoe123", type: "Referral", amount: "+100 INR", profitFrom: "test2test27066", description: "Deposit Referral Bonus Via Test2 Test2 - Level 2" },
    { date: "Jun 07 2025 05:26", userId: 2, user: "JohnDoe123", type: "Referral", amount: "+100 INR", profitFrom: "test2test27066", description: "Deposit Referral Bonus Via Test2 Test2 - Level 1" },
    { date: "Jun 07 2025 05:26", userId: 2, user: "JohnDoe123", type: "Referral", amount: "+250 INR", profitFrom: "MinalPal6996 ", description: "Deposit Referral Bonus Via Minal Pal - Level 1" },
    { date: "Jun 07 2025 05:26", userId: 2, user: "JohnDoe123", type: "Interest", amount: "+1 INR", profitFrom: "System ", description: "Crypto investment Plan Interest" },
    { date: "Jun 07 2025 05:26", userId: 2, user: "JohnDoe123", type: "Interest", amount: "+1 INR", profitFrom: "System ", description: "Crypto investment Plan Interest" },
    { date: "Jun 07 2025 05:26", userId: 2, user: "JohnDoe123", type: "Bonus", amount: "+10 INR", profitFrom: "System ", description: "Referral Bonus by Level 2" },
    { date: "Jun 07 2025 05:26", userId: 2, user: "JohnDoe123", type: "Bonus", amount: "+20 INR", profitFrom: "System ", description: "Referral Bonus by Level 2" },
  ]);

  const [colDefs] = useState([
    { field: "date", width: 150 },
    { field: "user", width: 150 , cellRenderer: UserCell},
    { field: "amount", width: 120, cellRenderer: AmountCell },
    { field: "type", width: 150, cellRenderer: (params) => <Badge value={params.value} style={{ background: '#5e3fc9' }} /> },
    { field: "profitFrom", width: 150 },
    { field: "description", width: 300 },
  ]);




  return (
    <div className="main-content">
      <PageTitle title="All Profits" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="site-card">
              <div className="site-card-body table-responsive">
                <div className="site-datatable">
                  <div style={{ height: 500 }} className="ag-theme-alpine">
                    <AgGridReact
                      theme={"legacy"}
                      rowData={rowData}
                      columnDefs={colDefs}
                      pagination={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserProfit;
