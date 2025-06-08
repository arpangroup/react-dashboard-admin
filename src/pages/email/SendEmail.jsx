import PageTitle from "../../components/page_title/PageTitle";

export default function SendEmail() {
    return (
        <div className="main-content">
            <PageTitle title="Send Email to All" />


            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="site-card">
                            <div class="site-card-body">
                                <form action="https://81habibi.com/admin/user/mail-send" method="post">
                                    <input type="hidden" name="_token" value="fgpBEaTjxA9GoVm7n9MYp7N9YkJPVyAJOjsqLTxo" />
                                    <div class="site-input-groups">
                                        <label for="" class="box-input-label">Subject:</label>
                                        <input type="text" name="subject" class="box-input mb-0" required="" />
                                    </div>
                                    <div class="site-input-groups">
                                        <label for="" class="box-input-label">Email Details</label>
                                        <textarea name="message" class="form-textarea mb-0"></textarea>
                                    </div>

                                    <div class="action-btns">
                                        <button type="submit" class="site-btn-sm primary-btn me-2">
                                            <i icon-name="send"></i>
                                            Send Email
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}