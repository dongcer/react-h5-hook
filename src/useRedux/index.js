import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
// 创建 context
export const Context = createContext();

/**
 * 创建一个 UseRedux 组件
 * UseRedux 组件包裹的所有子组件都可以通过调用 Context 访问到 value
 */
const initialState = {
  color: 'blue',
  count2: 1
};
export const UseRedux = props => {
  const [data, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ data, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
