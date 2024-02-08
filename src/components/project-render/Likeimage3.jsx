import React from 'react'

const Likeimage3=(props)=> {
  return (
    <div>
        <button onClick={props.handleCount}>Like image{props.count}</button>
    </div>
  )
}
export  default Likeimage3;