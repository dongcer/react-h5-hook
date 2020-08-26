import React, { useState, useMemo, memo, Fragment, useCallback, useContext } from 'react';
import Child from "./Child";
import { Context } from "../useRedux";
import { Choose, When, Otherwise } from 'babel-plugin-jsx-control-statements'
//hooks 独有优化方式memo
const ChildMemo = memo(Child)


function Parent () {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Child组件');
  const context = useContext(Context);
  return (
    <Fragment>
      <div style={{ border: '1px solid red', padding: '20px' }}>
        <Choose>
          <When condition={true}>
            <span>IfBlock1</span>
          </When>
          <When condition={true}>
            <span>IfBlock2</span>
          </When>
          <Otherwise>
            <span>ElseBlock</span>
          </Otherwise>
        </Choose>
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
