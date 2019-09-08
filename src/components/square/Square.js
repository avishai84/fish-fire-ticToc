import React from 'react';

const hello = function(){};

function Square() {
  return (
    <div className="square" onClick={hello}>
        <div className="row">
            <button id="btn_0">square</button>
            <button id="btn_1">square</button>
            <button id="btn_2">square</button>
        </div>
        <div className="row">
            <button id="btn_3">square</button>
            <button id="btn_4">square</button>
            <button id="btn_5">square</button>
        </div>
        <div className="row">
            <button id="btn_6">square</button>
            <button id="btn_7">square</button>
            <button id="btn_8">square</button>
        </div>
    </div>
  );
}

export default Square;
