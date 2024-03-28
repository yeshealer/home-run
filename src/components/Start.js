import React, { useEffect, useState } from "react";
import HeaderText from "./gadgets/HeaderText";
import ScoreBoard from "./gadgets/ScoreBoard";
import { useBaseStore, useStartStore } from "../hooks";
import useActions from "../hooks/useActions";

export default function Start() {
  const { score, updateScore, updatePageState } = useBaseStore((state) => ({
    score: state.score,
    updateScore: state.updateScore,
    updatePageState: state.updatePageState,
  }));
  const { updateTextA, updateTextB } = useStartStore((state) => ({
    updateTextA: state.updateTextA,
    updateTextB: state.updateTextB,
  }));

  const { generateEquation, randomNumber, getCorrectResult } = useActions();
  const [userResult, setUserResult] = useState("0");

  const [equation, setEquation] = useState("");

  const checkAnswer = () => {
    const correctResult = getCorrectResult();
    if (correctResult === Number(userResult)) {
      updateScore(score + 1);
      updatePageState("success");
    } else {
      updatePageState("fail");
    }
  };

  const startAction = () => {
    const generatedTextA = randomNumber();
    const generatedTextB = randomNumber();
    updateTextA(generatedTextA);
    updateTextB(generatedTextB);
    const equation = generateEquation(generatedTextA, generatedTextB);
    setEquation(equation);
  };

  const handleChange = (event) => {
    setUserResult(event.target.value);
  };

  useEffect(() => {
    startAction();
  }, []);

  return (
    <div className="text-xl flex flex-col items-center bg-white max-w-2xl py-6 rounded-3xl gap-6">
      <HeaderText />
      <ScoreBoard />
      <div className="max-h-[300px] overflow-hidden">
        <img
          src="/images/start.jpg"
          alt="start"
          className="-mt-20"
          draggable={false}
        />
      </div>
      <div className="flex items-center text-[70px] text-black">
        <div>{equation}</div>
        <input
          className="w-32 border border-gray-600 text-center bg-white"
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-[#4681F4] text-white text-xl py-4 px-20"
        onClick={checkAnswer}
      >
        Submit Answer
      </button>
    </div>
  );
}
