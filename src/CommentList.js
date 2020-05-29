import React from 'react';
import Comments from './Comments';
import { css } from '@emotion/core';

const CommentList = ({ arr }) => {
  const Items = arr.map(({ username, description }, index) => (
    <Comments key={index} username={username} description={description} />
  ));

  return (
    <div
      css={css`
        margin-bottom: 100px;
      `}
    >
      {Items.length > 1 && Items}
    </div>
  );
};

export default CommentList;
