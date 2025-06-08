import React, { useState } from 'react';
import PageTitle from "../../components/page_title/PageTitle";
import Badge from "../../components/Badge";
import { LuArrowBigRight } from "react-icons/lu";
import "./Investments.css";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { NavLink } from 'react-router-dom';
ModuleRegistry.registerModules([AllCommunityModule]);


const Investments = () => {

  const UserCell = ({ data }) => {
    const { userId, user } = data;
    return (
      <NavLink to={`/admin/users/${userId}/edit`}>
        {user}
      </NavLink>
    )
  }

  const SchemaCell = ({ data }) => {
    const { currency, investmentAmount, createdAt } = data;
    return (
      <div className="schema-cell">
        <strong>
          {currency} <LuArrowBigRight /> ₹{investmentAmount}
        </strong>
        <div className="invested-date">{createdAt}</div>
      </div>
    )
  }

  const TimeLineCell = ({ data }) => {
    return (
      <div className="schema-cell">
        <strong>
          <span>0D : 13H : 52M : 3S</span>
        </strong>
        <div className="site-badge primary-bg ms-2-date" style={{width: '60px'}} >42.25%</div>
        <div className="progress investment-timeline">
            <div className="progress-bar progress-bar-striped progress-bar-animated" id="time-progress36" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    )
  }



  const [rowData] = useState([
    { userId: 1, planId: 1, user: "John Doe", currency: "USDT", investmentAmount: "5000", roi: "2%", profit: "0 x 100 = 0 INR", capitalBack: "No", periodRemaining: "654 Times", createdAt: "Jun 08 2025 02:32", timeline: "" },
    { userId: 1, planId: 2, user: "Mustafa ansari", currency: "Crypto investment", investmentAmount: "5000", roi: "20%", profit: "0 x 100 = 0 INR", capitalBack: "Yes", periodRemaining: "654 Times", createdAt: "Jun 08 2025 02:32", timeline: "" },
    { userId: 1, planId: 2, user: "Mustafa ansari", currency: "Crypto investment", investmentAmount: "5000", roi: "20%", profit: "0 x 100 = 0 INR", capitalBack: "Yes", periodRemaining: "654 Times", createdAt: "Jun 08 2025 02:32", timeline: "Pending" },
  ]);

  const [colDefs] = useState([
    { field: "user", width: 120, cellRenderer: UserCell },
    { field: "schema", width: 250, cellRenderer: SchemaCell },
    { field: "roi", width: 80 },
    { field: "profit", width: 150 },
    { field: "periodRemaining", width: 150 },
    { field: "capitalBack", width: 120, cellRenderer: Badge },
    { field: "timeline", width: 180, cellRenderer: TimeLineCell },
  ]);




  return (
    <div className="main-content">
      <PageTitle title="All Investments" />

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
                      rowHeight={80}
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

export default Investments;
