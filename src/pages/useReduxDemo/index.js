import React from "react";

import ShowArea from './ShowArea'
import Buttons from './Buttons'

function UseReduxDemo () {
  return (
    <div style={{ height: '600px', overflow: 'hidden', border: '1px solid green', padding: '20px'}}>
      <h3>全局状态共享</h3>
      <ShowArea />
      <Buttons />
    </div>
  );
}
export default UseReduxDemo


