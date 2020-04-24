import React, { useState, useMemo, memo, Fragment, useCallback, useContext } from 'react';
import Child from "./Child";
import { Context } from "../useRedux";

const ChildMemo = memo(Child)


function Parent () {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Child组件');
  const context = useContext(Context);

  return (
    <Fragment>
      <div style={{ border: '1px solid red', padding: '20px' }}>
        <button onClick={(e) => { setCount(count + 1) }}>加1</button>
        <p style={{ color: context.data.color }}>父组件count:{count}</p>
        <ChildMemo name={
          useMemo(() => ({
            name,
            color: name.indexOf('name') !== -1 ? 'red' : 'green'
          }), [name])
        } onClick={useCallback((newName) => setName(newName), [])} />
      </div>
    </Fragment>
  )
}

export default Parent;
