import React from 'react';

const InvestmentTab = ({ activeTab }) => {
  const isActive = activeTab === "investments";
  
  return (
    <div 
      className={`tab-pane fade ${isActive ? "show active" : ""}`}
      id="pills-transfer" role="tabpanel"
      aria-labelledby="pills-transfer-tab">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="site-card">
            <div className="site-card-header">
              <h4 className="title">Investments</h4>
            </div>
            <div className="site-card-body table-responsive">
              <div className="site-datatable">
                <table id="user-investment-dataTable"
                  className="display data-table">
                  <thead>
                    <tr>
                      <th>Icon</th>
                      <th>Schema</th>
                      <th>ROI</th>
                      <th>Profit</th>
                      <th>Capital Back</th>
                      <th>Timeline</th>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTab;