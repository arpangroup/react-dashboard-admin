import React from 'react';

const ProfileCard = () => {
    return (

        <div className="profile-card">
            <div className="top">
                <div className="avatar">
                    <span className="avatar-text">MK</span>
                </div>
                <div className="title-des">
                    <h4>Monuking1000k King</h4>
                    <p>India</p>
                </div>
                <div className="btns">
                    <span type="button" data-bs-toggle="modal" data-bs-target="#sendEmail"><a
                        href="javascript:void(0);" className="site-btn-round blue-btn"
                        data-bs-toggle="tooltip" title="" data-bs-original-title="Send Email"><i
                            icon-name="mail"></i></a></span>
                    <a href="/admin/user/login/19" target="_blank"
                        className="site-btn-round red-btn" data-bs-toggle="tooltip" title=""
                        data-bs-placement="top" data-bs-original-title="Login As User">
                        <i icon-name="user-plus"></i>
                    </a>
                    <span data-bs-toggle="modal" data-bs-target="#addSubBal">
                        <a href="javascript:void(0);" type="button"
                            className="site-btn-round primary-btn" data-bs-toggle="tooltip" title=""
                            data-bs-placement="top" data-bs-original-title="Fund Add or Subtract">
                            <i icon-name="wallet"></i></a></span>
                </div>
            </div>
            <div className="site-card">
                <div className="site-card-body">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="admin-user-balance-card">
                                <div className="wallet-name">
                                    <div className="name">Main Wallet</div>
                                    <div className="chip-icon">
                                        <img className="chip"
                                            src="/assets/backend/materials/chip.png"
                                            alt="" />
                                    </div>
                                </div>
                                <div className="wallet-info">
                                    <div className="wallet-id">USD</div>
                                    <div className="balance">₹0</div>
                                </div>
                            </div>
                            <div className="admin-user-balance-card">
                                <div className="wallet-name">
                                    <div className="name">Profit Wallet</div>
                                    <div className="chip-icon">
                                        <img className="chip"
                                            src="/assets/backend/materials/chip.png"
                                            alt="" />
                                    </div>
                                </div>
                                <div className="wallet-info">
                                    <div className="wallet-id">USD</div>
                                    <div className="balance">₹8</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* User Status Update */}
            <div className="site-card mb-0">
                <div className="site-card-header">
                    <h3 className="title-small">Account Informations</h3>
                </div>
                <div className="site-card-body">
                    <div className="row">
                        <form action="/admin/user/status-update/19"
                            method="post">
                            <input type="hidden" name="_token"
                                value="tAlWAwzyEa2XNDEaOQGfJURs5sqf66BiknGdP3Yk" />
                            <div className="col-xl-12">
                                <div className="profile-card-single">
                                    <h5 className="heading">Account Status</h5>
                                    <div className="switch-field">
                                        <input type="radio" id="accSta1" name="status" value="1" />
                                        <label for="accSta1">Active</label>
                                        <input type="radio" id="accSta2" name="status" value="0"
                                            checked />
                                        <label for="accSta2">Disabled</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="profile-card-single">
                                    <h5 className="heading">Email Verification</h5>
                                    <div className="switch-field">
                                        <input type="radio" id="emaSta1" name="email_verified"
                                            value="1" />
                                        <label for="emaSta1">Verified</label>
                                        <input type="radio" id="emaSta2" name="email_verified"
                                            value="0" checked />
                                        <label for="emaSta2">Unverified</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="profile-card-single">
                                    <h5 className="heading">KYC Verification</h5>
                                    <div className="switch-field">
                                        <input type="radio" id="kyc1" name="kyc" value="1" />
                                        <label for="kyc1">Verified</label>
                                        <input type="radio" id="kyc2" name="kyc" value="0"
                                            checked />
                                        <label for="kyc2">Unverified</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="profile-card-single">
                                    <h5 className="heading">2FA Verification</h5>
                                    <div className="switch-field">
                                        <input type="radio" id="2fa1" name="two_fa" value="1" />
                                        <label for="2fa1">Active</label>
                                        <input type="radio" id="2fa2" name="two_fa" value="0"
                                            checked />
                                        <label for="2fa2">Disabled</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="profile-card-single">
                                    <h5 className="heading">Deposit Status</h5>
                                    <div className="switch-field">
                                        <input type="radio" id="depo1" name="deposit_status"
                                            value="1" checked />
                                        <label for="depo1">Active</label>
                                        <input type="radio" id="depo2" name="deposit_status"
                                            value="0" />
                                        <label for="depo2">Disabled</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="profile-card-single">
                                    <h5 className="heading">Withdraw Status</h5>
                                    <div className="switch-field">
                                        <input type="radio" id="wid1" name="withdraw_status"
                                            value="1" checked />
                                        <label for="wid1">Active</label>
                                        <input type="radio" id="wid2" name="withdraw_status"
                                            value="0" />
                                        <label for="wid2">Disabled</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="profile-card-single">
                                    <h5 className="heading">Send Money Status</h5>
                                    <div className="switch-field">
                                        <input type="radio" id="trans1" name="transfer_status"
                                            value="1" checked />
                                        <label for="trans1">Active</label>
                                        <input type="radio" id="trans2" name="transfer_status"
                                            value="0" />
                                        <label for="trans2">Disabled</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit"
                                    className="site-btn-sm primary-btn w-100 centered">
                                    Save Changes
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            {/* User Status Update End */}

        </div>
    );
};

export default ProfileCard;
