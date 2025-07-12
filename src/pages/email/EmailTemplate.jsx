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
import { usePaginatedFetch } from '../../api/usePaginatedFetch';
import { API_ROUTES } from '../../constants/apiRoutes';


const EmailTemplate = ({ type = "email", pageSize = 9999 }) => {
  const [page, setPage] = useState(0);  
  const { data, totalPages, loading, error } = usePaginatedFetch(API_ROUTES.TEMPLATE_LIST(type), page, pageSize);

    const ActionLink = (props) => {
      return (
        <>
          <NavLink to={`/admin/template/email/${props.data.id}/edit`} className="round-icon-btn purple">
            <LuPencilLine />
          </NavLink>
        </>
      );
    };

      const TemplateNameCell = ({ data }) => {
        console.log("DATA: ", data)
        const { code, templateFor } = data;
        return (
          <div className="table-description">
            <div className="icon-wrapper">
              <LuMail style={{width: '24px', height: '24px'}}/>
            </div>
            
            <div className="schema-cell">
              {code}              
              <span>{templateFor}</span>
            </div>
          </div>
          )
      }

  const [colDefs] = useState([
    { field: "code", headerName: "Email For", width: 400, cellRenderer: TemplateNameCell },
    { field: "templateActive", headerName: "Stattus", cellRenderer: Badge },
    {field: "action", width: 80, cellRenderer: ActionLink},
  ]);

      const ActionEmailConfig = (props) => {
      return (
        <a href="/admin/setting/mail"
          className="title-btn">
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
                      rowData={data}
                      loading={loading}
                      columnDefs={colDefs}
                      pagination={true}
                      paginationPageSize={10}
                      paginationPageSizeSelector={[10, 20, 50, 100]}
                      rowHeight={60}
                    />
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
