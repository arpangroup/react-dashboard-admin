import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { themeBalham } from 'ag-grid-community';

import PageTitle from "../../components/page_title/PageTitle";

ModuleRegistry.registerModules([AllCommunityModule]);

const Users = () => {
  const [rowData] = useState([
    { avatar: "", user: "John Doe", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "PENDING", status: "ACTIVE", action: "" },
    { avatar: "", user: "John Doe", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "PENDING", status: "ACTIVE", action: "" },
    { avatar: "", user: "John Doe", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "PENDING", status: "ACTIVE", action: "" },
    { avatar: "", user: "John Doe", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "PENDING", status: "ACTIVE", action: "" },
  ]);

  const [colDefs] = useState([
    { field: "avatar"},
    { field: "user", filter: true, filterParams: {}  },
    { field: "email" },
    { field: "balance" },
    { field: "profit" },
    { field: "kyc" },
    { field: "status", filter: true, filterParams: {}  },
    { field: "action"},
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
                      pagination={true}/>
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
