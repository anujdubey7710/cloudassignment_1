import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './service/AuthService';

const loginAPIUrl = 'https://q3358v04o2.execute-api.us-east-1.amazonaws.com/prod/login';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      setErrorMessage('Both username and password are required');
      return;
    }

    const requestConfig = {
      headers: {
        'x-api-key': 'aWXFB88QHgaTNyCBVkrE91GbEUeeE8Jb50MoKz80'
      }
    };

    const requestBody = {
      username: username,
      password: password
    };

    console.log('Login button is pressed');
    
    axios.post(loginAPIUrl, requestBody, requestConfig)
      .then((response) => {
        setUserSession(response.data.user, response.data.token);
        props.history.push('/Home');
      })
      .catch((error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('Sorry, the backend server is down. Please try again later!!');
        }
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        Username: <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} /><br />
        Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /><br />
        <input type="submit" value="Login" />
      </form>
      {errorMessage && <p className="message">{errorMessage}</p>}
    </div>
  );
};

export default Login;
