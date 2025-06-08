import React, { useState } from 'react';
import PageTitle from "../../components/page_title/PageTitle";
import Badge from "../../components/Badge";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { NavLink } from 'react-router-dom';
ModuleRegistry.registerModules([AllCommunityModule]);


const DepositHistory = () => {

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
      color: isNegative ? '#ef476f' : '#2a9d8f', // red or green
      fontWeight: 'bold',
    };

    return <span style={style}>{value}</span>;
  };

  const [rowData] = useState([
    { date: "Jun 07 2025 05:26", userId: 1, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Withdraw", amount: "500 INR", gateway: "WITHDRAWAL", charge: "250 INR", status: "Pending" },
    { date: "Jun 07 2025 05:26", userId: 2, user: "JohnDoe123", txnId: "TRXPOZ5ZZYDTJ", type: "Investment", amount: "500 INR", gateway: "System", charge: "250 INR", status: "Success" },
    { date: "Jun 07 2025 05:26", userId: 3, user: "ElonMusk9897", txnId: "TRXPOZ5ZZYDTJ", type: "Refund", amount: "5000 INR", gateway: "System", charge: "250 INR", status: "Success" },
    { date: "Jun 07 2025 05:26", userId: 4, user: "SteveJobs5454", txnId: "TRXPOZ5ZZYDTJ", type: "Subtract", amount: "500 INR", gateway: "System", charge: "250 INR", status: "Success" },
    { date: "Jun 07 2025 05:26", userId: 5, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Withdraw", amount: "5000 INR", gateway: "WITHDRAWAL", charge: "250 INR", status: "Cancelled" }
  ]);

  const [colDefs] = useState([
    { field: "date", width: 150 },
    { field: "user", width: 200 , cellRenderer: UserCell},
    { field: "txnId", headerName: "TRANSACTION ID", width: 150 },
    { field: "amount", width: 120, cellRenderer: AmountCell },
    { field: "gateway", width: 150 },
    { field: "charge", width: 150 },
    { field: "status", width: 120, cellRenderer: Badge },
  ]);




  return (
    <div className="main-content">
      <PageTitle title="Deposit History" />

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

export default DepositHistory;

