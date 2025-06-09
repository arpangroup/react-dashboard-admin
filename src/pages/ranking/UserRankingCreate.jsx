import React from 'react';
import PageTitle from '../../components/page_title/PageTitle';

const UserRankingCreate = ({ name }) => {
  return (
    <div className="main-content">
      <PageTitle title="Add New Ranking" />

      {/* ############################## */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="site-card">
              <div className="site-card-body">
                <div class="popup-body-text">
                  <h3 class="title mb-4">Edit Ranking</h3>
                  <div class="site-input-groups">
                    <label class="box-input-label" for="">Ranking Icon:</label>
                    <div class="wrap-custom-file">
                      <input type="file" name="icon" id="image6" accept=".gif, .jpg, .png"/>
                       <label for="image6" id="image-old" class="file-ok" style={{backgroundImage: 'url(https://81habibi.com/assets/global/images/sCQgIyl0OKzFiO73nmWF.svg)'}}>
                                    <img class="upload-icon" src="https://81habibi.com/assets/global/materials/upload.svg" alt=""/>
                                    <span>Update Icon</span>
                                </label>
                    </div>
                  </div>
                  <div class="site-input-groups row mb-0">
                    <div class="col-xl-6">
                      <div class="site-input-groups">
                        <label for="" class="box-input-label">Ranking:</label>
                        <input type="text" name="ranking" class="box-input mb-0 ranking" required=""/>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="site-input-groups">
                        <label for="" class="box-input-label">Ranking Name:</label>
                        <input type="text" name="ranking_name" class="box-input mb-0 ranking-name" required=""/>
                      </div>
                    </div>
                  </div>

                  <div class="site-input-groups row mb-0">
                    <div class="col-xl-6">
                      <div class="site-input-groups">
                        <label for="" class="box-input-label">Minimum Deposit:</label>
                        <div class="input-group joint-input">
                          <input type="text" class="form-control minimum-deposit" name="minimum_deposit" 
                          
                          />
                            <span class="input-group-text">INR</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="site-input-groups">
                        <label for="" class="box-input-label">Minimum Invest:</label>
                        <div class="input-group joint-input">
                          <input type="text" class="form-control minimum-invest" name="minimum_invest" 
                          
                          />
                            <span class="input-group-text">INR</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="site-input-groups row mb-0">
                    <div class="col-xl-6">
                      <div class="site-input-groups">
                        <label for="" class="box-input-label">Minimum Referral:</label>
                        <input type="text" name="minimum_referral" value="" 
                        
                         class="box-input minimum-referral mb-0 " placeholder="Minimum Referral" required=""/>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="site-input-groups">
                        <label for="" class="box-input-label">Minimum Referral Deposit:</label>
                        <div class="input-group joint-input">
                          <input type="text" class="form-control minimum-referral-deposit" name="minimum_referral_deposit" 
                          
                          />
                            <span class="input-group-text">INR</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="site-input-groups row mb-0">
                    <div class="col-xl-6">
                      <div class="site-input-groups">
                        <label for="" class="box-input-label">Minimum Referral Invest:</label>
                        <div class="input-group joint-input">
                          <input type="text" class="form-control minimum-referral-invest" name="minimum_referral_invest" 
                          />
                            <span class="input-group-text">INR</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="site-input-groups">
                        <label for="" class="box-input-label">Minimum Earning:</label>
                        <div class="input-group joint-input">
                          <input type="text" class="form-control minimum-earnings" name="minimum_earnings" 
                          
                          />
                            <span class="input-group-text">INR</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="site-input-groups">
                    <label for="" class="box-input-label">Bonus:</label>
                    <div class="input-group joint-input">
                      <input type="text" class="form-control bonus" name="bonus" 
                      
                      />
                        <span class="input-group-text">INR</span>
                    </div>
                  </div>

                  <div class="site-input-groups mb-0">
                    <label for="" class="box-input-label">Description:</label>
                    <textarea name="description" class="form-textarea description"></textarea>
                  </div>
                  <div class="site-input-groups mb-0">
                    <label class="box-input-label" for="">Status:</label>
                    <div class="switch-field">
                      <input type="radio" id="activeStatus" name="status" value="1" checked="checked"/>
                        <label for="activeStatus">Active</label>
                        <input type="radio" id="disableStatus" name="status" value="0"/>
                          <label for="disableStatus">Disabled</label>
                        </div>
                    </div>

                    <div class="action-btns">
                      <button type="submit" class="site-btn-sm primary-btn me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" icon-name="check" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Save Changes
                      </button>
                      <a href="#" class="site-btn-sm red-btn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="x" icon-name="x" class="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                        Close
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ############################## */}

      </div>
      );
};

      export default UserRankingCreate;