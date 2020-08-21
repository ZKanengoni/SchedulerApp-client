import React from 'react';
import { Link } from 'react-router-dom';

const space = {
  marginRight: '0.8rem',
};

export const Navbar = ({ title, username }) => {
  const clear = () => {
    localStorage.removeItem('user');
  };
  return (
    <nav className='navbar bg-dark'>
      <Link to='/home'>
        <h1>
          <i
            className='fa fa-calendar-check fa-lg'
            aria-hidden='true'
            style={space}
          ></i>
          {title}
        </h1>
      </Link>

      <ul>
        <li style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={{ paddingTop: '0.8rem' }}>{username}</p>
          <Link to='/login' onClick={clear()}>
            <i
              className='fa fa-user-circle fa-2x'
              aria-hidden='true'
              style={{ marginLeft: '0.4rem' }}
            ></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
