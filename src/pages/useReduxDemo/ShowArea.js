import React, { useContext } from 'react'
import { Context } from "../../useRedux";

const ShowArea = (props) => {
  const context = useContext(Context); 
  return (
    <div style={{ color: context.data.color }}>字体颜色展示为blue</div>
  )
}

export default ShowArea
