import React from "react";
import './Card.css'

export default (props) => {

  const style = {
    backgroundColor: props.color || "#f00100",
    borderColor: props.color || "#f00100"
  }
  return (
    <div className='Card' style={style}>
      <div className='Title'>{props.titulo}</div>
      <div className='Content'>
        {props.children}
      </div>
    </div>
  );
};
