/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import axios from 'axios';
const App = () => {
  const [obj, setObj] = useState(false);
  let [arr, setArr] = useState([]);
  const step = 10;
  let onForm = (e) => {
    axios.post('http://localhost:5000', e).then((res) => setObj(!obj));
  };

  useEffect(() => {
    console.log(obj);
    axios.get('http://localhost:5000/').then(
      ({ data }) => {
        let Data = data.map((data) => data);
        setArr(Data);
      },
      { crossdomain: true }
    );
  }, [setArr, obj, setObj]);

  return (
    <div
      css={css`
        width: 1000px;
        height: auto;
        overflow: auto;
        margin: 0 auto;
        margin-top: 40px;
        box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);
        border-radius: 2%;
      `}
    >
      <CommentBox onForm={onForm} />
      <CommentList arr={arr} obj={obj} />
    </div>
  );
};
export default App;
