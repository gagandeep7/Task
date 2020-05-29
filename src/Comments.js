/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useReducer } from 'react';
import { css } from '@emotion/core';

const step = 1;

const reducer = (state, action) => {
  // depending upon type do operation
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { upNum: state.upNum + step });
    case 'DECREMENT':
      return Object.assign({}, state, { downNum: state.downNum + step });
    default:
      return state;
  }
};

const Comments = ({ username, description }) => {
  // to do action reducer
  const [{ upNum, downNum }, dispatch] = useReducer(reducer, {
    upNum: 0,
    downNum: 0,
  });

  return (
    <div
      css={css`
        margin: 10px 0;
      `}
    >
      <h1
        css={css`
          padding-left: 50px;
        `}
      >
        {username}
      </h1>

      <div
        css={css`
          display: grid;
          grid-template-columns: 2fr 1fr;
        `}
      >
        <div
          css={css`
            padding-left: 50px;
            font-size: 1.3rem;
          `}
        >
          <p>{description}</p>
        </div>
        <div
          css={css`
            text-align: center;
            font-size: 1.2rem;
            padding: 3px;
          `}
        >
          <div
            css={css`
              display: grid;
              grid-template-columns: 1fr 1fr;
            `}
          >
            <i
              className="fas fa-thumbs-up"
              onClick={() => dispatch({ type: 'INCREMENT' })}
              css={css`
                text-align: right;
                color: green;
              `}
            ></i>
            <span
              css={css`
                text-align: left;
                padding-left: 15px;
              `}
            >
              {upNum} Upvotes
            </span>
          </div>
          <div
            css={css`
              display: grid;
              grid-template-columns: 1fr 1fr;
            `}
          >
            <i
              className="fas fa-thumbs-down"
              onClick={() => dispatch({ type: 'DECREMENT' })}
              css={css`
                text-align: right;
                color: red;
              `}
            ></i>
            <span
              css={css`
                text-align: left;
                padding-left: 15px;
              `}
            >
              {downNum} Upvotes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
