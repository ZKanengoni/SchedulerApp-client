import React, { useState, useEffect } from 'react';
import { Navbar } from '../layout/Navbar';
import { Table } from '../layout/Table';
import { Search } from '../users/Search';
import axios from 'axios';

export const Home = (props) => {
  const [user, setUser] = useState([]);
  const username = localStorage.getItem('user');

  useEffect(() => {
    const call = async () => {
      const res = await axios.get(
        `http://localhost:8000/api/school/learner/${username}`
      );

      setUser(res.data);
    };

    call();
  }, []);

  const [search, setSearch] = useState([]);

  const searchUsers = async (text) => {
    const res = await axios.get(
      `http://localhost:8000/api/school/learner/${text}`
    );

    setSearch(res.data);
  };

  const clearUsers = () => setSearch('');

  return (
    <div>
      <Navbar title='SchedulerApp' username={username} />
      <div className='container'>
        <Search searchUsers={searchUsers} clearUsers={clearUsers} />
        <Table user={user} />
      </div>
    </div>
  );
};
