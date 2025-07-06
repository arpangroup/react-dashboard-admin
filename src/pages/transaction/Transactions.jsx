import React, { useCallback, useState } from 'react';
import PageTitle from "../../components/page_title/PageTitle";
import Badge from "../../components/Badge";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { NavLink } from 'react-router-dom';
import { usePaginatedFetch } from '../../hooks/usePaginatedFetch';
ModuleRegistry.registerModules([AllCommunityModule]);

const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Format: "Jul 06 2025 08:03"
  const options = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  const formatted = date.toLocaleString('en-US', options);
  // Reorder the parts to match: "Jul 06 2025 08:03"
  const [monthDay, year, time] = formatted.split(', ');
  return `${monthDay} ${year} ${time}`;
}


const Transactions = () => {
  const pageSize = 9999;
  const [page, setPage] = useState(0);
  const { data, totalPages, loading } = usePaginatedFetch(`/api/v1/transactions`, page, pageSize, null);

  const UserCell = ({ data }) => {
    const { userId, user } = data;
    return (
      <NavLink to={`/admin/users/${userId}/edit`}>
        {user}
      </NavLink>
    )
  }

  const DateCell = ({ value }) => {
    if (!value) return null;
    return <span>{formatDate(value)}</span>;
  };

  const AmountCell = ({ value }) => {
    if (value === null || value === undefined) return null;

    const strValue = String(value); // Convert number to string
    const isNegative = strValue.trim().startsWith('-');

    const style = {
      color: isNegative ? '#ef476f' : '#2a9d8f', // red or green
      fontWeight: 'bold',
    };

    return <span style={style}>{strValue}{" INR"}</span>;
  };

  // const [rowData] = useState([
  //   { date: "Jun 07 2025 05:26", userId: 1, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Withdraw", amount: "-2000 INR", gateway: "WITHDRAWAL", status: "Pending" },
  //   { date: "Jun 07 2025 05:26", userId: 2, user: "JohnDoe123", txnId: "TRXPOZ5ZZYDTJ", type: "Investment", amount: "-5000 INR", gateway: "System", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 3, user: "ElonMusk9897", txnId: "TRXPOZ5ZZYDTJ", type: "Refund", amount: "5000 INR", gateway: "System", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 4, user: "SteveJobs5454", txnId: "TRXPOZ5ZZYDTJ", type: "Subtract", amount: "-5000 INR", gateway: "System", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 5, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Withdraw", amount: "-5000 INR", gateway: "WITHDRAWAL", status: "Cancelled" },
  //   { date: "Jun 07 2025 05:26", userId: 6, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Investment", amount: "-5000 INR", gateway: "System", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 7, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Signup Bonus", amount: "-5000 INR", gateway: "System", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 8, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Deposit", amount: "-5000 INR", gateway: "System", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 9, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Refund", amount: "-5000 INR", gateway: "System", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 10, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Referral", amount: "-5000 INR", gateway: "System", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 11, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Exchange", amount: "-5000 INR", gateway: "System", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 12, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Manual Deposit", amount: "100 INR", gateway: "Cytugi", status: "Cancelled" },
  //   { date: "Jun 07 2025 05:26", userId: 13, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Interest", amount: "-5000 INR", gateway: "System", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 14, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Bonus", amount: "-5000 INR", gateway: "System", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 15, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Manual Deposit", amount: "100 INR", gateway: "Testbep201234567890", status: "Cancelled" },
  // ]);

  const [colDefs] = useState([
    { field: "txnDate", headerName: 'DATE', width: 150, cellRenderer: DateCell },
    { field: "user", headerName: 'USER', width: 200, cellRenderer: UserCell },
    { field: "txnRefId", headerName: 'TXN_ID', width: 150 },
    { field: "txnType", headerName: 'TYPE', width: 150, cellRenderer: (params) => <Badge value={params.value} style={{ background: '#5e3fc9' }} /> },
    { field: "amount", headerName: 'AMOUNT', width: 120, cellRenderer: AmountCell },
    { field: "gateway", width: 150 },
    { field: "status", width: 120, cellRenderer: Badge },
  ]);

  const defaultColDef = {
    // flex: 1,    
    minWidth: 80,
    resizable: true,
  };

  const onPaginationChanged = useCallback((params) => {
    const newPage = params.api.paginationGetCurrentPage();
    setPage(newPage);
  }, []);



  return (
    <div className="main-content">
      <PageTitle title="All Transactions" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="site-card">
              <div className="site-card-body table-responsive">
                <div className="site-datatable">
                  <div style={{ height: 500 }} className="ag-theme-alpine">
                    <AgGridReact
                      theme={"legacy"}
                      rowData={data}
                      loading={loading}
                      columnDefs={colDefs}
                      defaultColDef={defaultColDef}
                      pagination={true}
                      paginationPageSize={10}
                      paginationPageSizeSelector={[10, 20, 50, 100]}
                      onPaginationChanged={onPaginationChanged} />
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

export default Transactions;
