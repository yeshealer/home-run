import React from "react";
import HeaderText from "./gadgets/HeaderText";
import ScoreBoard from "./gadgets/ScoreBoard";
import { useBaseStore } from "../hooks";

export default function Result() {
  const { updatePageState, updateScore, score } = useBaseStore((state) => ({
    updatePageState: state.updatePageState,
    updateScore: state.updateScore,
    score: state.score,
  }));

  const onPlayAgain = () => {
    updatePageState("home");
    updateScore(0);
  };

  return (
    <div className="text-xl flex flex-col items-center bg-white max-w-2xl py-6 rounded-3xl gap-6">
      <HeaderText />
      <ScoreBoard />
      <div className="max-h-[300px] overflow-hidden">
        <img
          src="/images/result.jpg"
          alt="result"
          className="-mt-[500px]"
          draggable={false}
        />
      </div>
      <div className="text-[50px] text-black">Great Job!</div>
      <div className="text-[50px] text-black mt-4">
        You hit {score} Home Runs
      </div>
      <button
        className="bg-[#4681F4] text-white text-xl py-4 px-20 mt-6"
        onClick={onPlayAgain}
      >
        Play Again
      </button>
    </div>
  );
}
