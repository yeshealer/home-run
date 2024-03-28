import "./App.css";
import Home from "./components/Home";
import Start from "./components/Start";
import Success from "./components/Success";
import Fail from "./components/Fail";
import Result from "./components/Result";
import { useBaseStore } from "./hooks";

function App() {
  const pageState = useBaseStore((state) => state.pageState);

  return (
    <div className="App h-screen py-10 flex flex-col items-center gap-6">
      <div className="uppercase text-[50px] text-black">Home Run Derby</div>
      {pageState === "home" ? (
        <Home />
      ) : pageState === "start" ? (
        <Start />
      ) : pageState === "success" ? (
        <Success />
      ) : pageState === "fail" ? (
        <Fail />
      ) : (
        pageState === "result" && <Result />
      )}
    </div>
  );
}

export default App;
