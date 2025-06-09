import React, { useState } from 'react';
import { LuMail } from "react-icons/lu";
import PageTitle from '../../components/page_title/PageTitle';
import RightPanel from '../../components/panel/RightPanel';

const EmailSetting = ({ name }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="main-content">
      <PageTitle title="Mail Settings" />


      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-8 col-lg-12 col-md-12 col-12">
            <div className="site-card">


              <div class="site-card-header">
                <h3 class="title">Mail Settings</h3>
                <div class="card-header-links">
                  <button class="card-header-link" onClick={() => {setIsPanelOpen(true);}}> 
                    <LuMail style={{marginTop: '-4px', marginRight: '12px'}}/>
                    <span>Connection Check</span>
                    </button>
                </div>
              </div>


              <div class="site-card-body">
                <form action="https://81habibi.com/admin/settings/update" method="post">
                  <input type="hidden" name="_token" value="RtOih6ujzDcML9cSdZ1x5oykyYyUfNL7EXkZgrod" />
                  <input type="hidden" name="section" value="mail" />
                  <div class="site-input-groups row mb-0">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-label">
                      Mail Setting
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                      <div class="form-row row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div class="site-input-groups">
                            <label for="" class="box-input-label col-label">Email From Name</label>
                            <input type="text" class="box-input" name="email_from_name" value="Moneyglobals" required="" />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div class="site-input-groups">
                            <label for="" class="box-input-label col-label">Email From Address</label>
                            <input type="email" class="box-input" name="email_from_address" value="info@Moneyglobals.in" required="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-label pt-0">
                      Mailing Driver
                    </div>

                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                      <div class="site-input-groups">

                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="mailing_driver" id="smtp" value="smtp" checked="" />
                          <label class="form-check-label col-label pt-0" for="smtp">
                            SMTP
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-label">
                      Configuration
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                      <div class="form-row row">
                        <div class="col-xl-6 col-md-6 col-sm-12">
                          <div class="site-input-groups">
                            <label for="" class="box-input-label">Mail Username</label>
                            <input type="text" class="box-input" name="mail_username" value="rahul@Moneyglobals.co.in" required="" />
                          </div>
                        </div>
                        <div class="col-xl-6 col-md-6 col-sm-12">
                          <div class="site-input-groups">
                            <label for="" class="box-input-label">Mail Password</label>
                            <input type="password" class="box-input" name="mail_password" value="1234567890" required="" />
                          </div>
                        </div>
                      </div>
                      <div class="form-row row">
                        <div class="col-xl-6 col-md-6 col-sm-12">
                          <div class="site-input-groups">
                            <label for="" class="box-input-label">SMTP Host</label>
                            <input type="text" class="box-input" name="mail_host" value="rahul@Moneyglobals.co.in" required="" />
                          </div>
                        </div>
                        <div class="col-xl-3 col-md-3 col-sm-12">
                          <div class="site-input-groups">
                            <label for="" class="box-input-label">SMTP Port</label>
                            <input type="text" class="box-input" name="mail_port" value="465" required="" />
                          </div>
                        </div>
                        <div class="col-xl-3 col-md-3 col-sm-12">
                          <div class="site-input-groups">
                            <label for="" class="box-input-label">SMTP Secure</label>
                            <input type="text" class="box-input" name="mail_secure" value="tls" required="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="offset-sm-3 col-sm-9 col-12">
                      <button type="submit" class="site-btn-sm primary-btn w-100">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RightPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} style={{width: '600px'}}>
        <h2>SMTP Connection</h2>
        <form action="https://81habibi.com/admin/settings/mail-connection-test" method="post">
          <div class="row">

            <div class="col-xl-12">
              <div class="site-input-groups">
                <label for="" class="box-input-label">Your Email:</label>
                <input type="email" name="email" class="box-input mb-0" required="" />
              </div>
            </div>
            <div class="col-xl-12">
              <button type="submit" class="site-btn primary-btn w-100">
                Check Now
              </button>
            </div>
          </div>
        </form>
      </RightPanel>
    </div>
  );
};

export default EmailSetting;
