import React, { useState } from "react";
import CardGrid from "./CardGrid";
import GameHeader from "./GameHeader";
import Footer from "./Footer";

const PlayGame = () => {
  const [score, setScore] = useState(0);

  const [color, setColor] = useState("");

  const [highScore, setHighScore] = useState(0);

  const [clickedColors, setClickedColors] = useState([]);

  const [message, setMessage] = useState("");

  const playGame = (color) => {
    if (clickedColors.includes(color)) {
      resetGame();
      updateStatus();
      console.log("you have already clicked", color, "=", clickedColors);
    } else {
      const newScore = score + 1;
      if (newScore > highScore) setHighScore(newScore);
      setScore(newScore);
      setClickedColors((prevState) => [...prevState, color]);
    }
  };

  const resetGame = () => {
    setScore(0);
    setClickedColors([]);
  };

  const updateHighScore = () => {
    if (score > highScore) {
      setHighScore(score);
    }
  };

  const updateScore = () => {
    // console.log('score', score)
    setScore(score + 1);
  };

  const getColor = (color) => {
    setColor({ color });
    console.log("color", setColor.color);
  };

  const updateStatus = (color) => {
    setMessage(
      "Try to see how many colors you can click without clicking the same color twice."
    );
    alert("You have already clicked this color.");
  };

  return (
    <div className="">
      <GameHeader score={score} highScore={highScore} colorName={color.color} />
      <CardGrid
        playGame={playGame}
        updateScore={updateScore}
        updateHighScore={updateHighScore}
        getColor={getColor}
      />
      <Footer status={message} />
    </div>
  );
};

export default PlayGame;
