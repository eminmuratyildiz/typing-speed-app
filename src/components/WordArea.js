import React from "react";
import { useSelector } from "react-redux";

function WordArea() {
  const { words, top } = useSelector((state) => state.data);
  return (
    <div className="relative h-28 mb-2 border border-[#8eb6d8] rounded-[4px] text-3xl times overflow-hidden">
      <div
        style={{ top: top === 0 ? 12 : `-${top - 12}px` }}
        className="words absolute pb-4 pl-4 pr-4 flex flex-wrap gap-y-4 gap-x-2 top-4 items-center overflow-hidden"
      >
        {words.map((item, key) => {
          return (
            <span
              style={{ backgroundColor: item.bg, color: item.color }}
              key={key}
            >
              {item.word}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default WordArea;
