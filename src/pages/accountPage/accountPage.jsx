import {StoriesList} from "../../components/storiesList/storiesList";
import {AccountsList} from "../../components/accountsList/accountsList";
import {PaymentList} from "../../components/Payments/Payments";

export const AccountPage = () => {
    return (
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
            <div className='block vw-85 gradient'>
                <p className='hint'>Узнай больше</p>
                <StoriesList/>
            </div>
            <div className='block vw-85'>
                <p className='hint'>Аккаунт</p>
                <AccountsList id='14107' balance='-14.03' status={false}/>
                <AccountsList id='1398' balance='23.6' status={true}/>
            </div>
            <div className='block vw-85 gradient-end'>
                <p className='hint'>История операций</p>
                <PaymentList/>
            </div>
        </>
    )
}