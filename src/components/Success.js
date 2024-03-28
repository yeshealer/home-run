import React from "react";
import HeaderText from "./gadgets/HeaderText";
import ScoreBoard from "./gadgets/ScoreBoard";
import { useBaseStore, useStartStore } from "../hooks";
import useActions from "../hooks/useActions";

export default function Success() {
  const updatePageState = useBaseStore((state) => state.updatePageState);
  const { textA, textB } = useStartStore((state) => ({
    textA: state.textA,
    textB: state.textB,
  }));

  const { generateEquation, getCorrectResult } = useActions();

  const onNextQuestion = () => {
    updatePageState("start");
  };

  return (
    <div className="text-xl flex flex-col items-center bg-white max-w-2xl py-6 rounded-3xl gap-6">
      <HeaderText />
      <ScoreBoard />
      <div className="max-h-[300px] overflow-hidden">
        <img src="/images/success.jpg" alt="success" className="-mt-40" draggable={false} />
      </div>
      <div className="text-[50px] text-black">Home Run!</div>
      <div className="text-[70px] text-black mt-4">
        {generateEquation(textA, textB) + getCorrectResult()}
      </div>
      <button
        className="bg-[#4681F4] text-white text-xl py-4 px-20 mt-6"
        onClick={onNextQuestion}
      >
        Next Question
      </button>
    </div>
  );
}
