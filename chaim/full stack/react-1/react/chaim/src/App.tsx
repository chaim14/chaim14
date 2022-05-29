import React, { useState, useEffect } from "react";
import _ from "lodash";
import "./view/conponents/styles/App.scss";
import game from "./view/conponents/Game";

const colors = ["red", "blue", "green", "yellow"];
const sequenceLength = 4;

function randomSequence(len:any) {
  const seq = new Array(len)
    .fill(0)
    .map((x) => Math.floor(Math.random() * colors.length) + 1);
  const zeros = new Array(len).fill(0);

  return _.flatMap(_.zip(seq, zeros));
}

function Game (){
  const [secretSequence, setSecretSequence] = useState(
    randomSequence(sequenceLength)
  );
  const [index, setIndex] = useState(0);
  const [currentSequence, setCurrentSequence] = useState([]);
  const [flash, setFlash] = useState(0);

  useEffect(() => {
    if (flash === 0) return;

    const timer = setTimeout(() => {
      setFlash(0);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [flash]);

  useEffect(() => {
    if (
      _.isEqual(currentSequence.slice(-1 * sequenceLength * 2), secretSequence)
    ) {
      alert("Bravo!");

  
      setCurrentSequence([]);
      setSecretSequence(randomSequence(sequenceLength));
      setIndex(0);
    }
  }, [currentSequence, secretSequence]);

  useEffect(() => {
    if (index >= secretSequence.length) return;

    const timer = setTimeout(
      () => {
        setIndex((i) => i + 1);
      },
      index % 2 === 0 ? 600 : 200
    );

    return () => {
      clearTimeout(timer);
    };
  }, [index, secretSequence]);

  function cx(squareIndex:any) {
    return `
    colored-box
    ${colors[squareIndex - 1]}
    ${secretSequence[index] === squareIndex ? "active" : ""}
    ${flash === squareIndex ? "active" : ""}
    `;
  }

  function clicked(n:any) {
    setCurrentSequence(function (s): any {
        return [...s, n, 0];
      });
    setFlash(n);
  }

  return (
    <div>
      <div className="game">
        <div className={cx(1)} onClick={() => clicked(1)}>
          1
        </div>
        <div className={cx(2)} onClick={() => clicked(2)}>
          2
        </div>
        <div className={cx(3)} onClick={() => clicked(3)}>
          3
        </div>
        <div className={cx(4)} onClick={() => clicked(4)}>
          4
        </div>
      </div>
      <div>
        <button onClick={() => setIndex(0)}>Play Again</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

