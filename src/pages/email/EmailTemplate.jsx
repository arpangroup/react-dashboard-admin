import React from 'react';
import { LuPencilLine, LuMail, LuTrash } from "react-icons/lu";
import PageTitle from '../../components/page_title/PageTitle';


import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { themeBalham } from 'ag-grid-community';
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Badge from '../../components/Badge';

const styleActionButtonEdit = {
  background: "#ef476f",
  width: "30px",
  height: "30px",
  lineHeight: "30px",
  borderRadius: "50%",
  marginRight: "3px",
  color: "#ffffff",
  display: "inline-block",
  textAlign: "center",
  color: "#ffffff",
  background: "#5e3fc9",
};


const EmailTemplate = ({ name }) => {

    const ActionLink = (props) => {
      return (
        <>
          <NavLink to={`/admin/template/email/${props.data.id}/edit`} style={styleActionButtonEdit} class="round-icon-btn red-btn editKyc">
            <LuPencilLine />
          </NavLink>
        </>
      );
    };

      const TemplateNameCell = ({ data }) => {
        const { templateName } = data;
        return (
          <div className="table-description">
            <div className="icon-wrapper">
              <LuMail style={{width: '24px', height: '24px'}}/>
            </div>
            
            <div className="schema-cell">
              {templateName}              
              <span>User</span>
            </div>
          </div>
          )
      }

  const [rowData] = useState([
    { id: 1, templateName: "User Mail Send", status: "Deactivated" },
    { id: 2, templateName: "Subscriber Mail Send", status: "Deactivated" },
    { id: 3, templateName: "Email Verification", status: "Active" },
    { id: 4, templateName: "Forget Password", status: "Active" },
    { id: 5, templateName: "User Investment", status: "Deactivated" },
    { id: 5, templateName: "User Account Disabled", status: "Deactivated" },
    { id: 5, templateName: "Manual Deposit request", status: "Deactivated" },
    { id: 5, templateName: "Withdraw Request", status: "Deactivated" },
    { id: 5, templateName: "Admin Forget Password", status: "Deactivated" },
    { id: 5, templateName: "Contact Mail Send", status: "Deactivated" },
    { id: 5, templateName: "KYC Action", status: "Deactivated" },
    { id: 5, templateName: "Invest ROI", status: "Deactivated" },
    { id: 5, templateName: "Investment End", status: "Deactivated" },
    { id: 5, templateName: "Withdraw Request Action", status: "Deactivated" },
    { id: 5, templateName: "Manual Deposit request Action", status: "Deactivated" },
    { id: 5, templateName: "Support Ticket", status: "Active" },
    { id: 5, templateName: "Support Ticket", status: "Active" }
  ]);

  const [colDefs] = useState([
    { field: "templateName", headerName: "Email For", width: 400, cellRenderer: TemplateNameCell },
    { field: "status", cellRenderer: Badge },
    {field: "action", width: 80, cellRenderer: ActionLink},
  ]);

      const ActionEmailConfig = (props) => {
      return (
        <a href="/admin/setting/mail"
          class="title-btn">
          <LuMail />
          <span> Email Config</span>
        </a>
      );
    };


  return (
    <div className="main-content">
      <PageTitle title="Email Template" 
        actionLink={<ActionEmailConfig />}
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="site-card">
              <div className="site-card-body">

                <div className="site-datatable">
                  <div style={{ height: 500 }} className="ag-theme-alpine">
                    <AgGridReact
                      theme={"legacy"}
                      rowData={rowData}
                      columnDefs={colDefs}
                      rowHeight={70}
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

export default EmailTemplate;
