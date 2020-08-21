import React, { useState } from 'react';

export const Search = (props) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.searchUsers(text);
    setText('');
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      <button className='btn btn-light btn-block' onClick={props.clearUsers}>
        Clear
      </button>
    </div>
  );
};
