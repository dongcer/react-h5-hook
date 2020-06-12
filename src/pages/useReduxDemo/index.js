import React, { memo } from "react";

import ShowArea from './ShowArea'
import Buttons from './Buttons'
import Swiper from "../../components/Swiper";
function UseReduxDemo () {
  return (
    <div style={{ height: '600px', overflow: 'hidden', border: '1px solid green', padding: '20px' }}>
      <h3>全局状态共享</h3>
      <ShowArea />
      <Buttons />
      <Swiper>
        <img src='http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg' alt=''/>
        <img src='http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg' alt='' />
        <img src='http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg' alt='' />
      </Swiper>
    </div>
  );
}
export default memo(UseReduxDemo)


