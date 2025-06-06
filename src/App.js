import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import DefaultLayout from './layout/DefaultLayout';
import HelloWorld from './pages/HelloWorld';
import Users from './pages/users/Users';
import Transactions from './pages/transactions/Transactions';
import EditUser from './pages/users/EditUser';
import Notifications from './pages/notification/Notifications';
import SendEmail from './pages/email/SendEmail';

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<DefaultLayout />}>
        <Route index element={<HelloWorld />} />

        <Route path="users" element={<Users />} />
        <Route path="users/active" element={<Users />} />
        <Route path="users/disabled" element={<Users />} />
        <Route path="users/:id" element={<EditUser />} />
        <Route path="users/:id/edit" element={<EditUser />} />
        <Route path="users/mail-send/all" element={<SendEmail />} />

        <Route path="transactions" element={<Transactions />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>

    </Routes>
  );
}

export default App;
