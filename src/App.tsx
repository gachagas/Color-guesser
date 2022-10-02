/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";

import "./App.css";

const DEC_TO_HEX = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

const App: React.FunctionComponent = () => {
  const [userCorrect, setUserCorrect] = useState(false);
  const [correctIndex, setCorrectIndex] = useState(0);

  useEffect(() => {
    generateArray();
    setCorrectIndex(Math.floor(Math.random() * 3));
    console.log("the correct answer is ", correctIndex);
  }, []);

  const [colorArray, setColorArray] = useState({
    0: "",
    1: "",
    2: "",
  });

  const generateColor = (): string => {
    let randomDec;
    let ret = "#";
    for (let ctr = 0; ctr < 6; ctr++) {
      randomDec = Math.floor(Math.random() * 16);
      ret = ret.concat(Object.values(DEC_TO_HEX)[randomDec]);
    }
    // console.log(ret);
    return ret;
  };

  const generateArray = (): void => {
    const map1 = new Map();
    for (let ctr = 0; ctr < 3; ctr++) {
      const newColor = generateColor();

      if (map1.has(newColor)) {
        continue;
      }

      map1.set(ctr, newColor);
    }

    const newObject: any = {};
    map1.forEach((value, key) => {
      newObject[key] = value;
    });

    setColorArray(newObject);
  };

  const handleClick = (index: number): void => {
    console.log("Index", index);
    console.log("correctindex", correctIndex);

    if (index === correctIndex) {
      setUserCorrect(true);
      generateArray();
    } else {
      setUserCorrect(false);
    }
  };

  // populat colorArray

  return (
    <div className="App">
      <div
        className="mainBox"
        style={{
          background:
            colorArray[
              correctIndex as keyof {
                0: "";
                1: "";
                2: "";
              }
            ],
        }}
      ></div>
      <div className="buttonContainer">
        <div>
          The correct collor is{" "}
          {
            colorArray[
              correctIndex as keyof {
                0: "";
                1: "";
                2: "";
              }
            ]
          }
        </div>
        <button onClick={() => handleClick(0)}>
          {Object.values(colorArray)[0]}
        </button>
        <button onClick={() => handleClick(1)}>
          {Object.values(colorArray)[1]}
        </button>
        <button onClick={() => handleClick(2)}>
          {Object.values(colorArray)[2]}
        </button>
      </div>
      {userCorrect ? (
        <div>Your previous answer wasCorrect</div>
      ) : (
        <div>Your previous answer Wrong</div>
      )}
    </div>
  );
};

export default App;
