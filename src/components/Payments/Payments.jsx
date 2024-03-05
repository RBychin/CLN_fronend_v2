import send from "../../icons/send.svg";
import recive from "../../icons/recive.svg";

export const PaymentList = ({
    status
                            }) => {
    return (
        <>
            <div className='card vw-80'>
                <div className='grid vr-margin-10'>
                    <img alt='status' className='icon' src={status ? recive : send}/>
                    <span className='left-text hr-padd-10'>Пополнение счета через {'{object}'}
                        <p><small className='hint'>11 февраля 2024</small></p></span>
                    <span className='right-text'>500 руб<p><small className='hint'>Получено</small></p></span>
                </div>
                <div className='grid vr-margin-10'>
                    <img alt='status' className='icon' src={status ? recive : send}/>
                    <span className='left-text hr-padd-10'>Пополнение счета через {'{object}'}
                        <p><small className='hint'>15 января 2024</small></p></span>
                    <span className='right-text'>300 руб<p><small className='hint'>Получено</small></p></span>
                </div>
                <div className='grid vr-margin-10'>
                    <img alt='status' className='icon' src={status ? recive : send}/>
                    <span className='left-text hr-padd-10'>Пополнение счета через {'{object}'}
                        <p><small className='hint'>7 декабря 2023</small></p></span>
                    <span className='right-text'>600 руб<p><small className='hint'>Получено</small></p></span>
                </div>
            </div>
        </>
    )
}