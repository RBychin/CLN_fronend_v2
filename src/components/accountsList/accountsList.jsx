import iconOk from '../../icons/status-ok.svg'
import iconPause from '../../icons/status-pause.svg'

export const AccountsList = ({
    id,
    balance,
    status
                      }) => {
    balance = +balance
    return (
        <div className='card vw-70 shadow'>
            <div className='grid'>
                <img alt='status' className='icon' src={status? iconOk: iconPause} />
                <span className='left-text hr-padd-10'><p><small>ID:</small></p>{id}</span>
                <span style={{color: +balance <= 0? "#ff5353": "#fff"}} className='right-text'><p><small>Баланс:</small></p>{balance} руб</span>
            </div>
        </div>
    )
}