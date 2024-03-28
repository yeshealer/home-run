import { useCallback } from "react";
import { useHomeStore, useStartStore } from ".";

export default function useActions() {
  const { updateSelectedGameType, selectedGameType, gameType } = useHomeStore(
    (state) => ({
      updateSelectedGameType: state.updateSelectedGameType,
      selectedGameType: state.selectedGameType,
      gameType: state.gameType,
    })
  );
  const { textA, textB, updateTextA, updateTextB } = useStartStore((state) => ({
    textA: state.textA,
    textB: state.textB,
    updateTextA: state.updateTextA,
    updateTextB: state.updateTextB,
  }));

  const generateEquation = useCallback(
    (textA, textB) => {
      const randomNumber = Math.floor(Math.random() * gameType.length);
      const newSelectedGameType = gameType[randomNumber];
      updateSelectedGameType(newSelectedGameType);
      const symbol = getSymbol(newSelectedGameType);
      if (newSelectedGameType === "sub") {
        textA = textA > textB ? textA : textB;
        textB = textA > textB ? textB : textA;
      }
      if (newSelectedGameType === "div") {
        if (textA % textB !== 0) {
          textA = textA * textB;
        }
      }
      updateTextA(textA);
      updateTextB(textB);
      return textA + " " + symbol + " " + textB + " " + "=";
    },
    [gameType]
  );

  const randomNumber = () => {
    return Math.floor(Math.random() * 11) + 1;
  };

  const getSymbol = (gameType) => {
    const symbol =
      gameType === "add"
        ? "+"
        : gameType === "sub"
        ? "-"
        : gameType === "multi"
        ? "x"
        : gameType === "div" && "/";
    return symbol;
  };

  const getCorrectResult = useCallback(() => {
    const correctResult =
      selectedGameType === "add"
        ? textA + textB
        : selectedGameType === "sub"
        ? textA - textB
        : selectedGameType === "multi"
        ? textA * textB
        : selectedGameType === "div" && textA / textB;
    return correctResult;
  }, [selectedGameType, textA, textB]);

  return {
    generateEquation,
    randomNumber,
    getCorrectResult,
    getSymbol,
  };
}
