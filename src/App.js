import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/styles.css';
import { Routes, Route } from 'react-router-dom';


import globalEventLogger from './eventLogger/globalEventLogger';
import EventFlusher from './eventLogger/EventFlusher';

import DefaultLayout from './layout/DefaultLayout';
import Users from './pages/users/Users';
import Transactions from './pages/transaction/Transactions';
import EditUser from './pages/users/EditUser';
import Notifications from './pages/notification/Notifications';
import SendEmail from './pages/email/SendEmail';
import Investments from './pages/investment/Investments';
import UserProfit from './pages/users/UserProfit';
import PaymentGateway from './pages/gateway/PaymentGateway';
import KycForms from './pages/kyc/KycForms';
import KycList from './pages/kyc/KycList';
import DepositHistory from './pages/deposit/DepositHistory';
import EmailTemplate from './pages/email/EmailTemplate';
import PushNotificationTemplate from './pages/notification/PushNotificationTemplate';
import PushNotificationTemplateEdit from './pages/notification/PushNotificationTemplateEdit';
import SmsTemplate from './pages/sms/SmsTemplate';
import SupportTicket from './pages/support/SupportTicket';
import CustomCss from './pages/custom_css/CustomCss';
import ActiveUsers from './pages/users/ActiveUsers';
import EditUserV1 from './pages/users/EditUserV1';
import KycFormEdit from './pages/kyc/KycFormEdit';
import KycFormCreate from './pages/kyc/KycFormCreate';
import Roles from './pages/role/Roles';
import EditRole from './pages/role/EditRole';
import Schema from './pages/schema/Schema';
import SchemaForm from './pages/schema/SchemaForm';
import WithdrawMethodManual from './pages/withdraw/WithdrawMethodManual';
import WithdrawHistory from './pages/withdraw/WithdrawHistory';
import WithdrawSchedule from './pages/withdraw/WithdrawSchedule';
import UserRanking from './pages/ranking/UserRanking';
import UserRankingForm from './pages/ranking/UserRankingForm';
import SiteSetting from './pages/settings/SiteSetting';
import EmailSetting from './pages/settings/EmailSetting';
import PluginSetting from './pages/settings/PluginSetting';
import SmsSetting from './pages/settings/SmsSetting';
import NotificationSetting from './pages/settings/NotificationSetting';
import NotificationTuneSetting from './pages/settings/NotificationTuneSetting';
import TicketDetails from './pages/support/TicketDetails';
import EmailTemplateEdit from './pages/email/EmailTemplateEdit';
import SmsTemplateEdit from './pages/sms/SmsTemplateEdit';
import DataDisplayComponent from './components/DataDisplayComponent';
import { useEffect } from 'react';
import Dashboard from './pages/dashboard/Dashboard';
import SendEmailPanel from './pages/users/SendEmailPanel';
import UserRankingFormV1 from './pages/ranking/UserRankingFormV1';
import RankConfigEditor from './pages/ranking/RankConfigEditor';




function App() {
  // useEffect(() => {
  //   globalEventLogger.setupGlobalEventListeners();
  // }, [])

  return (
    <div> 
      {/* This sets up the background flusher */}
      {/* <EventFlusher />  */}
      
    <Routes>
      <Route path='/' element={<DataDisplayComponent/>} />
      <Route path="/admin" element={<DefaultLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="users" element={<Users />} />
        <Route path="users/active" element={<Users status={'ACTIVE'} />} />
        <Route path="users/disabled" element={<Users status={'DISABLED'}/>} />
        <Route path="users/pending" element={<Users status={'PENDING'}/>} />
        <Route path="users/:userId" element={<EditUser />} />
        <Route path="users/:userId/edit" element={<EditUserV1 />} />
        <Route path="users/mail-send/all" element={<SendEmail />} />
        {/* <Route path="users/mail-send/all" element={<SendEmailPanel username={"johndoe"} email={"hel@helo.com"} />} /> */}
        <Route path="users/profit" element={<UserProfit />} />


        <Route path="kyc" element={<KycList />} />
        <Route path="kyc/pending" element={<KycList status={'PENDING'}/>} />
        <Route path="kyc/rejected" element={<KycList status={'REJECTED'} />} />
        <Route path="kyc/verified" element={<KycList status={'VERIFIED'} />} />
        <Route path="kyc/unverified" element={<KycList status={'UNVERIFIED'} />} />
        <Route path="kyc/:userId/edit" element={<KycFormEdit />} />
        <Route path="kyc_forms" element={<KycForms />} />       
        <Route path="kyc_forms/create" element={<KycFormCreate />} /> 


        <Route path="roles" element={<Roles />} /> 
        <Route path="roles/:id/edit" element={<EditRole />} /> 

        
        <Route path="schemas" element={<Schema />} /> 
        <Route path="schemas/create" element={<SchemaForm />} />
        <Route path="schemas/edit/:schemaId" element={<SchemaForm />} /> 




        <Route path="transactions" element={<Transactions />} />
        <Route path="investments" element={<Investments />} />
        <Route path="notifications" element={<Notifications />} />

        
        <Route path="payment/gateway" element={<PaymentGateway />} />


        <Route path="deposit/pending" element={<DepositHistory status='PENDING' />} />
        <Route path="deposit/rejected" element={<DepositHistory status='REJECTED' />} />
        <Route path="deposit/history" element={<DepositHistory />} />

        

        <Route path="withdraw/method/auto" element={<WithdrawMethodManual />} />
        <Route path="withdraw/method/manual" element={<WithdrawMethodManual />} />
        <Route path="withdraw/pending" element={<WithdrawMethodManual />} />
        <Route path="withdraw/schedule" element={<WithdrawSchedule />} />
        <Route path="withdraw/history" element={<WithdrawHistory />} />

        
        <Route path="rankings" element={<UserRanking />} />
        <Route path="rankings/create" element={<UserRankingFormV1 />} />
        <Route path="rankings/edit/:rankingId" element={<UserRankingFormV1 />} />
        <Route path="rankings/config-editor" element={<RankConfigEditor />} />

        
        <Route path="setting/site" element={<SiteSetting />} />
        <Route path="setting/mail" element={<EmailSetting />} />
        <Route path="setting/plugin" element={<PluginSetting />} />
        <Route path="setting/sms" element={<SmsSetting />} />
        <Route path="setting/notification" element={<NotificationSetting />} />
        <Route path="setting/tune" element={<NotificationTuneSetting />} />

        
        <Route path="template/email" element={<EmailTemplate />} />
        <Route path="template/email/:id/edit" element={<EmailTemplateEdit />} />
        <Route path="template/sms" element={<SmsTemplate />} />
        <Route path="template/sms/:id/edit" element={<SmsTemplateEdit />} />
        <Route path="template/notification" element={<PushNotificationTemplate />} />
        <Route path="template/notification/:id/edit" element={<PushNotificationTemplateEdit />} />

        
        <Route path="tickets" element={<SupportTicket />} />
        <Route path="tickets/:id/details" element={<TicketDetails />} />
        <Route path="custom-css" element={<CustomCss />} />


      </Route>

    </Routes>
    </div>
  );
}

export default App;
