import React from 'react';
import { LuPencilLine, LuPlus, LuSettings } from "react-icons/lu";

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
import RightPanel from '../../components/panel/RightPanel';
import RankConfigEditor from './RankConfigEditor';

import rank5 from '../../assets/images/rank5.jpg';


const fallbackIcons = {
  1: "https://cdn-icons-png.flaticon.com/512/8037/8037137.png",
  2: "https://81habibi.com/assets/global/images/sCQgIyl0OKzFiO73nmWF.svg",
  3: "https://81habibi.com/assets/global/images/TQDUvbD48kmhmV9qifzh.svg",
  4: "https://81habibi.com/assets/global/images/hGHllGGCIYfpx5Z2VKrW.svg",
  5: "https://81habibi.com/assets/global/images/SaNfYL7WD2pzAAME8Sqb.svg",
  6: rank5,
};

const UserRanking = (props) => {
    const { data, loading } = useFetchJson(`/api/v2/rankings`);
    const [isPanelOpen, setIsPanelOpen] = useState(false);


      const ActionLinkAddNew = (props) => {
        return (
            <>
                <button className="title-btn" onClick={() => setIsPanelOpen(true)}>
                    <LuSettings />
                    <span> Rank Config</span>
                </button>

                <a href="/admin/rankings/create"
                    className="title-btn">
                    <LuPlus />
                    <span> ADD NEW</span>
                </a>
            </>
        );
      };

    const ActionLink = (props) => {
        return (
            <NavLink to={`/admin/rankings/edit/${props.data.id}`} className="round-icon-btn purple">
                <LuPencilLine />
            </NavLink>
        );
    };

    const RankIconCell = (props) => {
        const { id, imageUrl } = props.data;
        const rankIcon = imageUrl || fallbackIcons[id] || '';

        return (
            <img src={rankIcon} style={{ width: '40px', height: '40px' }} alt="" />
        );
    };




    // const [rowData] = useState([
    //     { id: 1, rank: "Level 1", rankName: "Hyip Member", minimumEarning: "0 INR", bonus: "0 INR", description: "", status: "Active", rankIcon: "https://81habibi.com/assets/global/images/sCQgIyl0OKzFiO73nmWF.svg" },
    //     { id: 2, rank: "Level 2", rankName: "Hyip Leader", minimumEarning: "60 INR", bonus: "10 INR", description: "", status: "Active", rankIcon: "https://81habibi.com/assets/global/images/TQDUvbD48kmhmV9qifzh.svg" },
    //     { id: 3, rank: "Level 3", rankName: "Hyip Captain", minimumEarning: "220 INR", bonus: "20 INR", description: "", status: "Active", rankIcon: "https://81habibi.com/assets/global/images/hGHllGGCIYfpx5Z2VKrW.svg" },
    //     { id: 4, rank: "Level 4", rankName: "Hyip Victor", minimumEarning: "2000 INR", bonus: "50 INR", description: "", status: "Active", rankIcon: "https://81habibi.com/assets/global/images/SaNfYL7WD2pzAAME8Sqb.svg" },
    // ]);

    const [colDefs] = useState([
        { field: "code", headerName: 'RANK', width: 100,  },
        { field: "rankIcon", width: 80, headerName: "ICON", cellRenderer: RankIconCell },
        { field: "displayName", headerName: 'RANKING NAME', filter: true, filterParams: {} },
        { field: "minDepositAmount", headerName: 'MIN. DEPOSIT', valueFormatter: (params) => `${params.value}$`, width: 140 },
        { field: "minTotalEarnings", headerName: "MIN. EARNING", width: 140,  },
        { field: "rankBonus", headerName: 'BONUS', width: 100},
        { field: "active", headerName: 'STATUS', cellRenderer: Badge },
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
                                            rowData={data}
                                            // rowData={data}
                                            loading={loading}
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
             <RightPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} style={{width: '1150px'}}>
                <RankConfigEditor/>
            </RightPanel>
        </div>
    );
};

export default UserRanking;
