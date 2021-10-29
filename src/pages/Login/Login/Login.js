import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'

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
                <button onClick={handleGoogleLogin} className="btn w-25 text-white"  style={{backgroundColor: '#ff7f47'}}><FontAwesomeIcon icon={faGoogle} /> Login</button>
            </div>
        </div>
    );
};

export default Login;