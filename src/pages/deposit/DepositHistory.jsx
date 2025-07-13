import React, { useCallback, useState } from 'react';
import PageTitle from "../../components/page_title/PageTitle";
import Badge from "../../components/Badge";

import { AgGridReact } from "ag-grid-react";
import { NavLink } from 'react-router-dom';
import { API_ROUTES } from '../../constants/apiRoutes';
import { usePaginatedFetch } from '../../api/usePaginatedFetch';
import { formatDate } from '../../utils/dateUtils';


const DepositHistory = ({ pageSize = 9999 }) => {
  const [page, setPage] = useState(0);
  const { data, totalPages, loading, error } = usePaginatedFetch(API_ROUTES.DEPOSITS, page, pageSize);

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
    return value;

    // Remove currency and commas, just check for minus sign
    const isNegative = value.trim().startsWith('-');

    const style = {
      color: isNegative ? '#ef476f' : '#2a9d8f', // red or green
      fontWeight: 'bold',
    };

    return <span style={style}>{value}</span>;
  };

  const DateCell = ({ value }) => {
    if (!value) return null;    
    return formatDate(value);
  }

  // const [rowData] = useState([
  //   { date: "Jun 07 2025 05:26", userId: 1, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Withdraw", amount: "500 INR", gateway: "WITHDRAWAL", charge: "250 INR", status: "Pending" },
  //   { date: "Jun 07 2025 05:26", userId: 2, user: "JohnDoe123", txnId: "TRXPOZ5ZZYDTJ", type: "Investment", amount: "500 INR", gateway: "System", charge: "250 INR", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 3, user: "ElonMusk9897", txnId: "TRXPOZ5ZZYDTJ", type: "Refund", amount: "5000 INR", gateway: "System", charge: "250 INR", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 4, user: "SteveJobs5454", txnId: "TRXPOZ5ZZYDTJ", type: "Subtract", amount: "500 INR", gateway: "System", charge: "250 INR", status: "Success" },
  //   { date: "Jun 07 2025 05:26", userId: 5, user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Withdraw", amount: "5000 INR", gateway: "WITHDRAWAL", charge: "250 INR", status: "Cancelled" }
  // ]);

  const [colDefs] = useState([
    { field: "txnDate", headerName: "DATE", width: 150, cellRenderer: DateCell },
    { field: "txnRefId", headerName: "TRANSACTION ID", width: 230 },
    { field: "amount", width: 120, cellRenderer: AmountCell },
    { field: "gateway", width: 150 },
    { field: "txnFee", width: 150, valueFormatter: ({ value }) => value != null ? value : 0},
    { field: "status", width: 120, cellRenderer: Badge },
  ]);

  const onPaginationChanged = useCallback((params) => {
    const newPage = params.api.paginationGetCurrentPage();
    setPage(newPage);
  }, []);



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
                    {/* <AgGridReact
                      theme={"legacy"}
                      rowData={rowData}
                      columnDefs={colDefs}
                      pagination={true} /> */}
                      
                    <AgGridReact
                      theme={"legacy"}
                      rowData={data}
                      loading={loading}
                      columnDefs={colDefs}
                      pagination={true}
                      paginationPageSize={10}
                      onPaginationChanged={onPaginationChanged}
                      paginationPageSizeSelector={[10, 20, 50, 100]}
                      rowHeight={40}
                    />
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

