import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Useritem = ({ user, single }) => {
  if (!user.classes) {
    return <p>Loading...</p>;
  }

  let classSplit = single.split(' ');

  return (
    <Fragment>
      <tr>
        <td>{classSplit[1]}</td>
        <Link
          to={{
            pathname: `/subject/${classSplit[2]} `,
            state: `Grade ${classSplit[1]} ${classSplit[2]}`,
          }}
        >
          <td>{classSplit[2]}</td>
        </Link>
        <td>{classSplit[4]}</td>
      </tr>
    </Fragment>
  );
};

export default Useritem;
