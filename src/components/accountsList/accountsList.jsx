import iconOk from '../../icons/status-ok.svg'
import iconPause from '../../icons/status-pause.svg'
import {useState} from "react";
import settingsIcon from '../../icons/settings.svg'
import plusIcon from '../../icons/plus.svg'
import closeIcon from '../../icons/cross-stop.svg'
import {useNavigate} from "react-router-dom";

export const AccountsList = ({
    id,
    account,
    balance,
    status,
    setUser,
    user
                      }) => {
    const navigate = useNavigate()
    const [active, setActive] = useState(false)
    const isActiveStyle = active?'slide-in': ''
    balance = +balance

    const onClickLogin = (idValue) => {
        setUser({...user, state: 'login'})
        navigate('/login', {state: {idValue}})
    }

    const style = status?'card vw-70 plate glow bottom-margin-0': 'card vw-70 plate bottom-margin-0 red-glow'
    return (
        <>
            <div className={style}>
                <div onClick={() => {setActive(!active)}} className='grid'>
                    <img alt='status' className='icon' src={status? iconOk: iconPause} />
                    <span className='left-text hr-padd-10'>
                        <p className='text-weight-500'>{id}</p>
                        <p><small>{account}</small></p>
                    </span>
                    <span className='right-text'>
                        <p><small>Баланс:</small></p>
                        <p style={{color: +balance <= 0? "#ff5353": "#fff"}} className='text-weight-700'>
                            {balance} ₽
                        </p>
                    </span>
                </div>
            </div>
            {status && (
                <div className='slide-menu vw-65 margin-auto'>
                    <div className={`grid container ${active ? 'show' : ''}`}>
                    <span className='center margin-auto'>
                        <img alt="icon-small" className='icon-small' src={plusIcon}/>
                        <p className='hint'>Пополнить</p>
                    </span>
                        <span className='center margin-auto'>
                        <img alt="icon-small" className='icon-small' src={settingsIcon}/>
                        <p className='hint'>Настройки</p>
                    </span>
                        <span className='center margin-auto'>
                        <img alt="icon-small" className='icon-small' src={closeIcon}/>
                        <p className='hint'>Выйти</p>
                    </span>
                    </div>
                </div>
            )}

            {!status && (
                <div className='slide-menu vw-65 margin-auto'>
                    <div className={`grid container ${active ? 'show' : ''}`}>
                    <span className='center margin-auto' onClick={() => onClickLogin(id)}>
                        <img alt="icon-small" className='icon-small' src={plusIcon}/>
                        <p className='hint'>Войти</p>
                    </span>
                    <span className='center margin-auto'>
                        <img alt="icon-small" className='icon-small' src={closeIcon}/>
                        <p className='hint'>Удалить</p>
                    </span>
                    </div>
                </div>
            )}
        </>
    )
}