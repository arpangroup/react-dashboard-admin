import React from 'react';

const ReferralTreeTab = ({ activeTab }) => {
  const isActive = activeTab === "referral";

  return (
    <div     
    className={`tab-pane fade ${isActive ? "show active" : ""}`}
    id="pills-tree" 
    role="tabpanel"
      aria-labelledby="pills-transactions-tab">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="site-card">
            <div className="site-card-header">
              <h4 className="title">Referral Tree</h4>
            </div>
            <div className="site-card-body table-responsive">


              <p>No Referral user found</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralTreeTab;