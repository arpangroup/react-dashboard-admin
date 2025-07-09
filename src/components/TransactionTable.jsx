// src/components/TransactionTable.jsx
import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils';
import { usePaginatedFetch } from '../hooks/usePaginatedFetch';
import Badge from './Badge';


import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { themeBalham } from 'ag-grid-community';
// ModuleRegistry.registerModules([AllCommunityModule]);


const UserCell = ({ data }) => {
  const { userId, user } = data;
  return <NavLink to={`/admin/users/${userId}/edit`}>{user}</NavLink>;
};

const DateCell = ({ value }) => {
  if (!value) return null;
  return <span>{formatDate(value)}</span>;
};

const AmountCell = ({ value }) => {
  if (value === null || value === undefined) return null;

  const strValue = String(value);
  const isNegative = strValue.trim().startsWith('-');

  const style = {
    color: isNegative ? '#ef476f' : '#2a9d8f',
    fontWeight: 'bold',
  };

  return <span style={style}>{strValue}{" INR"}</span>;
};

const TransactionTable = ({ userId = null, pageSize = 9999 }) => {
  const [page, setPage] = useState(0);
  const url = userId ? `/api/v1/transactions/user/${userId}` : `/api/v1/transactions`;
  const { data, loading } = usePaginatedFetch(url, page, pageSize, null);

  const colDefs = [
    { field: "txnDate", headerName: 'DATE', width: 150, cellRenderer: DateCell },
    // Only show user column if no userId filter (because userId column is irrelevant when filtering by user)
    ...(!userId ? [{ field: "user", headerName: 'USER', width: 200, cellRenderer: UserCell }] : []),
    { field: "txnRefId", headerName: 'TXN_ID', width: 150 },
    { field: "txnType", headerName: 'TYPE', width: 150, cellRenderer: (params) => <Badge value={params.value} style={{ background: '#5e3fc9' }} /> },
    { field: "amount", headerName: 'AMOUNT', width: 120, cellRenderer: AmountCell },
    { field: "gateway", width: 150 },
    { field: "status", width: 120, cellRenderer: Badge },
  ];

  const defaultColDef = {
    minWidth: 80,
    resizable: true,
  };

  const onPaginationChanged = useCallback((params) => {
    const newPage = params.api.paginationGetCurrentPage();
    setPage(newPage);
  }, []);

  return (
    <div style={{ height: 500, width: '100%' }} className="ag-theme-alpine">
      <AgGridReact
        theme={"legacy"}
        rowData={data}
        loading={loading}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={10}
        onPaginationChanged={onPaginationChanged}
        paginationPageSizeSelector={[10, 20, 50, 100]}
        rowHeight={40}
      />
    </div>
  );
};

export default TransactionTable;
