/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";

import "./App.css";

const App: React.FunctionComponent = () => {
  const [color, setColor] = useState("");
  const [userCorrect, setUserCorrect] = useState(false);
  const [colorArray, setColorArray] = useState<string[]>([]);

  useEffect(() => {
    const correctColor = generateColor();
    setColor(correctColor);
    setColorArray([correctColor, generateColor(), generateColor()].sort());
  }, []);

  const generateColor = (): string => {
    const DEC_TO_HEX = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    const color = new Array(6)
      .fill("0")
      .map(() => {
        return DEC_TO_HEX[Math.floor(Math.random() * 16)];
      })
      .join("");

    return `#${color}`;
  };

  const handleClick = (index: string): void => {
    if (index === color) {
      setUserCorrect(true);

      const correctColor = generateColor();
      setColor(correctColor);
      setColorArray([correctColor, generateColor(), generateColor()].sort());
    } else {
      setUserCorrect(false);
    }
  };

  return (
    <div className="App">
      <div
        className="mainBox"
        style={{
          background: color,
        }}
      ></div>
      <div className="buttonContainer">
        <div>The correct color is {color}</div>

        {colorArray.map((colorValue) => {
          return (
            <button key={colorValue} onClick={() => handleClick(colorValue)}>
              {colorValue}
            </button>
          );
        })}
      </div>
      {userCorrect ? (
        <div className="correct">Your previous answer was Correct</div>
      ) : (
        <div className="wrong">Your previous answer was Wrong</div>
      )}
    </div>
  );
};

export default App;
