import {StoriesList} from "../../components/storiesList/storiesList";
import {AccountsList} from "../../components/accountsList/accountsList";
import {PaymentList} from "../../components/Payments/Payments";

import { useEffect, useState } from 'react'
import {getApiRequest} from "../../utills/requests";
import {Config} from "../../utills/config";
import {Loading} from "../../components/Loading";

export const AccountPage = ({ user }) => {
    const data = Object.values(user)
    const [transactions, setTransactions] = useState();
    const [stories, setStories] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [transactionsResponse, storiesResponse] = await Promise.all([
                    getApiRequest('/transactions', { id: Config.telegram_id }),
                    getApiRequest('/stories', { id: Config.telegram_id })
                ]);
                setTimeout(() => {
                    setTransactions(Object.values(transactionsResponse));
                    setStories(storiesResponse);
                }, 2);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, []);

    return (
            <>{loading?<Loading />: (
                <>
                    <div className='block vw-85'>
                        <div className='grid hr-padd-10'>
                    <span className='left-text'>
                        <div className='flex'>
                            <img
                                src='https://sun9-27.userapi.com/impg/I0No3U6gLkyhaTis8HrvuSjAEHOVDXEqsIjjxg/Gt7YMATpR9E.jpg?size=1280x960&quality=96&sign=60913f2272609cde5171b43b01e5a672&type=album'
                                className='userimage' alt='User'/>
                            <p className='username'>Roman Bychin</p>
                        </div>
                    </span>
                            <span className='right-text'>
                        ...
                    </span>
                        </div>
                    </div>
                    <a href='/v2/add_acc'>LOGIN</a>
                    <div className='block vw-85 gradient'>
                        <p className='hint'>Узнай больше</p>
                        <StoriesList stories={stories}/>
                    </div>
                    <div className='block vw-85'>
                        <p className='hint'>Аккаунт</p>
                        {data.map((point, index) => (
                            point.error ? (
                                <AccountsList key={index} id={point.pin} balance='' status={false}
                                              account={point.error}/>
                            ) : (
                                <AccountsList key={index} id={point.pin} balance={point.balance} status={true}
                                              account={Object.keys(point.points)[0]}/>
                            )
                        ))}
                    </div>
                    <div className='block vw-85 gradient-end'>
                        <p className='hint'>История операций</p>
                        <PaymentList data={transactions}/>
                    </div>
                </>)}

            </>
    );
    }