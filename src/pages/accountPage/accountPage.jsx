import {StoriesList} from "../../components/storiesList/storiesList";
import {AccountsList} from "../../components/accountsList/accountsList";
import {PaymentList} from "../../components/Payments/Payments";

import { useEffect, useState } from 'react'
import {getApiRequest} from "../../utills/requests";
import {Config} from "../../utills/config";
import {Loading} from "../../components/Loading";
import {useNavigate} from "react-router-dom";
import addAccIcon from '../../icons/add_acc.svg'
import {AccountHeader} from "../../components/AccountHeader/AccountHeader";

export const AccountPage = ({ user, setUser }) => {
    const navigate = useNavigate()
    const [transactions, setTransactions] = useState(null);
    const [loading, setLoading] = useState(true)

    const goToLogin = () => {
        setUser({...user, state: 'login'})
        navigate('/login')
    }

    useEffect(() => {
        setUser({...user, state: null})
        const fetchData = async () => {
            try {
                const [transactionsResponse] = await Promise.all([
                    getApiRequest('/transactions', { id: Config.telegram_id })
                ]);
                setTransactions(Object.values(transactionsResponse));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        console.warn(user)
    }, []);

    if (!user.data || loading) {return <Loading />}

    return (
        <>
            <div className='block vw-85 gradient-background'>
            <AccountHeader />
            </div>
            <div className='block vw-85 gradient'>
                <p className='hint'>Узнай больше</p>
                <StoriesList />
            </div>
            <div className='block vw-85'>
                <p className='hint'>Аккаунт</p>
                {Object.values(user.data).map((point, index) => (
                    point.error ? (
                        <AccountsList key={index} id={point.pin} balance='' status={false}
                                      account={point.error}/>
                    ) : (
                        <AccountsList key={index} id={point.pin} balance={point.balance} status={true}
                                      account={Object.keys(point.points)[0]}/>
                    )
                ))}
                <div onClick={goToLogin}><img alt='add' className='icon add-account vr-margin-10 bottom-margin-0' src={addAccIcon} /></div>
            </div>
            <div className='block vw-85 gradient-end'>
                <p className='hint'>История операций</p>
                <PaymentList data={transactions}/>
            </div>
        </>
    );
    }