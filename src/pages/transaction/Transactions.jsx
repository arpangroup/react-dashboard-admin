import React, { useState } from 'react';
import PageTitle from "../../components/page_title/PageTitle";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);


const Transactions = ({ name }) => {

  const ActionLink  = (props) => {
    return <div>View</div>
  }

  const [rowData] = useState([
    { date: "Jun 07 2025 05:26", user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Investment", amount: "-5000 INR", gateway: "System", status: "Success"},
    { date: "Jun 07 2025 05:26", user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Investment", amount: "5000 INR", gateway: "System", status: "Success"},
    { date: "Jun 07 2025 05:26", user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Investment", amount: "-5000 INR", gateway: "System", status: "Success"},
    { date: "Jun 07 2025 05:26", user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Investment", amount: "-5000 INR", gateway: "System", status: "Success"},
    { date: "Jun 07 2025 05:26", user: "TestTest2362", txnId: "TRXPOZ5ZZYDTJ", type: "Investment", amount: "-5000 INR", gateway: "System", status: "Success"},
  ]);

  const [colDefs] = useState([
    { field: "date" },
    { field: "user" },
    { field: "txnId"},
    { field: "type"},
    { field: "amount"},
    { field: "gateway"},
    { field: "status"}
  ]);




  return(
    <div className="main-content">
      <PageTitle title="All Transactions" />
      
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-12">
                  <div className="site-card">
                    <div className="site-card-body table-responsive">
                      <div className="site-datatable">
                        <div style={{ height: 400 }} className="ag-theme-alpine">
                          <AgGridReact
                            theme={"legacy"}
                            rowData={rowData}
                            columnDefs={colDefs} />
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
