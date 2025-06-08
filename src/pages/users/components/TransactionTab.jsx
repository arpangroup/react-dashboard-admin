import React from 'react';

const TransactionTab = ({ activeTab }) => {
  const isActive = activeTab === "transactions";

  return (
    <div
     className={`tab-pane fade ${isActive ? "show active" : ""}`}
    id="pills-transactions" 
    role="tabpanel"
      aria-labelledby="pills-transactions-tab">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="site-card">
            <div className="site-card-header">
              <h4 className="title">Transactions</h4>
            </div>
            <div className="site-card-body table-responsive">
              <div className="site-datatable">
                <table id="user-transaction-dataTable"
                  className="display data-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Transaction ID</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Gateway</th>
                      <th>Status</th>
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

export default TransactionTab;