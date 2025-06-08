import React from 'react';
import { LuPencilLine, LuPlus } from "react-icons/lu";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Add your preferred theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { themeBalham } from 'ag-grid-community';
import { useState } from "react";
import { NavLink } from "react-router-dom";

import PageTitle from "../../components/page_title/PageTitle";
import Badge from '../../components/Badge';

const Schema = (props) => {

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

      const ActionLinkAddNew = (props) => {
        return (
          <a href="/admin/schema/1/edit"
            class="title-btn">
            <LuPlus />
            <span> ADD NEW</span>
          </a>
        );
      };

    const ActionLink = (props) => {
        return (
            <NavLink to={`/admin/schema/${props.data.id}/edit`} style={styleActionButtonEdit} class="round-icon-btn red-btn editKyc">
                <LuPencilLine />
            </NavLink>
        );
    };


    const [rowData] = useState([
        { id: 1, icon: "", planName: "Crypto investment", amountRange: "500 INR-25000 INR", badge: "Crypto", status: "Active", action: "" },
    ]);

    const [colDefs] = useState([
        { field: "icon", width: 80 },
        { field: "planName" },
        { field: "amountRange", filter: true, filterParams: {} },
        { field: "badge", width: 120, cellRenderer: Badge },
        { field: "status", cellRenderer: Badge },
        {
            field: "action",
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
            <PageTitle title="All Schemas"  actionLink={<ActionLinkAddNew />} /> 

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

export default Schema;
