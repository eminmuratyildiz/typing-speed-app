import { useDispatch, useSelector } from "react-redux";
import { decrementTime, timeOver, changeTop, bgFirst } from "./redux/wordSlice";
import { useEffect } from "react";
import Result from "./components/Result";
import WordArea from "./components/WordArea";
import InputArea from "./components/InputArea";
import SelectArea from "./components/SelectArea";

function App() {
  const { top, wordIndex, start, time, finish } = useSelector(
    (state) => state.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bgFirst());
  }, [dispatch]);
  useEffect(() => {
    const el = document.querySelector(
      `.words > span:nth-child(${wordIndex + 1})`
    );
    el.offsetTop > top && dispatch(changeTop());
  }, [wordIndex]);
  useEffect(() => {
    if (start && time > 0) {
      const timer = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
    time === 0 && dispatch(timeOver());
  }, [time, start, dispatch]);
  return (
    <div className="w-[62%] mx-auto py-5">
      <SelectArea />
      <WordArea />
      <InputArea />
      {finish ? <Result /> : null}
    </div>
  );
}

export default App;
