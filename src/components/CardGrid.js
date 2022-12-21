import React from "react";

const CardGrid = (props) => {
  const handleClick = (e) => {
    props.getColor(e.target.textContent);
    props.updateScore();
    props.updateHighScore();
    props.playGame(e.target.textContent);
  };

  const colorsArray = [
    "blue",
    "red",
    "green",
    "purple",
    "pink",
    "indigo",
    "orange",
    "teal",
    "yellow",
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(colorsArray);

  return (
    <div className="flex flex-row my-10 justify-center">
      <div className="grid grid-cols-3 gap-10">
        {colorsArray.map((displayColor, index) => {
          return (
            <div
              key={index}
              className={`bg-${displayColor}-500 h-20 w-20 py-7 flex justify-center rounded-3xl text-${displayColor}-100 font-bold
                
                transition ease-in-out delay-50 bg-${displayColor}-500 hover:-translate-y-3 hover:scale-110 hover:bg-${displayColor}-500 duration-300

                `}
              onClick={handleClick}
            >
              {displayColor}
            </div>
            // <div key={index} className={`bg-${displayColor}-500 h-20 w-20 py-7 flex justify-center rounded-3xl text-${displayColor}-100 font-bold` } onClick={handleClick}>{displayColor}</div>
          );
        })}
      </div>
    </div>
  );
};

export default CardGrid;
