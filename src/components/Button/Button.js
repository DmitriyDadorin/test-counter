import React from 'react';
import './style.css';

const Button = props => {
  return (
    <div>
      <button className="button_img" onClick={props.count}>
        +
      </button>
      <button className="button_img" onClick={props.count}>
        -
      </button>
    </div>
  );
};

export default Button;
