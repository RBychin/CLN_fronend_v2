import iconOk from '../../icons/status-ok.svg'
import iconPause from '../../icons/status-pause.svg'

export const AccountsList = ({
    id,
    account,
    balance,
    status
                      }) => {
    balance = +balance

    const style = status?'card vw-70 plate glow': 'card vw-70 plate red-glow'
    return (
        <div className={style}>
            <div className='grid'>
                <img alt='status' className='icon' src={status? iconOk: iconPause} />
                <span className='left-text hr-padd-10'>
                    <p className='text-weight-500'>{id}</p>
                    <p><small>{account}</small></p>
                </span>
                <span className='right-text'>
                    <p><small>Баланс:</small></p>
                    <p style={{color: +balance <= 0? "#ff5353": "#fff"}} className='text-weight-700'>
                        {balance} руб
                    </p>
                </span>
            </div>
        </div>
    )
}