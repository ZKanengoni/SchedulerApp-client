import React, { useState } from 'react';
import Useritem from '../users/Useritem';

const width = {
  width: '78%',
};

export const Table = ({ user }) => {
  if (!user.classes) {
    return <p>Loading...</p>;
  }
  return (
    <div className='all-center'>
      <br />
      <table id='subject-table' style={width}>
        <thead>
          <th>Grade</th>
          <th>Subject</th>
          <th>Group</th>
        </thead>
        <tbody>
          {user.classes.map((single, count) => (
            <Useritem key={count} user={user} count={count} single={single} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
