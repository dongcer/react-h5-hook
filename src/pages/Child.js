import React from 'react';
import AjaxGetdata from "./AjaxGetdata";
import UseReduxDemo from "./useReduxDemo";

function Son ({ name, onClick }) {
  console.log('TestChild运行了');
  return (
    <div style={{ border: '1px solid green',padding: '20px' }}>
      <section>
        <div style={{ color: name.color }}>我是一个子组件，父级传过来的数据：{name.name}</div>
        <button onClick={onClick.bind(null, '新的子组件name')}>改变name</button>
      </section>
      <AjaxGetdata></AjaxGetdata>
      <UseReduxDemo></UseReduxDemo>
    </div>
  );
}
export default Son;
