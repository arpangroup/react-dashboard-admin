import React from "react";
import ReactDOM from 'react-dom';
import './Users.css';

const SendEmailPanel = ({ email, username, isOpen, onClose }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            {/* Backdrop */}
            <div className="backdrop" onClick={onClose} />

            {/* Panel */}
            <aside className="side-panel">
                <button
                    onClick={onClose}
                    className="close-btn"
                    aria-label="Close panel"
                >
                    &times;
                </button>

                <div className="header">
                    <h2>{`Send Mail to ${username}`}</h2>
                    <span>{email}</span>
                </div>

                <form action="https://81habibi.com/admin/user/mail-send" method="post" id="send-mail-form">
                    <input type="hidden" name="_token" value="6uNwVKwHHRc8JgwVXPyPPcMCbWrA8kRaWXOJrYqQ" />
                    <input type="hidden" name="id" value="19" id="userId" />

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="send" icon-name="send" class="lucide lucide-send"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            Send Email
                        </button>
                        <a href="#" class="site-btn-sm red-btn" data-bs-dismiss="modal" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="x" icon-name="x" class="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            Close
                        </a>
                    </div>
                </form>
            </aside>
        </>,
        document.body
    );
};

export default SendEmailPanel;
