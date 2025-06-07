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
import KycForm from './pages/kyc/KycForm';
import KycList from './pages/kyc/KycList';
import DepositHistory from './pages/deposit/DepositHistory';
import DepositMethodAuto from './pages/deposit/DepositMethodAuto';
import DepositMethodManual from './pages/deposit/DepositMethodManual';
import EmailTemplate from './pages/email/EmailTemplate';
import PushNotificationTemplate from './pages/notification/PushNotificationTemplate';
import SmsTemplate from './pages/sms/SmsTemplate';
import SupportTicket from './pages/support/SupportTicket';
import CustomCss from './pages/custom_css/CustomCss';
import ActiveUsers from './pages/users/ActiveUsers';



function App() {
  return (
    <Routes>
      <Route path="/admin" element={<DefaultLayout />}>
        <Route index element={<HelloWorld />} />

        <Route path="users" element={<Users />} />
        <Route path="users/active" element={<ActiveUsers />} />
        <Route path="users/disabled" element={<Users />} />
        <Route path="users/:id" element={<EditUser />} />
        <Route path="users/:id/edit" element={<EditUser />} />
        <Route path="users/mail-send/all" element={<SendEmail />} />
        <Route path="users/profit" element={<UserProfit />} />


        <Route path="kyc" element={<KycList />} />
        <Route path="kyc/pending" element={<KycList />} />
        <Route path="kyc/rejected" element={<KycList />} />
        <Route path="kyc" element={<KycList />} />
        <Route path="kyc_form" element={<KycForm />} />       



        <Route path="transactions" element={<Transactions />} />
        <Route path="investments" element={<Investments />} />
        <Route path="notifications" element={<Notifications />} />

        
        <Route path="payment/gateway" element={<PaymentGateway />} />


        <Route path="deposit/method/auto" element={<DepositMethodAuto />} />
        <Route path="deposit/method/manual" element={<DepositMethodManual />} />
        <Route path="deposit/pending" element={<DepositMethodManual />} />
        <Route path="deposit/history" element={<DepositHistory />} />

        

        <Route path="withdraw/method/auto" element={<DepositMethodAuto />} />
        <Route path="withdraw/method/manual" element={<DepositMethodManual />} />
        <Route path="withdraw/pending" element={<DepositMethodManual />} />
        <Route path="withdraw/schedule" element={<DepositMethodManual />} />
        <Route path="withdraw/history" element={<DepositHistory />} />


        
        <Route path="template/email" element={<EmailTemplate />} />
        <Route path="template/sms" element={<SmsTemplate />} />
        <Route path="template/push-notification" element={<PushNotificationTemplate />} />

        
        <Route path="tickets" element={<SupportTicket />} />
        <Route path="custom-css" element={<CustomCss />} />


      </Route>

    </Routes>
  );
}

export default App;
