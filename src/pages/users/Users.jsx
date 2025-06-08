import React, { useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { themeBalham } from 'ag-grid-community';

import PageTitle from "../../components/page_title/PageTitle";
import { NavLink } from "react-router-dom";

ModuleRegistry.registerModules([AllCommunityModule]);

const Users = () => {

  const ActionLink = (props) => {
    return (
      <NavLink to={`/admin/users/${props.data.id}/edit`} style={{ color: "#007bff" }}>
        View
      </NavLink>
    );
  };
  const [rowData] = useState([
    { avatar: "", id: "1", user: "John Doe", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "PENDING", status: "ACTIVE", action: "" },
    { avatar: "", id: "2", user: "John Doe", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "PENDING", status: "ACTIVE", action: "" },
    { avatar: "", id: "3", user: "John Doe", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "PENDING", status: "ACTIVE", action: "" },
    { avatar: "", id: "4", user: "John Doe", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "PENDING", status: "ACTIVE", action: "<button>Edit</button>" },
  ]);

  const [colDefs] = useState([
    { field: "avatar" },
    { field: "user", filter: true, filterParams: {} },
    { field: "email" },
    { field: "balance" },
    { field: "profit" },
    { field: "kyc" },
    { field: "status", filter: true, filterParams: {} },
    {
      field: "action",
      headerName: "Action",
      cellRenderer: ActionLink
    },
  ]);

  const defaultColDef = {
    flex: 1,
  };

  return (
    <div className="main-content">
      <PageTitle title="All Customers" />

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
                      defaultColDef={defaultColDef}
                      pagination={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Users;
