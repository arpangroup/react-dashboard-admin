import React, { useCallback, useState } from "react";
import { LuPencilLine, LuMail, LuTrash } from "react-icons/lu";
import './Users.css';

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { themeBalham } from 'ag-grid-community';

import PageTitle from "../../components/page_title/PageTitle";
import { NavLink, useParams } from "react-router-dom";
import SendEmailPanel from "./SendEmailPanel";
import Badge from "../../components/Badge";
import { useFetchJson } from "../../hooks/useFetchJson";
import RightPanel from "../../components/panel/RightPanel";
import { usePaginatedFetch } from "../../hooks/usePaginatedFetch";

// ModuleRegistry.registerModules([AllCommunityModule]);

const Users = ({status = ""}) => {
  const pageSize = 9999;
  const [page, setPage] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const { data, totalPages, loading } = usePaginatedFetch(`/api/v1/users`, page, pageSize, status);

  const ActionLink = (props) => {
    return (
      <>
        <NavLink to={`/admin/users/${props.data.id}/edit`} className="round-icon-btn purple">
          <LuPencilLine />
        </NavLink>

        <button className="round-icon-btn red" type='button' onClick={() => handleSendEmailClisk(props.data)} >
          <LuMail />
        </button>
      </>
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
    const fullName = props.data?.firstname ?? props.data.username;
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

  

  // const [rowData] = useState([
  //   { avatar: "", id: "1", user: "John Doe", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "Unverified", status: "Deactivated", action: "" },
  //   { avatar: "", id: "2", user: "Elon Musk", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "Verified", status: "Active", action: "" },
  //   { avatar: "", id: "3", user: "Steve Jobs", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "PENDING", status: "ACTIVE", action: "" },
  //   { avatar: "", id: "4", user: "Bill Gates", email: "john@doe.com", balance: 64950, profit: 2000, kyc: "PENDING", status: "ACTIVE", action: "<button>Edit</button>" },
  // ]);

  // const [colDefs] = useState([
  //   { field: "avatar", , width: 80, resizable: false, sortable: false, filter: false, suppressSizeToFit: true },
  //   { field: "user", width: 200, filter: true, filterParams: {} },
  //   { field: "email", width: 160 },
  //   { field: "balance", width: 90 },
  //   { field: "profit", width: 90 },
  //   { field: "kyc", width: 140, cellRenderer: Badge },
  //   { field: "status", width: 140, cellRenderer: Badge },
  //   {
  //     field: "action",
  //     width: 120,
  //     headerName: "Action",
  //     cellRenderer: ActionLink
  //   },
  // ]);


  const [colDefs, setColumnDefs] = useState([
      { field: "avatar", cellRenderer: Avatar, width: 80, resizable: false, sortable: false, filter: false, suppressSizeToFit: true},
      { field: "username", width: 200, filter: true},
      { field: "email", width: 160},
      { field: "walletBalance", headerName: "Balance", width: 90},
      { field: "profitBalance", headerName: "Profit", width: 90},
      { field: "kycStatus", cellRenderer: Badge, headerName: "Kyc", width: 140},
      { field: "accountStatus", cellRenderer: Badge, headerName: "Status", width: 140},
      { field: "Action", cellRenderer: ActionLink, width: 120}
    ]);

    // const defaultColDef = useMemo(() => {
    //   return {
    //     flex: 1,
    //     minWidth: 100,
    //   };
    // }, []);

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
      <PageTitle title={`${status || 'All '} Customers`} />

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="site-card">
              <div className="site-card-body table-responsive">
                <div className="site-datatable">
                  <div style={{ height: 520 }} className="ag-theme-alpine">
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

      {/* <SendEmailPanel
        isOpen={isPanelOpen}
        onClose={closePanel}
        username={selectedUser.user}
        email={selectedUser.email}
      /> */}

      <RightPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)}>
        <h2>{`Send Mail to ${selectedUser.username}`}</h2>
        <SendEmailPanel username={selectedUser.username} email={selectedUser.email}/>
      </RightPanel>


    </div>
  );
};

export default Users;
