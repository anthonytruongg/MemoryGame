import React, { useState, useEffect } from 'react';

const  GameOne = () => {

  const [count, setCount] = useState(0)

  const [colorCount, setColorCount] = useState({
    blue: 0,
    red: 0,
    green: 0,
    yellow: 0,
    purple: 0,
    pink: 0,
    indigo: 0,
    gray: 0,
    orange: 0,
    teal: 0,
    brown: 0,
    black: 0,
    status: '',
  })

  // call value, then call setValue
  const [color, setColor] = useState({
    win: false,
    lose: false,
    color: '',
  })

  const incrementCount = () => {
    setCount(count + 1)
  }

  const selectBlue = () => {
    incrementCount()
    setColor({
      color: 'Blue',
    })
    setColorCount({
      blue: colorCount.blue + 1,
    })
  }

  const selectRed = () => {
    incrementCount()
    setColor({
      color: 'Red',
    })
    setColorCount({
      red: colorCount.red + 1,
    })
  }

  const selectGreen = () => {
    incrementCount()
    setColor({
      color: 'Green'
    })
    setColorCount({
      green: colorCount.green + 1,
    })
  }

  const selectYellow = () => {
    incrementCount()
    setColor({
      color: 'Yellow'
    })
    setColorCount({
      yellow: colorCount.yellow + 1,
    })
  }

  const selectPurple = () => {
    incrementCount()
    setColor({
      color: 'Purple'
    })
    setColorCount({
      purple: colorCount.purple + 1,
    })
  }

  const selectPink = () => {
    incrementCount()
    setColor({
      color: 'Pink'
    })
    setColorCount({
      pink: colorCount.pink + 1,
    })
  }

  const selectIndigo = () => {
    incrementCount()
    setColor({
      color: 'Indigo'
    })
    setColorCount({
      indigo: colorCount.indigo + 1,
    })
  }

  const selectGray = () => {
    incrementCount()
    setColor({
      color: 'Gray'
    })
    setColorCount({
      gray: colorCount.gray + 1,
    })
  }

  const selectOrange = () => {
    incrementCount()
    setColor({
      color: 'Orange'
    })
    setColorCount({
      orange: colorCount.orange + 1,
    })
  }

  const selectTeal = () => {
    incrementCount()
    setColor({
      color: 'Teal'
    })
    setColorCount({
      teal: colorCount.teal + 1,
    })
  }

  const selectBrown = () => {
    incrementCount()
    setColor({
      color: 'Brown'
    })
    setColorCount({
      brown: colorCount.brown + 1,
    })
  }

  const selectBlack = () => {
    incrementCount()
    setColor({
      color: 'Black'
    })
    setColorCount({
      black: colorCount.black + 1,
    })
  }

  useEffect(() => {
      if (colorCount.blue === 2) {
        console.log("you have already chosen blue")
        setColorCount({
          status: 'Game Over! You have already chosen blue',
        })
      }
      else if (colorCount.red === 2) {
        console.log("you have already chosen red")
        setColorCount({
          status: 'Game Over! You have already chosen red',
        })
      }
      else if (colorCount.green === 2) { 
        console.log("you have already chosen green")
        setColorCount({
          status: 'Game Over! You have already chosen green',
        })
      }
      else if (colorCount.yellow === 2) {
        console.log("you have already chosen yellow")
        setColorCount({
          status: 'Game Over! You have already chosen yellow',
        })
      }
      else if (colorCount.purple === 2) {
        console.log("you have already chosen purple")
        setColorCount({
          status: 'Game Over! You have already chosen purple',
        })
      }
      else if (colorCount.pink === 2) {
        console.log("you have already chosen pink")
        setColorCount({
          status: 'Game Over! You have already chosen pink',
        })
      }
      else if (colorCount.indigo === 2) {
        console.log("you have already chosen indigo")
        setColorCount({
          status: 'Game Over! You have already chosen indigo',
        })
      }
      else if (colorCount.gray === 2) {
        console.log("you have already chosen gray")
        setColorCount({
          status: 'Game Over! You have already chosen gray',
        })
      }
      else if (colorCount.orange === 2) {
        console.log("you have already chosen orange")
        setColorCount({
          status: 'Game Over! You have already chosen orange',
        })
      }
      else if (colorCount.teal === 2) {
        console.log("you have already chosen teal")
        setColorCount({
          status: 'Game Over! You have already chosen teal',
        })
      }
      else if (colorCount.brown === 2) {
        console.log("you have already chosen brown")
        setColorCount({
          status: 'Game Over! You have already chosen brown',
        })
      }
      else if (colorCount.black === 2) {
        console.log("you have already chosen black")
        setColorCount({
          status: 'Game Over! You have already chosen black',
        })
      }
  }, [colorCount.blue, colorCount.red, colorCount.green, colorCount.yellow, colorCount.purple, colorCount.pink, colorCount.indigo, colorCount.gray, colorCount.orange, colorCount.teal, colorCount.brown, colorCount.black, colorCount.status])


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
        <div className='text-center text-white text-3xl font-semibold'>Score: {count}</div>

        <div className='text-center text-white text-3xl font-semibold'>You have chosen {color.color}</div>

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

        <div className='text-center text-white text-3xl font-semibold'>{colorCount.status}</div>

    </div>
    
  );
}

export default GameOne;
