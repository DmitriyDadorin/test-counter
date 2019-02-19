import React from 'react';
import './style.css';

const Elements = props => {
  let arrImg = [];
  for (let k = 1; k <= props.counters; k++) {
    arrImg.push(<img key={k} src={props.messages} alt="no img" />);
  }

  return <div className="img_block">{arrImg}</div>;
};

export default Elements;
