import {useNavigate} from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <p>THIS IS LOGIN PAGE</p>
            <p><button onClick={() => {navigate('/account')}}>
                ACCOUNT
            </button></p>
        </>
    )
}