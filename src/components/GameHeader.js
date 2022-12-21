import React from 'react'

const GameHeader = (props) => {
  return (
    <div className='flex flex-col space-y-8 items-center'>
      
      <div className='text-center p-5 rounded-md my-10 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-200 text-5xl font-bold'>RmbrMe.io</div>
      <div className='text-center text-white text-3xl font-semibold'>Score: {props.score} </div>
      <div className='text-center text-white text-3xl font-semibold'>High Score: {props.highScore} </div>
      <div className='text-center text-white text-3xl font-semibold'>Selected: {props.colorName}</div>

    </div>
  )
}



export default GameHeader