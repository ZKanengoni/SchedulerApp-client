import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory, NavLink, Redirect } from 'react-router-dom';

const cardStyle = {
  width: '350px',
  height: '400px',
  margin: '0 auto',
  marginTop: '7rem',
};

export const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const onUsername = (e) => setUsername(e.target.value);
  const onPassword = (e) => setPassword(e.target.value);

  const handleSub = (e) => {
    e.preventDefault();

    const loginData = {
      name: username,
      password,
    };

    window.localStorage.setItem('user', JSON.stringify(loginData));

    axios
      .post('http://localhost:8000/api/user/login', loginData)
      .then((res) => {
        props.getUser(username);
        localStorage.setItem('user', username);
        props.getLog(res.statusText);
        history.push('/home');
      });
  };

  return (
    <div className='card' style={cardStyle}>
      <h1>Login</h1>
      <form action=''>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='Username'
          onChange={onUsername}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          onChange={onPassword}
        />

        <button
          onClick={(e) => {
            handleSub(e);
          }}
          className='btn btn-dark  my-1'
        >
          Login
        </button>

        <div className='all-center'>
          <Link to='/register' className='text-link'>
            Don't have an account? Signup
          </Link>
        </div>
      </form>
    </div>
  );
};
