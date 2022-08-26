import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const [movies, setMovie] = useState([]);
  const lottohist = require("../../public/lotto_hist.json").rows;
  let last = lottohist.length - 1;
  let ltCur = lottohist[last];
  // useEffect(() => {
  // }, []);

  return (
    <div>
      <Seo title="Home" />
      <h1>이번 주 당첨번호</h1>
      <div className="balls">
        <img src={`/balls/${ltCur.ball1}.svg`} />
        <img src={`/balls/${ltCur.ball2}.svg`} />
        <img src={`/balls/${ltCur.ball3}.svg`} />
        <img src={`/balls/${ltCur.ball4}.svg`} />
        <img src={`/balls/${ltCur.ball5}.svg`} />
        <img src={`/balls/${ltCur.ball6}.svg`} />
        <img className="plus" src={"/plus.svg"} />
        <img src={`/balls/${ltCur.ballbnus}.svg`} />
      </div>
      <style jsx>{`
        h1 {
          align-items: center;
          max-width: 500px;
          max-height: 50px;
        }
        img {
          max-width: 50px;
          max-height: 50px;
          align-items: center;
        }
        .plus {
          width: 10px;
          height: 10px;
          margin-top: 20px;
        }
        div .balls {
          display: flex;
          gap: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
