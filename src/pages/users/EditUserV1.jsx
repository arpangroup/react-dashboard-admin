
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



const tabs = [
  { id: "info", label: "Informations", icon: <LuUser/> },
  { id: "investments", label: "Investments", icon: <LuAnchor/> },
  { id: "earnings", label: "Earnings", icon: <LuCreditCard/> },
  { id: "transactions", label: "Transactions", icon: <LuCast/> },
  { id: "referral", label: "Referral Tree", icon: <LuNetwork/> },
  { id: "tickets", label: "Ticket", icon: <LuWrench/> },
];



export default function EditUserV1() {
    const { userId } = useParams(); // 👈 extract userId from URL
    const [activeTab, setActiveTab] = useState("info");
    const [userInfo, setUserInfo] = useState(null);

    const [formData, setFormData] = useState({
        first_name: 'Monuking1000k',
        last_name: 'King',
        username: 'Monuking1000kKing2638',
        country: "India",
        phone: "+91 80123 45678",
        city: 'Noida',
        zip_code: '',
        address: '',
        created_at: 'Tue, May 27, 2025 1:28 PM',
    });

     const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleTabClick = (e, tabName) => {
        e.preventDefault();
        console.log("TAB_NAME: ", tabName);
        setActiveTab(tabName);
    }

    useEffect(() => {
            console.log("fetchUserInfo: ", userId);
        const fetchUserInfo = async () => {
            console.log("fetchUserInfo: ", userId);
            try {
                const response = await fetch(`/api/users/${userId}`);
                if (!response.ok) throw new Error("Failed to fetch user info");
                const data = await response.json();
                setUserInfo(data);
                console.log("User Info:", data);
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
                title="Details of John Doe" 
                isBack = {true} />


            <div className="container-fluid">
                
                <div className="row justify-content-center">
                    <div className="col-xxl-3 col-xl-6 col-lg-8 col-md-6 col-sm-12">
                        <ProfileCard />
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
                            <ProfileBasicInfoTab activeTab={activeTab} formData={formData} onFormChange={handleFormChange}/>
                            <InvestmentTab activeTab={activeTab} />
                            <EarningTab activeTab={activeTab} />
                            <TransactionTab activeTab={activeTab} />
                            <ReferralTreeTab activeTab={activeTab} />
                            <TicketsTab activeTab={activeTab} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}