import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import DefaultLayout from './layout/DefaultLayout';
import HelloWorld from './pages/HelloWorld';
import Users from './pages/users/Users';
import Transactions from './pages/transactions/Transactions';

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<DefaultLayout />}>
        <Route index element={<HelloWorld />} />
        <Route path="users" element={<Users />} />
        <Route path="transactions" element={<Transactions />} />
      </Route>

    </Routes>
  );
}

export default App;
