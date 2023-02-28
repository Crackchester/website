import React from 'react';
import "./Spinner.scss";

const Spinner = (props) => {
  return <div className="loader" style={{display: props.isVisible ? 'block' : 'none'}}></div>;
}

export default Spinner;