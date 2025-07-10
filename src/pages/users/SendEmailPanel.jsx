import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './Users.css';
import FormInput from "../../components/form/FormInput";
import { LuSend } from "react-icons/lu";

const SendEmailPanel = ({ email, username, isAllEmail = false, isOpen, onClose }) => {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    // Example: Dynamically update based on email or username
    const handleAutoFill = () => {
        setSubject(`Hello ${username}`);
        setMessage(`Dear ${username},\n\nWe hope this message finds you well.\n\nBest,\nTeam`);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                    label="Subject:"
                    name="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
                <div className="site-input-groups">
                    <label for="" className="box-input-label">Email Details</label>
                    <textarea
                        name="message"
                        className="form-textarea mb-0"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <div className="action-btns">
                    <button type="submit" className="site-btn-sm primary-btn me-2">
                        <LuSend/>  &nbsp; Send Email
                    </button>
                </div>
            </form>
        </>
    );
};

export default SendEmailPanel;
