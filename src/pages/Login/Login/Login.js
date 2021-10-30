import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {user, SignInUsingGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        SignInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
          })
    }
    return (
        <div className="container">
            <div className="text-center">
                <h3 className="pb-3" style={{color: '#ff7f47'}}>Please Login</h3>
                <button onClick={handleGoogleLogin} className="btn w-25" style={{color: '#ff7f47', border: '2px solid #ff7f47'}}> 
                    <img src="https://i.ibb.co/qN9z9Fy/google-logo.png" alt="" className="w-25" /> Log in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;