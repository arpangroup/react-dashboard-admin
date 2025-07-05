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
import { useFetchJson } from '../../hooks/useFetchJson';

const Schema = (props) => {
    const { data, loading } = useFetchJson(`/api/v1/investment-schemas`);
    const ActionLinkAddNew = (props) => {
        return (
            <a href="/admin/schemas/create"
                class="title-btn">
                <LuPlus />
                <span> ADD NEW</span>
            </a>
        );
    };

    const StatusBadge = (props) => {
        return (
            <Badge value={props.data.active ? 'success' : 'deactivated'}/>
        );
    };

    const AmountRangeCell = (props) => {
        console.log("PROPS_DATA: ", props.data);
        const { schemaType, minimumInvestmentAmount, maximumInvestmentAmount, currency } = props.data;

        let amountRangeStr = `${minimumInvestmentAmount} ${currency}`;
        if (schemaType == 'RANGE' && (maximumInvestmentAmount !== null && maximumInvestmentAmount !== 0)) {
            amountRangeStr += ` - ${maximumInvestmentAmount} ${currency}`;
        }

        return (
           <b>{amountRangeStr}</b>
        );
    };

    const ActionLink = (props) => {
        return (
            <NavLink to={`/admin/schemas/edit/${props.data.id}`} className="round-icon-btn purple">
                <LuPencilLine />
            </NavLink>
        );
    };


    // const [rowData] = useState([
    //     { id: 1, icon: "", planName: "Crypto investment", amountRange: "500 INR-25000 INR", badge: "Crypto", status: "Active", action: "" },
    // ]);

    const [colDefs] = useState([
        { field: "icon", headerName: 'ICON', width: 80 },
        { field: "title", headerName: 'PLAN NAME' },
        { field: "amountRange", headerName: 'AMOUNT', cellRenderer: AmountRangeCell, filter: true, filterParams: {} },
        { field: "schemaBadge", headerName: 'BADGE', width: 120, cellRenderer: Badge },
        { field: "status", headerName: 'STATUS', cellRenderer: StatusBadge },
        { field: "action", headerName: "Action", cellRenderer: ActionLink },
    ]);

    const defaultColDef = {
        // flex: 1,    
        minWidth: 80,
        resizable: true,
    };

    return (
        <div className="main-content">
            <PageTitle title="All Schemas" actionLink={<ActionLinkAddNew />} />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="site-card">
                            <div className="site-card-body table-responsive">
                                <div className="site-datatable">
                                    <div style={{ height: 500 }} className="ag-theme-alpine">
                                        <AgGridReact
                                            theme={"legacy"}
                                            rowData={data}
                                            loading={loading}
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
