
export default function Users() {
  return (
    <div className="main-content">

      <div class="page-title">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="title-content">
                <h2 class="title">All Customers</h2>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12">
            <div class="site-card">
              <div class="site-card-body table-responsive">
                <div class="site-datatable">
                  <table id="dataTable" class="display data-table">
                    <thead>
                      <tr>
                        <th>Avatar</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Balance</th>
                        <th>Profit</th>
                        <th>KYC</th>
                        <th>Status</th>
                        <th>Action</th>
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
    </div>
  )
}