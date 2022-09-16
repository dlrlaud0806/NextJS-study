import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const lottohist = require("../../public/lotto_hist.json");
  let last = lottohist.length - 1;
  let ltCur = lottohist[last];
  const sorted_hist = Object.entries(lottohist.slice(-9, -1)).sort(
    (a, b) => b["drwNoDate"] - a["drwNoDate"]
  );
  console.log(sorted_hist);
  // useEffect(() => {
  // }, []);

  return (
    <div>
      <Seo title="Home" />
      <h1 className="p-4 text-lg text-center font-medium">
        {ltCur.drwNo}회 당첨번호 ({ltCur.drwNoDate})
      </h1>
      <div className="flex flex-row place-content-center space-x-2">
        <img className="flex-1" src={`/balls/${ltCur.drwtNo1}.svg`} />
        <img className="flex-1" src={`/balls/${ltCur.drwtNo2}.svg`} />
        <img className="flex-1" src={`/balls/${ltCur.drwtNo3}.svg`} />
        <img className="flex-1" src={`/balls/${ltCur.drwtNo4}.svg`} />
        <img className="flex-1" src={`/balls/${ltCur.drwtNo5}.svg`} />
        <img className="flex-1" src={`/balls/${ltCur.drwtNo6}.svg`} />
        <img className="flex-1" src={"/plus.svg"} />
        <img className="flex-1" src={`/balls/${ltCur.bnusNo}.svg`} />
      </div>
      <h1 className="p-4 text-lg text-center font-medium">
        당첨번호 내역 (~{ltCur.drwNo - 1}회)
      </h1>
      <div>
        {sorted_hist.map((lt, idx) => (
          <div
            key={idx}
            className="flex flex-row place-content-center space-x-2"
          >
            <h1 className="p-4 text-lg text-center font-medium">
              {lt[1].drwNo - 1}
            </h1>
            <img className="flex-1" src={`/balls/${lt[1].drwtNo1}.svg`} />
            <img className="flex-1" src={`/balls/${lt[1].drwtNo2}.svg`} />
            <img className="flex-1" src={`/balls/${lt[1].drwtNo3}.svg`} />
            <img className="flex-1" src={`/balls/${lt[1].drwtNo4}.svg`} />
            <img className="flex-1" src={`/balls/${lt[1].drwtNo5}.svg`} />
            <img className="flex-1" src={`/balls/${lt[1].drwtNo6}.svg`} />
            <img className="flex-1" src={"/plus.svg"} />
            <img className="flex-1" src={`/balls/${lt[1].bnusNo}.svg`} />
          </div>
        ))}
      </div>
      <style jsx>{`
        img {
          max-width: 50px;
          max-height: 50px;
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
}
