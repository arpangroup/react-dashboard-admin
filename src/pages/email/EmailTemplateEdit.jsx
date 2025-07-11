import React from 'react';
import { LuMail } from "react-icons/lu";
import PageTitle from '../../components/page_title/PageTitle';

const EmailTemplateEdit = ({ name }) => {



  return (
    <div className="main-content">
      <PageTitle title="Email Template"  />

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-8 col-md-12">
            <div className="site-card">
              <div class="site-card-header">
                <h3 class="title"> Edit User Mail Send Template</h3>
                <div class="card-header-links">
                  <a href="#" class="card-header-link">Back</a>
                </div>
              </div>

              <div class="site-card-body">
                <form action="#" enctype="multipart/form-data">
                  <input type="hidden" name="_token" value="RtOih6ujzDcML9cSdZ1x5oykyYyUfNL7EXkZgrod" />
                  <input type="hidden" name="id" value="1" />
                  <div class="site-input-groups row">
                    <label for="" class="col-sm-3 col-label">Email Subject<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Here the Email Subject will come" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-9">
                      <input type="text" name="subject" class="box-input" value="[[subject]] for [[full_name]]" required="" />
                    </div>
                  </div>
                  <div class="site-input-groups row">
                    <label name="" class="col-sm-3 col-label">Banner<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Leave it blank if you don't need the banner" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-9">
                      <div class="wrap-custom-file">
                        <input type="file" name="banner" id="heroRightImg" accept=".gif, .jpg, .png" />
                        <label for="heroRightImg"
                          class="file-ok"
                          style={{ backgroundImage: 'url( https://81habibi.com/assets/global/images/Uxp3vfYFFi4GuO95lyZn.jpg )' }}>
                          <img class="upload-icon" src="https://81habibi.com/assets/global/materials/upload.svg" alt="" />
                          <span>Update Banner</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="site-input-groups row">
                    <label for="" class="col-sm-3 col-label">Title<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Leave it blank if you don't need the title" class="lucide lucide-info" aria-label="Leave it blank if you don't need the title"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-9">
                      <input type="text" name="title" class="box-input" value="Sample Email" required="" />
                    </div>
                  </div>

                  <div class="site-input-groups row">
                    <label for="" class="col-sm-3 col-label">Salutation<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Show the Greetings here" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-9">
                      <input type="text" name="salutation" class="box-input" value="Hi [[full_name]]," required="" />
                    </div>
                  </div>
                  <div class="site-input-groups row">
                    <label for="" class="col-sm-3 col-label">Message Body<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Write the main Messages here" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-9">
                      <textarea name="message_body" class="form-textarea" cols="30" rows="8">Thanks for joining us  [[site_title]]

                        [[message]]


                        Find out more about in - [[site_url]]</textarea>
                    </div>
                  </div>
                  <div class="site-input-groups row">
                    <label for="" class="col-sm-3 col-label">Button<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Leave it blank if you don't need the button" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-4">
                      <input type="text" name="button_level" class="box-input" value="Login Your Account" required="" />
                    </div>
                    <div class="col-sm-5">
                      <input type="text" name="button_link" class="box-input" value="https://hyiorio.tdevs.co/login" required="" />
                    </div>
                  </div>
                  <div class="row site-input-groups">
                    <label for="" class="col-sm-3 col-label pt-0">Newsletter Footer<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Newsletter Footer Status" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-5">
                      <div class="site-input-groups mb-0">
                        <div class="switch-field mb-0">
                          <input type="radio" id="welcome_user_newslatter_footer_status" name="footer_status" value="1" checked />
                          <label for="welcome_user_newslatter_footer_status">Enable</label>
                          <input type="radio" id="welcome_user_newslatter_footer_desable" name="footer_status" value="0" />
                          <label for="welcome_user_newslatter_footer_desable">Disable</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="site-input-groups row">
                    <label for="" class="col-sm-3 col-label">Footer Message Body<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Write the footer Messages here" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-9">
                      <textarea name="footer_body" class="form-textarea" cols="30" rows="8">Regards,
                        [[site_title]]</textarea>
                    </div>
                  </div>
                  <div class="row site-input-groups">
                    <label for="" class="col-sm-3 col-label pt-0">Newsletter Bottom<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Newslatter Bottom Status" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-5">
                      <div class="site-input-groups mb-0">
                        <div class="switch-field mb-0">
                          <input type="radio" id="footer_bottom" name="bottom_status" value="1" />
                          <label for="footer_bottom">Enable</label>
                          <input type="radio" id="footer_bottom_disable" name="bottom_status" value="0" checked />
                          <label for="footer_bottom_disable">Disable</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="site-input-groups row">
                    <label for="" class="col-sm-3 col-label">Newsletter Bottom Title<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Show the Greetings here" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-9">
                      <input type="text" name="bottom_title" class="box-input" value="What is [[site_title]]" required="" />
                    </div>
                  </div>
                  <div class="site-input-groups row">
                    <div class="offset-sm-3 col-sm-9">
                      <textarea name="bottom_body" class="form-textarea" cols="30" rows="8">Hyiprio is a visual asset manager made for collaboration. Build a central library for your team's visual assets. Empower creation and ensure consistency from your desktop.

                        [[site_url]]   </textarea>
                      <p class="paragraph mb-0 mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="alert-triangle" icon-name="alert-triangle" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>The Shortcuts you can use
                        <strong>[[full_name]], [[site_url]], [[site_title]], [[subject]], [[message]]</strong></p>
                    </div>
                  </div>

                  <div class="row site-input-groups">
                    <label for="" class="col-sm-3 col-label pt-0">Template Status<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Template Status" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-5">
                      <div class="site-input-groups mb-0">
                        <div class="switch-field mb-0">
                          <input type="radio" id="template_status_enable" name="status" value="1" />
                          <label for="template_status_enable">Enable</label>
                          <input type="radio" id="template_status_disable" name="status" value="0" checked="" />
                          <label for="template_status_disable">Disable</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="offset-sm-3 col-sm-9">
                      <button type="submit" class="site-btn-sm primary-btn w-100">Save Changes</button>
                    </div>
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

export default EmailTemplateEdit;
