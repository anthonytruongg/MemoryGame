import './App.css';
import React, { useState, useEffect } from 'react';
// import { useState } from 'react';

const  App = () => {
  const [count, setCount] = useState(0)
  // call value, then call setValue
  const [color, setColor] = useState('blue')

  // useEffect (() => {}, []) hook

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "blue") {
        setColor("red")
      }
      else {
        setColor("blue")
      }
    }

      document.addEventListener("click", changeColorOnClick)

      return () => {
        document.removeEventListener("click", changeColorOnClick)
      }
    }, [color])

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div style={{
      backgroundColor: 'grey',
    }}>
       <div className="App" id='myDiv'  style = {{
      color: "white",
      width: "100px",
      height: "100px",
      position: "absolute",
      left: "50%",
      top: "50%",
      backgroundColor: color, // change color that is saved in state
    }}>
      Click me :D
      </div>
        <div>{count}</div>
        <button onClick={incrementCount}> Increment </button>
    </div>
    
  );
}

export default App;
