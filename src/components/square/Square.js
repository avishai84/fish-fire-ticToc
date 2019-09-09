import React from 'react';

function Square(props) {
  return (
    <div className="square" onClick={props.onClick}>
        <div className="row">
            <button id="btn_0"></button>
            <button id="btn_1"></button>
            <button id="btn_2"></button>
        </div>
        <div className="row">
            <button id="btn_3"></button>
            <button id="btn_4"></button>
            <button id="btn_5"></button>
        </div>
        <div className="row">
            <button id="btn_6"></button>
            <button id="btn_7"></button>
            <button id="btn_8"></button>
        </div>
    </div>
  );
}

export default Square;
