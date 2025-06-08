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

const UserRanking = (props) => {

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
          <a href="/admin/ranking/create"
            class="title-btn">
            <LuPlus />
            <span> ADD NEW</span>
          </a>
        );
      };

    const ActionLink = (props) => {
        return (
            <NavLink to={`/admin/ranking/${props.data.id}/edit`} style={styleActionButtonEdit} class="round-icon-btn red-btn editKyc">
                <LuPencilLine />
            </NavLink>
        );
    };

    const RankIconCell = (props) => {
        return(
            <img src={props.data.rankIcon} style={{width: '40px', height: '40px'}}/>
        )
    }


    const [rowData] = useState([
        { id: 1, rank: "Level 1", rankName: "Hyip Member", minimumEarning: "0 INR", bonus: "0 INR", description: "", status: "Active", rankIcon: "https://81habibi.com/assets/global/images/sCQgIyl0OKzFiO73nmWF.svg" },
        { id: 2, rank: "Level 2", rankName: "Hyip Leader", minimumEarning: "60 INR", bonus: "10 INR", description: "", status: "Active", rankIcon: "https://81habibi.com/assets/global/images/TQDUvbD48kmhmV9qifzh.svg" },
        { id: 3, rank: "Level 3", rankName: "Hyip Captain", minimumEarning: "220 INR", bonus: "20 INR", description: "", status: "Active", rankIcon: "https://81habibi.com/assets/global/images/hGHllGGCIYfpx5Z2VKrW.svg" },
        { id: 4, rank: "Level 4", rankName: "Hyip Victor", minimumEarning: "2000 INR", bonus: "50 INR", description: "", status: "Active", rankIcon: "https://81habibi.com/assets/global/images/SaNfYL7WD2pzAAME8Sqb.svg" },
    ]);

    const [colDefs] = useState([
        { field: "rank", width: 80 },
        { field: "rankIcon", width: 80, headerName: "Icon", cellRenderer: RankIconCell },
        { field: "rankName", filter: true, filterParams: {} },
        { field: "minimumEarning", width: 120, headerName: "Min. Earning" },
        { field: "bonus", width: 80},
        { field: "description", width: 180, cellRenderer: Badge },
        { field: "status", cellRenderer: Badge },
        {
            field: "action",
            width: 80,
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
            <PageTitle title="User Rankings"  actionLink={<ActionLinkAddNew />} /> 

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
                                            rowHeight={60}
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

export default UserRanking;
