import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const lottohist = require("../../public/lotto_hist.json").rows;
  let last = lottohist.length - 1;
  let ltCur = lottohist[last];
  let lt_hist = lottohist.slice(-9, -1);
  // useEffect(() => {
  // }, []);

  return (
    <div>
      <Seo title="Home" />
      <h1 className="p-4 text-lg text-center font-medium">
        {ltCur.idx}회 당첨번호 ({ltCur.lot_date})
      </h1>
      <div className="flex flex-row place-content-center space-x-2">
        <img className="flex-1" src={`/balls/${ltCur.ball1}.svg`} />
        <img className="flex-1" src={`/balls/${ltCur.ball2}.svg`} />
        <img className="flex-1" src={`/balls/${ltCur.ball3}.svg`} />
        <img className="flex-1" src={`/balls/${ltCur.ball4}.svg`} />
        <img className="flex-1" src={`/balls/${ltCur.ball5}.svg`} />
        <img className="flex-1" src={`/balls/${ltCur.ball6}.svg`} />
        <img className="flex-1" src={"/plus.svg"} />
        <img className="flex-1" src={`/balls/${ltCur.ballbnus}.svg`} />
      </div>
      <h1 className="p-4 text-lg text-center font-medium">
        당첨번호 내역 (~{ltCur.idx - 1}회)
      </h1>
      <div>
        {lt_hist.map((lt) => (
          <div className="flex flex-row place-content-center space-x-2">
            <img className="flex-1" src={`/balls/${lt.ball1}.svg`} />
            <img className="flex-1" src={`/balls/${lt.ball2}.svg`} />
            <img className="flex-1" src={`/balls/${lt.ball3}.svg`} />
            <img className="flex-1" src={`/balls/${lt.ball4}.svg`} />
            <img className="flex-1" src={`/balls/${lt.ball5}.svg`} />
            <img className="flex-1" src={`/balls/${lt.ball6}.svg`} />
            <img className="flex-1" src={"/plus.svg"} />
            <img className="flex-1" src={`/balls/${lt.ballbnus}.svg`} />
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
