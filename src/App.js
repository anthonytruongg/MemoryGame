import './App.css';
import React, { useState, useEffect } from 'react';

const  App = () => {
  const [count, setCount] = useState(0)

  // call value, then call setValue
  const [color, setColor] = useState({
    blue: false,
    red: false,
    green: false,
    yellow: false,
    purple: false,
    pink: false,
    indigo: false,
    gray: false,
    orange: false,
    teal: false,
    brown: false,
    black: false,
    win: false,
    lose: false,
  })

  const selectBlue = () => {
    console.log('selecting blue')
    setColor({
      blue: true,
    })
  }

  const selectRed = () => {
    console.log('selecting red')
    setColor({
      red: true,
    })
  }

  const selectGreen = () => {
    console.log('selecting green')
    setColor({
      green: true,
    })
  }

  const selectYellow = () => {
    console.log('selecting yellow')
    setColor({
      yellow: true,
    })
  }

  const selectPurple = () => {
    console.log('selecting purple')
    setColor({
      purple: true,
    })
  }

  const selectPink = () => {
    console.log('selecting pink')
    setColor({
      pink: true,
    })
  }

  const selectIndigo = () => {
    console.log('selecting indigo')
    setColor({
      indigo: true,
    })
  }

  const selectGray = () => {
    console.log('selecting gray')
    setColor({
      gray: true,
    })
  }

  const selectOrange = () => {
    console.log('selecting orange')
    setColor({
      orange: true,
    })
  }

  const selectTeal = () => {
    console.log('selecting teal')
    setColor({
      teal: true,
    })
  }

  const selectBrown = () => {
    console.log('selecting brown')
    setColor({
      brown: true,
    })
  }

  const selectBlack = () => {
    console.log('selecting black')
    setColor({
      black: true,
    })
  }

  useEffect(() => {
    const checkColor = () => {
      if (color === true) {
        console.log("you have already chosen blue")
        setColor({
          lose: true,
        })
      }

      document.addEventListener("click", checkColor)

      return () => {
        document.removeEventListener("click", checkColor)
      }
    }
  }, [color])


  // useEffect (() => {}, []) hook
  // useEffect(() => {
  //   const changeColorOnClick = () => {
  //     if (color === "blue") {
  //       setColor("red")
  //     }
  //     else {
  //       setColor("blue")
  //     }
  //   }

  //     document.addEventListener("click", changeColorOnClick)

  //     return () => {
  //       document.removeEventListener("click", changeColorOnClick)
  //     }
  //   }, [color])

  // const incrementCount = () => {
  //   setCount(count + 1)
  // }

  return (
    <div className='flex flex-col space-y-8 items-center'>
      

        <div className='text-center text-white text-5xl font-bold'>Memory Game</div>
        <div className='text-center text-white text-3xl font-semibold'>Score:</div>

        <div className='text-center text-white text-3xl font-semibold'>You have chosen</div>

        <div className="grid grid-cols-4 gap-10 p-10">

      
          <div className="bg-blue-500 h-20 w-20 py-7 flex justify-center rounded-3xl text-blue-100 font-bold" onClick={selectBlue}>Blue</div>
          <div className="bg-red-500 h-20 w-20 py-7 flex justify-center rounded-3xl text-red-100 font-bold" onClick={selectRed}>Red</div>
          <div className="bg-green-500 h-20 w-20 py-7 flex justify-center rounded-3xl text-green-100 font-bold" onClick={selectGreen}>Green</div>
          <div className="bg-yellow-500 h-20 w-20 py-7 flex justify-center rounded-3xl text-yellow-100 font-bold" onClick={selectYellow}>Yellow</div>
          <div className="bg-purple-500 h-20 w-20 py-7 flex justify-center rounded-3xl text-purple-100 font-bold" onClick={selectPurple}>Purple</div>
          <div className="bg-pink-500 h-20 w-20 py-7 flex justify-center rounded-3xl text-pink-100 font-bold" onClick={selectPink}>Pink</div>
          <div className="bg-indigo-500 h-20 w-20 py-7 flex justify-center rounded-3xl text-indigo-100 font-bold" onClick={selectIndigo}>Indigo</div>
          <div className="bg-gray-500 h-20 w-20 py-7 flex justify-center rounded-3xl text-gray-100 font-bold" onClick={selectGray}>Gray</div>
          <div className="bg-orange-500 h-20 w-20 py-7 flex justify-center rounded-3xl text-orange-100 font-bold" onClick={selectOrange}>Orange</div>
          <div className="bg-teal-500 h-20 w-20 py-7 flex justify-center rounded-3xl text-teal-100 font-bold" onClick={selectTeal}>Teal</div>
          <div className="bg-yellow-900 h-20 w-20 py-7 flex justify-center rounded-3xl text-yellow-600 font-bold" onClick={selectBrown}>Brown</div>
          <div className="bg-black h-20 w-20 py-7 flex justify-center rounded-3xl text-white font-bold" onClick={selectBlack}>Black</div>
        
        </div>
    </div>
    
  );
}

export default App;
