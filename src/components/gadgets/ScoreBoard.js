import React, { useEffect } from "react";
import { useBaseStore } from "../../hooks";
import Countdown, { zeroPad } from "react-countdown";

export default function ScoreBoard() {
  const score = useBaseStore((state) => state.score);
  const { updatePageState, timeStamp } = useBaseStore((state) => ({
    updatePageState: state.updatePageState,
    timeStamp: state.timeStamp,
  }));

  const Completionist = () => <span>00:00</span>;

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    }
    return (
      <span>
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.floor(Date.now() / 1000) === Math.floor(timeStamp / 1000)) {
        updatePageState("result");
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeStamp]);

  return (
    <div className="bg-[#527754] w-full flex justify-around items-center text-white py-2 font-bold">
      <div className="flex items-center gap-4">
        <div>Home Run: </div>
        <div className="bg-black border border-white px-4 text-2xl">
          {score}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>Time Remaining: </div>
        <div className="bg-black border border-white px-4 text-2xl">
          <Countdown date={timeStamp} renderer={renderer} />
        </div>
      </div>
    </div>
  );
}
