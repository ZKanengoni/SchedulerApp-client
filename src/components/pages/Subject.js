import React, { useState, Fragment } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Navbar } from '../layout/Navbar';
import axios from 'axios';

export const Subject = () => {
  const [subjectInfo, setSubject] = useState('');
  const subject = useLocation().state;

  React.useEffect(() => {
    axios
      .get(`http://localhost:8000/api/school/subject/${subject}`)
      .then((res) => {
        axios
          .get(`http://localhost:8000/api/school/classInfo/${res.data[0].id}`)
          .then((res) => {
            setSubject(res.data);
          });
      });
  }, []);

  if (!subjectInfo) {
    return (
      <div style={{ margin: '0 auto' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <div
        className='card all-center bg-light'
        style={{
          width: '350px',
          height: '350px',
          margin: '0 auto',
          marginTop: '2rem',
        }}
      >
        <h2>{subjectInfo[0].subject}</h2>
        <ul>
          <li>Classroom: {subjectInfo[0].class}</li>
          <li>Subject: {subjectInfo[0].subject}</li>
          <li>Teacher: {subjectInfo[0].teacher}</li>
          <li>Day: {subjectInfo[0].time.day}</li>
          <li>Period: {subjectInfo[0].time.period}</li>
        </ul>
      </div>
    </Fragment>
  );
};
