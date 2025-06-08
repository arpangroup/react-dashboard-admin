import React from 'react';

const PushNotificationTemplateEdit = ({ name }) => {
  return (
    <div className="main-content">
      <div class="container-fluid mt-4">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-md-12">
            <div class="site-card">
              <div class="site-card-header">
                <h3 class="title"> Edit New User Template</h3>
                <div class="card-header-links">
                  <a href="https://81habibi.com/admin/template/notification" class="card-header-link">Back</a>
                </div>
              </div>
              <div class="site-card-body">
                <form action="https://81habibi.com/admin/template/notification/template-update" method="post" enctype="multipart/form-data">
                  <input type="hidden" name="_token" value="RtOih6ujzDcML9cSdZ1x5oykyYyUfNL7EXkZgrod" />
                  <input type="hidden" name="id" value="1" />

                  <div class="site-input-groups row">
                    <label for="" class="col-sm-3 col-label">Title<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Leave it blank if you don't need the title" class="lucide lucide-info" aria-label="Leave it blank if you don't need the title"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-9">
                      <input type="text" name="title" class="box-input" value="Wellcome to [[full_name]]" required="" />
                    </div>
                  </div>


                  <div class="site-input-groups row">
                    <label for="" class="col-sm-3 col-label">Message Body<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Write the main Messages here" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-9">
                      <textarea name="message_body" class="form-textarea" cols="30" rows="8">Thanks for joining us  [[full_name]]

                        [[message]]</textarea>
                      <p class="paragraph mb-0 mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="alert-triangle" icon-name="alert-triangle" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>The Shortcuts you can use
                        <strong>[[full_name]], [[message]]</strong></p>
                    </div>
                  </div>






                  <div class="row site-input-groups">
                    <label for="" class="col-sm-3 col-label pt-0">Template Status<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" icon-name="info" data-bs-toggle="tooltip" title="" data-bs-original-title="Template Status" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></label>
                    <div class="col-sm-5">
                      <div class="site-input-groups mb-0">
                        <div class="switch-field mb-0">
                          <input type="radio" id="template_status_enable" name="status" value="1" checked="" />
                          <label for="template_status_enable">Enable</label>
                          <input type="radio" id="template_status_disable" name="status" value="0" />
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

export default PushNotificationTemplateEdit;
