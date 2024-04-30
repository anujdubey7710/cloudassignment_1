import React, { useState } from 'react';
import axios from 'axios';

const registerUrl = 'https://q3358v04o2.execute-api.us-east-1.amazonaws.com/prod/register';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !username.trim() || !password.trim() || !confirmPassword.trim()) {
      setErrorMessage('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Additional validation and API call
    const requestBody = {
      name: name,
      email: email,
      username: username,
      password: password
    };

    axios.post(registerUrl, requestBody)
      .then(response => {
        // Handle successful registration
        console.log(response)
        // Redirect to login page or show success message
      })
      .catch(error => {
        // Handle registration error
        // Check if error is due to existing email
        if (error.response && error.response.status === 409) {
          setErrorMessage('The email already exists');
        } else {
          setErrorMessage('An error occurred during registration');
        }
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Register</h1>
        Name: <input type="text" value={name} onChange={event => setName(event.target.value)} /><br />
        Email: <input type="text" value={email} onChange={event => setEmail(event.target.value)} /><br />
        Username: <input type="text" value={username} onChange={event => setUsername(event.target.value)} /><br />
        Password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /><br />
        Confirm Password: <input type="password" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} /><br />
        <button type="submit">Register</button>
      </form>
      {errorMessage && <p className="message">{errorMessage}</p>}
    </div>
  );
};

export default Register;
