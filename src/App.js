import './App.css';
import React, { useEffect, useState } from 'react';
import CardGrid from './components/CardGrid';
import GameHeader from './components/GameHeader';


const App = () => {

  const [score, setScore] = useState(0)

  const [color, setColor] = useState({})

  const [highScore, setHighScore] = useState(0)

  const [clickedColors, setClickedColors] = useState([])


  const playGame = (color) => {
    if (clickedColors.includes(color)) {
      resetGame()
      console.log('you have already clicked', color, '=' , clickedColors)
    } else {
      if (score > highScore) {
        setHighScore(score)
        setClickedColors((prevState) => [...prevState, color])
      }
    }
  }

  const resetGame = () => {
    setScore(0)
    setClickedColors([])
  }

  const updateHighScore = () => {
    if (score > highScore) {
      setHighScore(score)
    }
  }

  const updateScore = () => {
    // console.log('score', score)
    setScore(score + 1)
  }

  const getColor = (color) => {
    // console.log('color', color)
    setColor({color})
    // console.log('searchColor - ', searchColor)
    // console.log('clicked colors array',clickedColors)
  }
 
  return (
    <div className=''>
      <GameHeader score={score} highScore={highScore} colorName={color.color}/>
      <CardGrid playGame={playGame} updateScore={updateScore} updateHighScore={updateHighScore} getColor={getColor}/>
    </div>
  );
}

export default App;
