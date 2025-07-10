import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { LuPencilLine, LuPlus, LuSettings } from 'react-icons/lu';

import PageTitle from '../../components/page_title/PageTitle';
import Badge from '../../components/Badge';
import RightPanel from '../../components/panel/RightPanel';
import RankConfigEditor from './RankConfigEditor';

import rank0 from '../../assets/icons/rank0.png';
import rank1 from '../../assets/icons/rank1.svg';
import rank2 from '../../assets/icons/rank2.svg';
import rank3 from '../../assets/icons/rank3.svg';
import rank4 from '../../assets/icons/rank4.svg';
import rank5 from '../../assets/icons/rank5.jpg';

import { usePaginatedFetch } from '../../api/usePaginatedFetch';
import { API_ROUTES } from '../../constants/apiRoutes';


// const fallbackIcons = {
//   1: "https://cdn-icons-png.flaticon.com/512/8037/8037137.png",
//   2: "https://81habibi.com/assets/global/images/sCQgIyl0OKzFiO73nmWF.svg",
//   3: "https://81habibi.com/assets/global/images/TQDUvbD48kmhmV9qifzh.svg",
//   4: "https://81habibi.com/assets/global/images/hGHllGGCIYfpx5Z2VKrW.svg",
//   5: "https://81habibi.com/assets/global/images/SaNfYL7WD2pzAAME8Sqb.svg",
//   6: rank5,
// };

const fallbackIcons = {
  1: rank0,
  2: rank1,
  3: rank2,
  4: rank3,
  5: rank4,
  6: rank5,
};

const UserRanking = (props) => {
  const [page, setPage] = useState(0);
    //const { data, loading } = useFetchJson(`/api/v2/rankings`);
    const { data, totalPages, loading, error } = usePaginatedFetch(API_ROUTES.RANK_CONFIGS, page, 9999, {status: "ACTIVE"});
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
                                            loading={loading}
                                            columnDefs={colDefs}
                                            defaultColDef={defaultColDef}
                                            pagination={true}                      
                                            paginationPageSize={10}
                                            paginationPageSizeSelector={[10, 20, 50, 100]} />
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
