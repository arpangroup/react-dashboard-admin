import React from 'react';
import PageTitle from '../../components/page_title/PageTitle';

const SchemaEdit = () => {
  return (
    <div className="main-content">
      <PageTitle title="Edit Schema" isBack={true} />



      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-12 col-md-12">
            <div className="site-card">
              <div className="site-card-body">
                <form action="https://81habibi.com/admin/schema/1" method="post"
                  enctype="multipart/form-data" className="row">
                  <input type="hidden" name="_method" value="PUT" />
                  <input type="hidden" name="_token" value="6uNwVKwHHRc8JgwVXPyPPcMCbWrA8kRaWXOJrYqQ" />
                  <div className="col-xl-12">
                    <div className="row">
                      <div className="col-xl-3">
                        <div className="site-input-groups">
                          <label className="box-input-label" for="">Upload Icon:</label>
                          <div className="wrap-custom-file">
                            <input
                              type="file"
                              name="icon"
                              id="schema-icon"
                              accept=".gif, .jpg, .png"
                            />
                            <label className="file-ok">
                              <img
                                className="upload-icon"
                                src="https://81habibi.com/assets/global/materials/upload.svg"
                                alt=""
                              />
                              <span>Update Avatar</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="schema-name  col-xl-6 ">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Schema Name:</label>
                      <input
                        type="text"
                        name="name"
                        value="Crypto investment"
                        className="box-input"
                        placeholder="Investment Plan name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 schema-badge ">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Schema Badge:</label>
                      <input
                        type="text"
                        className="box-input"
                        placeholder="Schema Badge"
                        name="badge"
                        value="Crypto"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Schema Type:</label>
                      <div className="switch-field same-type">
                        <input
                          type="radio"
                          id="fixed-type"
                          name="type"
                          value="fixed"
                        />
                        <label for="fixed-type">Fixed</label>
                        <input
                          type="radio"
                          id="range-type"
                          name="type"
                          value="range"
                          checked />
                        <label for="range-type">Range</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="site-input-groups row">


                      <div className="col-xl-6 min-amount ">
                        <label className="box-input-label" for="">Min Amount:</label>
                        <div className="input-group joint-input">
                          <input type="text" name="min_amount" value="500"
                            // oninput="this.value = validateDouble(this.value)"
                            className="form-control" required />
                          <span
                            className="input-group-text">INR</span>
                        </div>
                      </div>
                      <div className="col-xl-6 max-amount ">
                        <label className="box-input-label" for="">Max Amount:</label>
                        <div className="input-group joint-input">
                          <input type="text" name="max_amount" value="25000"
                            // oninput="this.value = validateDouble(this.value)"
                            className="form-control" required />
                          <span
                            className="input-group-text">INR</span>
                        </div>
                      </div>

                      {/* <div className="col-xl-12 fixed-amount  hidden ">
                        <label className="box-input-label" for="">Amount:</label>
                        <div className="input-group joint-input">
                          <input type="text" name="fixed_amount"
                            value="0"
                            // oninput="this.value = validateDouble(this.value)"
                            className="form-control" />
                          <span
                            className="input-group-text">INR</span>
                        </div>
                      </div> */}

                    </div>
                  </div>

                  <div className="col-xl-6">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Return Of Interest:</label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className="box-input"
                          placeholder="Number"
                          name="return_interest"
                          value="20"
                          // oninput="this.value = validateDouble(this.value)"
                          required
                        />
                        <div className="prcntcurr">
                          <select name="interest_type" className="form-select" id="">
                            <option value="percentage"
                              selected >%</option>
                            <option value="fixed"
                            >₹</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Return Period:</label>
                      <select name="return_period" className="form-select" id="">
                        <option value="1"
                        >Hour</option>
                        <option value="2"
                          selected >Daily</option>
                        <option value="3"
                        >Weekly</option>
                        <option value="4"
                        >Month</option>
                        <option value="5"
                        >2 Week</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Return Type:</label>
                      <div className="switch-field same-type">
                        <input
                          type="radio"
                          id="return-type-period"
                          name="return_type"
                          value="period"
                          checked />
                        <label for="return-type-period">Period</label>
                        <input
                          type="radio"
                          id="return-type-lifetime"
                          name="return_type"
                          value="lifetime"
                        />
                        <label for="return-type-lifetime">Lifetime</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 number-period ">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Number of Period:</label>
                      <div className="input-group joint-input">
                        <input
                          type="text"
                          name="number_of_period"
                          value="30"
                          onkeypress="return validateNumber(event)"
                          className="form-control"
                          placeholder="Total Repeat Time"
                          required
                        />
                        <span className="input-group-text">Times</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Profit Return Holiday (If you put any day here, user will never get the profit on that day):</label>
                      <select id="choices-multiple-remove-button" name="off_days[]" placeholder="Manage Days" multiple>
                        <option value="Sunday" selected>Sunday</option>
                        <option value="Monday" selected>Monday</option>
                        <option value="Tuesday" selected>Tuesday</option>
                        <option value="Wednesday" selected>Wednesday</option>
                        <option value="Thursday" selected>Thursday</option>
                        <option value="Friday" selected>Friday</option>
                        <option value="Saturday" selected>Saturday</option>

                      </select>
                    </div>

                  </div>
                  <div className="col-xl-12">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="site-input-groups">
                          <label className="box-input-label" for="">Capital Back:</label>
                          <div className="switch-field same-type">
                            <input
                              type="radio"
                              id="radio-seven"
                              name="capital_back"
                              value="1"
                              checked />
                            <label for="radio-seven">Yes</label>
                            <input
                              type="radio"
                              id="radio-eight"
                              name="capital_back"
                              value="0"
                            />
                            <label for="radio-eight">No</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="site-input-groups">
                          <label className="box-input-label" for="">Featured:</label>
                          <div className="switch-field same-type">
                            <input
                              type="radio"
                              id="featured-yes"
                              name="featured"
                              value="1"
                              checked />
                            <label for="featured-yes">Yes</label>
                            <input
                              type="radio"
                              id="featured-no"
                              name="featured"
                              value="0"
                            />
                            <label for="featured-no">No</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-xl-6 schema-cancel">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Schema Cancel:</label>
                      <div className="switch-field same-type">
                        <input
                          type="radio"
                          id="schema-cancel-yes"
                          name="schema_cancel"
                          value="1"

                        />
                        <label for="schema-cancel-yes">Yes</label>
                        <input
                          type="radio"
                          id="schema-cancel-no"
                          name="schema_cancel"
                          value="0"
                          checked />
                        <label for="schema-cancel-no">No</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 cancel-expiry   hidden ">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Cancel Expiry (Max 59 Minutes):</label>
                      <div className="input-group joint-input">
                        <input type="text" name="expiry_minute"
                          onkeypress="return validateNumber(event)"
                          value="59"
                          className="form-control" />
                        <span
                          className="input-group-text">Minute</span>
                      </div>
                    </div>

                  </div>

                  <div className="col-xl-6">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Schema Trending:</label>
                      <div className="switch-field same-type">
                        <input
                          type="radio"
                          id="schema-trending-yes"
                          name="is_trending"
                          value="1"
                        />
                        <label for="schema-trending-yes">Yes</label>
                        <input
                          type="radio"
                          id="schema-trending-no"
                          name="is_trending"
                          checked value="0"
                        />
                        <label for="schema-trending-no">No</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Status:</label>
                      <div className="switch-field same-type">
                        <input
                          type="radio"
                          id="radio-five"
                          name="status"
                          checked="1"
                          value="1" />
                        <label for="radio-five">Active</label>
                        <input
                          type="radio"
                          id="radio-six"
                          name="status"
                          value="0"
                        />
                        <label for="radio-six">Deactivate</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <button type="submit" className="site-btn-sm primary-btn w-100">
                      Update Schema
                    </button>
                  </div>
                </form>
              </div>




            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default SchemaEdit;
