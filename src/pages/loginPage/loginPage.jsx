import {useCallback, useState} from 'react';
import { InputComponent } from "../../components/input/Input";
import { Config } from "../../utills/config";
import { postApiRequest } from "../../utills/requests";
import { useNavigate } from "react-router-dom";
import {Loading} from "../../components/Loading";

export const LoginPage = () => {
    const [idValue, setIdValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [loginError, setLoginError] = useState(null);
    const isFormValid = idValue.length > 0 && passwordValue.length > 0;
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const onClickLogin = useCallback(async() => {
        setLoading(true)
        try {
            const response = await postApiRequest('', { id: Config.telegram_id }, { pin: +idValue, password: passwordValue });
            if (!response.error) {
                navigate('/account');
            } else {
                setLoginError(response.error);
                setPasswordValue("");
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            }
        } catch (error) {
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        }
    }, [idValue, passwordValue, navigate])

    return (
        <>
            {loading?<Loading />: (
            <div className='vh-100 margin-auto flex center'>
                <div className='vw-85 margin-auto'>
                    <div className='margin-auto center'>
                        {loginError &&
                            <div className='hint center'>
                                <p className='error-text'>{loginError}</p>
                            </div>
                        }
                        <InputComponent
                            error={loginError}
                            type='numeric'
                            placeholder='ID'
                            id='PINValue'
                            inputMode="numeric"
                            onChange={e => setIdValue(e.target.value)}
                            value={idValue}
                        />
                        <InputComponent
                            error={loginError}
                            type="password"
                            placeholder="Password"
                            id="PassValue"
                            inputMode="text"
                            onChange={e => setPasswordValue(e.target.value)}
                            value={passwordValue}
                        />

                        {isFormValid &&
                            <div className='vr-margin-30'>
                                <span className='glow' onClick={onClickLogin}>
                                LOGIN
                            </span>
                            </div>

                        }
                    </div>
                </div>
            </div>
        )}
        </>
    );
};
