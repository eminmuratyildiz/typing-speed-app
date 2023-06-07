import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import {
  checkLetter,
  checkWord,
  handleChange,
  restart,
} from "../redux/wordSlice";
import { useDispatch, useSelector } from "react-redux";

function InputArea() {
  const dispatch = useDispatch();
  const { currentWord, time, finish } = useSelector((state) => state.data);
  return (
    <div className="flex justify-center space-x-2 h-[58px] bg-[#A7C8E7] py-1">
      <input
        value={currentWord}
        onChange={(e) => dispatch(handleChange(e.target.value))}
        onKeyUp={(e) => {
          if (e.code === "Space") {
            dispatch(checkWord());
          }
          dispatch(checkLetter());
        }}
        className="w-3/5 rounded outline-none px-1 text-3xl times"
        disabled={finish}
      />
      <div className="w-[70px] flex items-center justify-center bg-[#3c4d5c] rounded text-white text-2xl">
        {time === 60 ? "1:00" : time < 10 ? "0:0" + time : "0:" + time}
      </div>
      <button
        onClick={() => dispatch(restart())}
        className="px-3 rounded-md border border-[#357ebd] bg-[#428bca] text-white"
      >
        <FiRefreshCw size={20} />
      </button>
    </div>
  );
}

export default InputArea;
