/*
 * @Author: your name
 * @Date: 2020-07-19 20:03:40
 * @LastEditTime: 2020-07-19 22:05:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-h5-hook\src\utils\myCall.js
 */
Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    console.error("type error");
  }
  // 获取参数
  let args = [...arguments].slice(1),
    result = null;
  context = context || window
  context.fn=this
  
  result=context.fn(...args)
  
  delete context.fn

  return result

}
