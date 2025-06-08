import React from 'react';
import { LuEye } from "react-icons/lu";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { themeBalham } from 'ag-grid-community';
import { useState } from "react";
import { NavLink } from "react-router-dom";

import PageTitle from "../../components/page_title/PageTitle";
import KycDetailsPanel from './KycDetailsPanel';


ModuleRegistry.registerModules([AllCommunityModule]);

const KycList = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedKyc, setSelectedKyc] = useState(null);

  const handleKycDetailsClisk = (kyc) => {
    const kycObj = {
      nidNumber: '6277366377363637',
      kycImage: 'https://81habibi.com/assets/global/images/wIzOWakjUq1xWMgBg6vh.jpg',
      actionMessage: ''
    }
    setSelectedKyc(kycObj);
    setIsPanelOpen(true);
  }

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  const ActionLink = (props) => {
    return (
      // <NavLink to={`/admin/kyc/${props.data.id}/edit`} style={{ color: "#007bff" }}>
      //   View
      // </NavLink>
      <button className='round-icon-btn primary-btn' type='button' onClick={handleKycDetailsClisk}>
        <LuEye />
      </button>
    );
  };

  const [rowData] = useState([
    { date: "April 20 2025 06:50", id: "1", user: "TestTest2362", type: "National ID Verification", status: "Verified", action: "" },
    { date: "April 17 2025 03:47", id: "2", user: "amitsharma1311", type: "National ID Verification", status: "Verified", action: "" }
  ]);

  const [colDefs] = useState([
    { field: "date" },
    { field: "user", filter: true, filterParams: {} },
    { field: "type" },
    { field: "status" },
    {
      field: "action",
      headerName: "Action",
      cellRenderer: ActionLink
    },
  ]);



  return (
    <div className="main-content">
      <PageTitle title="All KYC" />

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

       <KycDetailsPanel
        isOpen={isPanelOpen}
        onClose={closePanel}
        kycData={selectedKyc}
      />




    </div>
  )
}

export default KycList;