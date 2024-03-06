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
        <a href='https://telegra.ph/Test-03-06-327'>TEST</a>


    </div>
  );
}

export default App;
