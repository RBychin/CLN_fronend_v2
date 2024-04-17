import {Routes, Route, useNavigate} from 'react-router-dom';
import {useState, useEffect, useCallback} from 'react'

import { LoginPage } from './pages/loginPage/loginPage';
import { AccountPage } from './pages/accountPage/accountPage';
import { getApiRequest } from "./utills/requests";
import { Config } from "./utills/config";
import {Loading} from "./components/Loading";
import {ErrorPage} from "./pages/ErrorPage/ErrorPage";
import {PaymentPage} from "./pages/PaymentPage/PaymentPage";

function App() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    // используемые состояния: 'login' - для входа в страницу логина.
    //
    const [user, setUser] = useState(
        {
            data: {},
            status: '',
            state: null
            }
        )

    useEffect(() => {
        Config.tgWindow.expand()
        const fetchData = async () => {
            try {
                const response = await getApiRequest('', { id: Config.user.id });
                if (!response.error && !response.detail && user.state !== 'login') {
                    setUser({...user, data: response})
                    navigate('/account')
                } else {
                    setUser({...user, state: 'login'})
                    navigate('/login')
                }

            } catch (error) {
                console.error('TEST Error fetching user:', error);
                navigate('error')
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [user.state]);

    if (!user.data || loading) {return <Loading />}

    return (
        <div className="App">
            <Routes>
                <Route index element={<Loading /> } />
                <Route path='login' element={<LoginPage user={user} setUser={setUser} />} />
                <Route path='account' element={<AccountPage user={user} setUser={setUser} />} />
                <Route path='error' element={<ErrorPage />} />
                <Route path='pay' element={<PaymentPage />} />
            </Routes>
        </div>
    );
}

export default App;
