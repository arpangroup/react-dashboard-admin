import React, { useState } from 'react';

import FormInput from "../../../components/form/FormInput";

const ProfileBasicInfoTab = ({ activeTab, formData, onFormChange }) => {
  const isActive = activeTab === "info";

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

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

                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <FormInput
                      label="First Name"
                      name="first_name"
                      value={formData.first_name}
                      required={true}
                      onChange={onFormChange}
                    />
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <FormInput
                    label="Last Name"
                    name="last_name"
                    value={formData.last_name}
                    required
                    onChange={onFormChange}
                  />
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <FormInput
                    label="Country"
                    name="country"
                    value={formData.country}
                    required
                    disabled={true}
                    onChange={onFormChange}
                  />
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <FormInput
                    label="Phone"
                    name="phone_extension"
                    value={formData.phone}
                    required
                    disabled={true}
                    onChange={onFormChange}
                  />
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">                    
                  <FormInput
                    label="Username"
                    name="username"
                    value={formData.username}
                    required
                    disabled={true}
                    onChange={onFormChange}
                  />
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">                  
                  <FormInput
                    label="Email"
                    name="email"
                    value={formData.email}
                    required
                    disabled={true}
                    onChange={onFormChange}
                  />
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">             
                  <FormInput
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    required
                    disabled={true}
                    onChange={onFormChange}
                  />
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">             
                  <FormInput
                    label="Date of Birth:"
                    name="dob"
                    value={formData.dob}
                    required
                    disabled={true}
                    onChange={onFormChange}
                  />
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">            
                  <FormInput
                    label="City:"
                    name="city"
                    value={formData.city}
                    required
                    onChange={onFormChange}
                  />
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">       
                  <FormInput
                    label="Zip Code::"
                    name="zip_code"
                    value={formData.zip_code}
                    required
                    onChange={onFormChange}
                  />                
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">   
                  <FormInput
                    label="Address:"
                    name="address"
                    value={formData.address}
                    required
                    onChange={onFormChange}
                  />                
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <FormInput
                    label="Joining Date:"
                    name="created_at"
                    value={formData.created_at}
                    required
                    onChange={onFormChange}
                  /> 
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
              <form action="/admin/user/password-update/19" method="post">
                <div className="row">
                  
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <FormInput
                    label="New Password:"
                    name="new_password"
                    type='password'
                    required
                    onChange={onFormChange}
                  /> 
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">                    
                  <FormInput
                    label="Confirm Password:"
                    name="new_confirm_password"
                    type='password'
                    required
                    onChange={onFormChange}
                  />                     
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