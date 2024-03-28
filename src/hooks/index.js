import { create } from "zustand";

export const useHomeStore = create((set) => ({
  gameType: "add",
  updateGameType: (gameType) => set(() => ({ gameType: gameType })),
}));

export const useBaseStore = create((set) => ({
  pageState: "home",
  score: 0,
  finished: false,
  timeStamp: Date.now() + 12000,
  updatePageState: (pageState) => set(() => ({ pageState: pageState })),
  updateScore: (score) => set(() => ({ score: score })),
  setFinished: (finished) => set(() => ({ finished: finished })),
  updateTimeStamp: (timeStamp) => set(() => ({ timeStamp: timeStamp })),
}));

export const useStartStore = create((set) => ({
  textA: 0,
  textB: 0,
  updateTextA: (textA) => set(() => ({ textA: textA })),
  updateTextB: (textB) => set(() => ({ textB: textB })),
}));
