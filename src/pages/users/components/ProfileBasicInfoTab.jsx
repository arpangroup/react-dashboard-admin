import React, { useState } from 'react';

import FormInput from "../../../components/form/FormInput";

const ProfileBasicInfoTab = ({ activeTab, formData, onFormChange }) => {
  const isActive = activeTab === "info";

  const basicFields = [
    { label: "First Name", name: "first_name" },
    { label: "Last Name", name: "last_name" },
    { label: "Country", name: "country", disabled: true },
    { label: "Phone", name: "phone_extension", disabled: true, valueKey: "phone" },
    { label: "Username", name: "username", disabled: true },
    { label: "Email", name: "email", disabled: true },
    { label: "Gender", name: "gender", disabled: true },
    { label: "Date of Birth", name: "dob", disabled: true },
    { label: "City", name: "city" },
    { label: "Zip Code", name: "zip_code" },
    { label: "Address", name: "address" },
    { label: "Joining Date", name: "created_at" },
  ];

  const passwordFields = [
    { label: "New Password", name: "new_password", type: "password" },
    { label: "Confirm Password", name: "new_confirm_password", type: "password" },
  ];

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };
  return (
    <div
      className={`tab-pane fade ${isActive ? "show active" : ""}`}
      id="pills-informations"
      role="tabpanel"
      aria-labelledby="pills-informations-tab"
    >
      {/* Basic Info */}
      <div className="row">
        <div className="col-xl-12">
          <div className="site-card">
            <div className="site-card-header">
              <h3 className="title">Basic Info</h3>
            </div>
            <div className="site-card-body">
              <form action="/admin/user/19" method="post">
                <div className="row">
                  {basicFields.map((field) => (
                    <div
                      className="col-xl-4 col-lg-6 col-md-6 col-sm-6"
                      key={field.name}
                    >
                      <FormInput
                        label={field.label}
                        name={field.name}
                        type={field.type || "text"}
                        value={formData[field.valueKey || field.name] || ""}
                        required
                        disabled={field.disabled}
                        onChange={onFormChange}
                      />
                    </div>
                  ))}

                  <div className="col-xl-12">
                    <button
                      type="submit"
                      className="site-btn-sm primary-btn w-100 centered"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="row">
        <div className="col-xl-12">
          <div className="site-card">
            <div className="site-card-header">
              <h3 className="title">Change Password</h3>
            </div>
            <div className="site-card-body">
              <form action="/admin/user/password-update/19" method="post">
                <div className="row">
                  {passwordFields.map((field) => (
                    <div
                      className="col-xl-6 col-lg-6 col-md-6 col-sm-6"
                      key={field.name}
                    >
                      <FormInput
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        required
                        onChange={onFormChange}
                      />
                    </div>
                  ))}

                  <div className="col-xl-12">
                    <button
                      type="submit"
                      className="site-btn-sm primary-btn w-100 centered"
                    >
                      Change Password
                    </button>
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