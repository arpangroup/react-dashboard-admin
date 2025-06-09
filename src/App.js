import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import DefaultLayout from './layout/DefaultLayout';
import HelloWorld from './pages/HelloWorld';
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
import DepositMethodAuto from './pages/deposit/DepositMethodAuto';
import DepositMethodManual from './pages/deposit/DepositMethodManual';
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
import SchemaEdit from './pages/schema/SchemaEdit';
import WithdrawMethodManual from './pages/withdraw/WithdrawMethodManual';
import WithdrawHistory from './pages/withdraw/WithdrawHistory';
import WithdrawSchedule from './pages/withdraw/WithdrawSchedule';
import UserRanking from './pages/ranking/UserRanking';
import UserRankingCreate from './pages/ranking/UserRankingCreate';
import SiteSetting from './pages/settings/SiteSetting';
import EmailSetting from './pages/settings/EmailSetting';
import PluginSetting from './pages/settings/PluginSetting';
import SmsSetting from './pages/settings/SmsSetting';
import NotificationSetting from './pages/settings/NotificationSetting';
import NotificationTuneSetting from './pages/settings/NotificationTuneSetting';
import TicketDetails from './pages/support/TicketDetails';
import EmailTemplateEdit from './pages/email/EmailTemplateEdit';
import SmsTemplateEdit from './pages/sms/SmsTemplateEdit';



function App() {
  return (
    <Routes>
      <Route path='/' element={<HelloWorld/>} />
      <Route path="/admin" element={<DefaultLayout />}>
        <Route index element={<HelloWorld />} />

        <Route path="users" element={<Users />} />
        <Route path="users/active" element={<ActiveUsers />} />
        <Route path="users/disabled" element={<Users />} />
        <Route path="users/:userId" element={<EditUser />} />
        <Route path="users/:userId/edit" element={<EditUserV1 />} />
        <Route path="users/mail-send/all" element={<SendEmail />} />
        <Route path="users/profit" element={<UserProfit />} />


        <Route path="kyc" element={<KycList />} />
        <Route path="kyc/pending" element={<KycList />} />
        <Route path="kyc/rejected" element={<KycList />} />
        <Route path="kyc" element={<KycList />} />
        <Route path="kyc/:userId/edit" element={<KycFormEdit />} />
        <Route path="kyc_forms" element={<KycForms />} />       
        <Route path="kyc_forms/create" element={<KycFormCreate />} /> 


        <Route path="roles" element={<Roles />} /> 
        <Route path="roles/:id/edit" element={<EditRole />} /> 

        
        <Route path="schema" element={<Schema />} /> 
        <Route path="schema/:id/edit" element={<SchemaEdit />} /> 




        <Route path="transactions" element={<Transactions />} />
        <Route path="investments" element={<Investments />} />
        <Route path="notifications" element={<Notifications />} />

        
        <Route path="payment/gateway" element={<PaymentGateway />} />


        <Route path="deposit/method/auto" element={<DepositMethodAuto />} />
        <Route path="deposit/method/manual" element={<DepositMethodManual />} />
        <Route path="deposit/pending" element={<DepositMethodManual />} />
        <Route path="deposit/history" element={<DepositHistory />} />

        

        <Route path="withdraw/method/auto" element={<WithdrawMethodManual />} />
        <Route path="withdraw/method/manual" element={<WithdrawMethodManual />} />
        <Route path="withdraw/pending" element={<WithdrawMethodManual />} />
        <Route path="withdraw/schedule" element={<WithdrawSchedule />} />
        <Route path="withdraw/history" element={<WithdrawHistory />} />

        
        <Route path="ranking" element={<UserRanking />} />
        <Route path="ranking/create" element={<UserRankingCreate />} />
        <Route path="ranking/:id/edit" element={<UserRankingCreate />} />

        
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
  );
}

export default App;
