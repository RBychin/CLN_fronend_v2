import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';

import { LoginPage } from './pages/loginPage/loginPage';
import { AccountPage } from './pages/accountPage/accountPage';
import {Layout} from "./components/Layout/Layout";

function App() {
    const page = false
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={page ? <Navigate to="/account" replace /> : <LoginPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='account' element={<AccountPage />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
