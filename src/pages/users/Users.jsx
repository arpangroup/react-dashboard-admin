import React, { useState } from "react";
import { LuPencilLine, LuMail, LuTrash } from "react-icons/lu";
import './Users.css';

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { themeBalham } from 'ag-grid-community';

import PageTitle from "../../components/page_title/PageTitle";
import { NavLink } from "react-router-dom";
import SendEmailPanel from "./SendEmailPanel";

ModuleRegistry.registerModules([AllCommunityModule]);

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

const styleActionButtonDelete = {
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
  background: "#ef476f",
};


const Users = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");

  const ActionLink = (props) => {
    return (
      <>
        <NavLink to={`/admin/users/${props.data.id}/edit`} style={styleActionButtonEdit} class="round-icon-btn red-btn editKyc">
          <LuPencilLine />
        </NavLink>

        <button class="round-icon-btn red-btn deleteKyc" type='button' onClick={() => handleSendEmailClisk(props.data)} style={styleActionButtonDelete} >
          <LuMail />
        </button>
      </>
    );
  };


  const Badge = ({ value }) => {
    if (!value) return null;

    const normalizedValue = value.toLowerCase();

    let badgeType = '';
    switch (normalizedValue) {
      case 'pending':
      case 'unverified':
        badgeType = 'pending';
        break;
      case 'verified':
      case 'success':
      case 'active':
        badgeType = 'success';
        break;
      case 'deactivated':
      case 'inactive':
        badgeType = 'danger';
        break;
      default:
        badgeType = 'default';
        break;
    }

    return (
      <div className={`site-badge ${badgeType}`}>
        {value}
      </div>
    );
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  const handleSendEmailClisk = (user) => {
    console.log("USER: ", user);  
    setSelectedUser(user);    
    setIsPanelOpen(true);
  }



  const Avatar = (props) => {
    const rowIndex = props.node?.rowIndex ?? 0;
    const colorIndex = rowIndex % 10;

    const fullName = props.data?.user ?? '';
    const nameParts = fullName.trim().split(' ');
    const initials = nameParts
      .slice(0, 2) // only take the first 2 words
      .map(part => part.charAt(0).toUpperCase())
      .join('');

    return (
      <span className={`avatar-text color-${colorIndex}`}>
        {initials || '?'}
      </span>
    );
  };

  const [rowData] = useState([
    { avatar: "", id: "1", user: "John Doe", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "Unverified", status: "Deactivated", action: "" },
    { avatar: "", id: "2", user: "Elon Musk", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "Verified", status: "Active", action: "" },
    { avatar: "", id: "3", user: "Steve Jobs", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "PENDING", status: "ACTIVE", action: "" },
    { avatar: "", id: "4", user: "Bill Gates", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "PENDING", status: "ACTIVE", action: "<button>Edit</button>" },
  ]);

  const [colDefs] = useState([
    { field: "avatar", cellRenderer: Avatar, width: 80, resizable: false, sortable: false, filter: false, suppressSizeToFit: true },
    { field: "user", width: 200, filter: true, filterParams: {} },
    { field: "email", width: 160 },
    { field: "balance", width: 90 },
    { field: "profit", width: 90 },
    { field: "kyc", width: 140, cellRenderer: Badge },
    { field: "status", width: 140, cellRenderer: Badge },
    {
      field: "action",
      width: 120,
      headerName: "Action",
      cellRenderer: ActionLink
    },
  ]);

  const defaultColDef = {
    // flex: 1,    
    minWidth: 80,
    resizable: true,
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

      <SendEmailPanel
        isOpen={isPanelOpen}
        onClose={closePanel}
        username={selectedUser.user}
        email={selectedUser.email}
      />

    </div>
  );
};

export default Users;
