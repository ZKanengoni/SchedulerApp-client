import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const cardStyle = {
  width: '350px',
  height: '400px',
  margin: '0 auto',
  marginTop: '7rem',
};

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsername = (e) => setUsername(e.target.value);
  const onPassword = (e) => setPassword(e.target.value);

  const handleSub = (e) => {
    e.preventDefault();

    const registerData = {
      name: username,
      password,
    };
    axios.post('http://localhost:8000/api/user/register', registerData);

    if (username.length < 2 || password.length < 6) {
      alert(
        'Username need to be more than 2 characters & password more than 6.'
      );
    }

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  };

  return (
    <div>
      <div className='card' style={cardStyle}>
        <h1>Sign up</h1>
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
            type='submit'
            className='btn btn-dark  my-1'
            onClick={(e) => handleSub(e)}
          >
            Sign up
          </button>

          <div className='all-center'>
            <Link to='/login' className='text-link'>
              Already have an account? Go to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
