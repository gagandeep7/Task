// import
import React, { useState } from 'react';
import { css } from '@emotion/core';

// comentBox
const CommentBox = ({ onForm }) => {
  // states
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // FORM HANDLING
  let onFormSubmit = (e) => {
    e.preventDefault();

    // PASS TO PARENT
    const userObject = {
      username: name,
      description: description,
    };

    // CHILD TO PARENT
    onForm(userObject);

    // CLEAR INPUTS
    setName('');
    setDescription('');
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="ui reply form"
      css={css`
        padding: 50px 100px;
      `}
    >
      <div className="field">
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          required
          name="username"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          css={css`
            width: 400px !important;
            margin-bottom: 30px !important;
          `}
        />
        <textarea
          id="description"
          placeholder="Type a Comment..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          css={css`
            resize: none !important;
            &:focus {
              outline: none !important;
            }
            &::placeholder {
              font-size: 30px;
              font-weight: 700;
            }
          `}
        ></textarea>
      </div>
      <button
        className="ui red button"
        css={css`
          float: right;
        `}
      >
        Post Comment
      </button>
    </form>
  );
};

export default CommentBox;
