import { useHomeStore, useStartStore } from ".";

export default function useActions() {
  const gameType = useHomeStore((state) => state.gameType);
  const { textA, textB } = useStartStore((state) => ({
    textA: state.textA,
    textB: state.textB,
  }));

  const generateEquation = (textA, textB) => {
    const symbol =
      gameType === "add"
        ? "+"
        : gameType === "sub"
        ? "-"
        : gameType === "multi"
        ? "x"
        : gameType === "div" && "/";
    return textA + " " + symbol + " " + textB + " " + "=";
  };

  const randomNumber = () => {
    return Math.floor(Math.random() * 11);
  };

  const getCorrectResult = () => {
    const correctResult =
      gameType === "add"
        ? textA + textB
        : gameType === "sub"
        ? textA - textB
        : gameType === "multi"
        ? textA * textB
        : gameType === "div" && textA / textB;
    return correctResult;
  };

  return {
    generateEquation,
    randomNumber,
    getCorrectResult,
  };
}
