import React from 'react';

const ProfileBasicInfoTab = ({ activeTab }) => {
  const isActive = activeTab === "info";
  
  return (
    <div 
    className={`tab-pane fade ${isActive ? "show active" : ""}`}
    id="pills-informations" role="tabpanel"
      aria-labelledby="pills-informations-tab">
      <div className="row">
        <div className="col-xl-12">
          <div className="site-card">
            <div className="site-card-header">
              <h3 className="title">Basic Info</h3>
            </div>
            <div className="site-card-body">
              <form action="/admin/user/19" method="post">
                <input type="hidden" name="_method" value="PUT" />
                <input
                  type="hidden" name="_token"
                  value="" />
                <div className="row">

                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for="" className="box-input-label">First
                        Name:</label>
                      <input type="text" className="box-input"
                        value="Monuking1000k" name="first_name"
                        required="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for="" className="box-input-label">Last
                        Name:</label>
                      <input type="text" className="box-input" value="King"
                        required="" name="last_name" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for=""
                        className="box-input-label">Country:</label>
                      <input type="text" className="box-input" value="India"
                        disabled />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for="" className="box-input-label">Phone:</label>
                      <input type="text" className="box-input" value="+91 "
                        disabled />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for=""
                        className="box-input-label">Username:</label>
                      <input type="text" className="box-input" name="username"
                        value="Monuking1000kKing2638" required="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for="" className="box-input-label">Email:</label>
                      <input type="email" className="box-input"
                        value="Anitarani3774@gamil.com" disabled />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for=""
                        className="box-input-label">Gender:</label>
                      <input type="text" className="box-input" value=""
                        required="" disabled />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for="" className="box-input-label">Date of
                        Birth:</label>
                      <input type="text" className="box-input" value=""
                        disabled />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for="" className="box-input-label">City:</label>
                      <input type="text" name="city" className="box-input"
                        value="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for="" className="box-input-label">Zip
                        Code:</label>
                      <input type="text" className="box-input" name="zip_code"
                        value="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for=""
                        className="box-input-label">Address:</label>
                      <input type="text" className="box-input" name="address"
                        value="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for="" className="box-input-label">Joining
                        Date:</label>
                      <input type="text" className="box-input"
                        value="Tue, May 27, 2025 1:28 PM" required=""
                        disabled />
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <button type="submit"
                      className="site-btn-sm primary-btn w-100 centered">Save
                      Changes</button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="site-card">
            <div className="site-card-header">
              <h3 className="title">Change Password</h3>
            </div>
            <div className="site-card-body">
              <form action="/admin/user/password-update/19"
                method="post">
                <input type="hidden" name="_token"
                  value="" />
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for="" className="box-input-label">New
                        Password:</label>
                      <input type="password" name="new_password"
                        className="box-input" required="" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="site-input-groups">
                      <label for="" className="box-input-label">Confirm
                        Password:</label>
                      <input type="password" name="new_confirm_password"
                        className="box-input" required="" />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <button type="submit"
                      className="site-btn-sm primary-btn w-100 centered">Change
                      Password</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfileBasicInfoTab;