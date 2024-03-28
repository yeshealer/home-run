import React from "react";
import { checkBoxList } from "../constants/home";
import { useBaseStore, useHomeStore } from "../hooks";
import HeaderText from "./gadgets/HeaderText";

export default function Home() {
  const { updatePageState, updateTimeStamp } = useBaseStore((state) => ({
    updatePageState: state.updatePageState,
    updateTimeStamp: state.updateTimeStamp,
  }));
  const { gameType, updateGameType } = useHomeStore((state) => ({
    gameType: state.gameType,
    updateGameType: state.updateGameType,
  }));

  const onNext = () => {
    updatePageState("start");
    updateTimeStamp(Date.now() + 120000);
  };

  const onChangeGameType = (event) => {
    updateGameType(event.target.value);
  };

  return (
    <div className="text-xl flex flex-col items-center bg-white text-black w-full md:max-w-2xl p-6 rounded-3xl gap-6">
      <HeaderText />
      <div>Select Question Types</div>
      <div className="flex flex-wrap items-center gap-4">
        {checkBoxList.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-1">
              <input
                type="checkbox"
                value={item.value}
                className="w-6 h-6 checkbox checkbox-accent"
                onChange={onChangeGameType}
                checked={item.value === gameType}
              />
              {item.label}
            </div>
          );
        })}
      </div>
      <button
        className="bg-[#4681F4] text-white text-3xl py-4 px-20 mt-6"
        onClick={onNext}
      >
        Play Ball!
      </button>
    </div>
  );
}
