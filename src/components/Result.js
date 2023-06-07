import React from "react";
import { useSelector } from "react-redux";

function Result() {
  const { successWords, errorWords, successLetter, errorLetter } = useSelector(
    (state) => state.data
  );
  return (
    <div className="w-[280px] rounded-[3px] shadow-md">
      <h3 className="bg-gradient-to-b from-[#5e91b3] to-[#407191] text-white font-bold px-4 py-2 rounded-tl-[3px] rounded-tr-[3px] mt-10 font-sans">
        Sonuç
      </h3>
      <div className="text-center py-4 border-b-[1px] border-[#ddd]">
        <h1 className="text-[46px] text-[#527a1e] font-bold leading-10 pb-2">
          {successWords - errorWords >= 0 ? successWords - errorWords : 0} DKS
        </h1>
        <p className="text-[#81888c] text-xs">kelime yazabiliyorum</p>
      </div>
      <div className="flex justify-between items-center px-5 py-2 border-b-[1px] border-[#ddd]">
        <span>Tuş Vuruşu</span>
        <div className="flex w-20 justify-between items-center">
          <div className="flex items-center">
            <span className="pr-1 text-xs text-green-700">{successLetter}</span>
            <span className="pr-1 text-xs">|</span>
            <span className="text-xs text-red-600">{errorLetter}</span>
          </div>
          <span className="">{successLetter + errorLetter}</span>
        </div>
      </div>
      <div className="flex justify-between px-5 py-2 border-b-[1px] border-[#ddd]">
        <span>Doğruluk</span>
        <span className="font-bold">
          {((successLetter / (successLetter + errorLetter)) * 100).toFixed(2)}%
        </span>
      </div>
      <div className="flex justify-between px-5 py-2 border-b-[1px] border-[#ddd]">
        <span>Doğru Kelime</span>
        <span className="font-bold text-green-700">{successWords}</span>
      </div>
      <div className="flex justify-between px-5 py-2 border-b-[1px] border-[#ddd]">
        <span>Yanlış Kelime</span>
        <span className="font-bold text-red-600">{errorWords}</span>
      </div>
    </div>
  );
}

export default Result;
