import {Routes, Route, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react'

import { LoginPage } from './pages/loginPage/loginPage';
import { AccountPage } from './pages/accountPage/accountPage';
import { getApiRequest } from "./utills/requests";
import { Config } from "./utills/config";
import {Loading} from "./components/Loading";

function App() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getApiRequest('', { id: Config.telegram_id });
                if (!response.error) {
                    setTimeout(() => {
                        setUser(response);
                        navigate('account')
                    }, 500);
                } else {
                    setTimeout(() => {
                        setUser(response);
                    }, 500);
                    navigate('login')
                }
            } catch (error) {
                console.error('TEST Error fetching user:', error);
            }
            console.log('UseEffect App')
        };

        fetchData();
    }, []);

    if (!user) {return <Loading />}

    return (
        <div className="App">
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='account' element={<AccountPage user={user} />} />
            </Routes>
        </div>
    );
}

export default App;
