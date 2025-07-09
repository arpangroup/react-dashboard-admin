
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LuUser, LuAnchor, LuCreditCard, LuCast, LuNetwork, LuWrench, } from "react-icons/lu";

import PageTitle from "../../components/page_title/PageTitle";
import EarningTab from "./components/EarningTab";
import InvestmentTab from "./components/InvestmentTab";
import ProfileBasicInfoTab from "./components/ProfileBasicInfoTab";
import ProfileCard from "./components/ProfileCard";
import ReferralTreeTab from "./components/ReferralTreeTab";
import TicketsTab from "./components/TicketsTab";
import TransactionTab from "./components/TransactionTab";
import ButtonsWithTooltips from "./ButtonsWithTooltips";
import WalletStatus from "./WalletStatus";
import AccountStatusForm from "./AccountStatusForm";
import TransactionStatusForm from "./TransactionStatusForm";
import RightPanel from "../../components/panel/RightPanel";
import SendEmailPanel from "./SendEmailPanel";
import BalancePanel from "./BalancePanel";



const tabs = [
    { id: "info", label: "Informations", icon: <LuUser /> },
    { id: "investments", label: "Investments", icon: <LuAnchor /> },
    { id: "earnings", label: "Earnings", icon: <LuCreditCard /> },
    { id: "transactions", label: "Transactions", icon: <LuCast /> },
    { id: "referral", label: "Referral Tree", icon: <LuNetwork /> },
    { id: "tickets", label: "Ticket", icon: <LuWrench /> },
];

const userStatus = {
    accountStatus: false,
    emailVerified: true,
    kycVerified: true,
    '2FAVerified': false,
};
const transactionStatus = {
    depositStatus: false,
    withdrawStatus: true,
    sendMoneyStatus: true,
};



export default function EditUserV1() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [panel, setPanel] = useState(null);
    const { userId } = useParams(); // 👈 extract userId from URL
    const [activeTab, setActiveTab] = useState("info");
    const [userInfo, setUserInfo] = useState({});


    // const [formData, setFormData] = useState({
    //     firstname: 'Monuking1000k',
    //     last_name: 'King',
    //     username: 'Monuking1000kKing2638',
    //     country: "India",
    //     phone: "+91 80123 45678",
    //     city: 'Noida',
    //     zip_code: '',
    //     address: '',
    //     created_at: 'Tue, May 27, 2025 1:28 PM',
    // });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        //setFormData((prev) => ({ ...prev, [name]: value }));
        setUserInfo((prev) => ({ ...prev, [name]: value }))
    };

    const handleClosePanel = () => {setIsPanelOpen(false)}

    const handleButtonClick = (action) => {
        switch (action) {
        case "sendMail":
            setPanel(action)
            setIsPanelOpen(true);
            break;
        case "loginAsUser":
            console.log("Login as user:", userInfo.username);
            break;
        case "fundUpdate":
            console.log("Fund update for:", userInfo.username);
            setPanel(action)
            setIsPanelOpen(true);
            break;
        default:
            console.warn("Unknown action:", action);
        }
    };

    // const handleTabClick = (e, tabName) => {
    //     e.preventDefault();
    //     console.log("TAB_NAME: ", tabName);
    //     setActiveTab(tabName);
    // }

    useEffect(() => {
        console.log("fetchUserInfo: ", userId);
        const fetchUserInfo = async () => {
            console.log("fetchUserInfo: ", userId);
            try {
                const response = await fetch(`/api/v1/users/${userId}`);
                if (!response.ok) throw new Error("Failed to fetch user info");
                const data = await response.json();
                setUserInfo(data);
                console.log("User Info:", data);
                setUserInfo(data);
            } catch (err) {
                console.error("Error fetching user info:", err);
            }
        };

        if (userId) {
            fetchUserInfo();
        }
    }, [userId]);

    return (
        <div className="main-content">
            <PageTitle
                title={`Details of ${userInfo.username}`}
                isBack={true} />


            <div className="container-fluid">

                <div className="row justify-content-center">
                    <div className="col-xxl-3 col-xl-6 col-lg-8 col-md-6 col-sm-12">
                        {/* <ProfileCard /> */}

                        <div className="profile-card">
                            <div className="top">
                                <div className="avatar">
                                    <span className="avatar-text">JD</span>
                                </div>
                                <div className="title-des">
                                    <h4>{userInfo.username}</h4>
                                    <p>{userInfo.country}</p>
                                </div>

                                <ButtonsWithTooltips onButtonClick={handleButtonClick}/>


                            </div>

                            <WalletStatus
                                walletBalance={userInfo.walletBalance}
                                profitBalance={userInfo.profitBalance}
                                currency="USD" />

                            {/* Account Status Update */}
                            <AccountStatusForm
                                initialStatus={userInfo.accountStatus || {}}
                                userId={userInfo.id} />


                            {/* Transaction Status Update */}
                            <TransactionStatusForm
                                initialStatus={userInfo.accountStatus || {}}
                                userId={userInfo.id} />


                        </div>
                    </div>


                    <div className="col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="site-tab-bars">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                {tabs.map((tab) => (
                                    <li className="nav-item" role="presentation" key={tab.id}>
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveTab(tab.id);
                                            }}
                                            href=""
                                            className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                                            id={`pills-${tab.id}-tab`}
                                            data-bs-toggle="pill"
                                            data-bs-target={`#pills-${tab.id}`}
                                            role="tab"
                                            aria-controls={`pills-${tab.id}`}
                                            aria-selected={activeTab === tab.id}
                                        >
                                            {tab.icon} <span>{tab.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="tab-content" id="pills-tabContent">
                            <ProfileBasicInfoTab activeTab={activeTab} userInfo={userInfo || {}} onFormChange={handleFormChange} />
                            <InvestmentTab activeTab={activeTab} />
                            <EarningTab activeTab={activeTab} />
                            <TransactionTab activeTab={activeTab} />
                            <ReferralTreeTab activeTab={activeTab} />
                            <TicketsTab activeTab={activeTab} />
                        </div>
                    </div>
                </div>
            </div>
            {panel === 'sendMail' && 
                <RightPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)}>            
                     <h3 className="mb-4">{`Send Mail to ${userInfo.username}`}</h3>
                    <SendEmailPanel username={userInfo.username} email={userInfo.email} onClose={handleClosePanel} />
                </RightPanel>
            }
            
            {panel === 'fundUpdate' && 
                <RightPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} style={{width: '500px'}}>            
                    <h3 className="mb-4">{`Balance Add or Subtract`}</h3>
                    <BalancePanel userId={userInfo.id} username={userInfo.username} onClose={handleClosePanel} />
                </RightPanel>
            }
        </div>
    )
}