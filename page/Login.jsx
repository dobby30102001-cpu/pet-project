import { useNavigate } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/");
    }

    return (
        <div className="login-wrapper">
            <form action="" className="login-container">
                <h2 className="login-title">MY APP</h2>

                <div className='login-content'>
                    <input type="text" className='login-input' placeholder='username' />
                    <input type="password" className='login-input' placeholder='password' />
                    <button className='login-button' onClick={handleLogin}>Login</button>
                </div>

                <div className='login-footer'>
                    <button className='forgot-password'>Forgot Password?</button>
                    <button className='create-new'>Create new Account</button>
                </div>
            </form>
        </div>
    )
};
