import Seo from "../components/Seo";
import { useState } from "react";

export default function Pick() {
  let numbers = [...Array(45).keys()].map((key) => key + 1);
  const [picks, setpicks] = useState([]);
  var lotto = [];

  while (lotto.length < 6) {
    var num = parseInt(Math.random() * 45 + 1);
    if (lotto.indexOf(num) == -1) {
      lotto.push(num);
    }
  }
  function changeColor() {
    var bodyTag = document.getElementById("colorCont");
    bodyTag.style.color = gray;
  }

  function handleClick() {
    setpicks(lotto);
  }

  return (
    <div>
      <Seo title="Pick" />
      <h1 className="p-4 text-md text-center font-medium">포함 번호</h1>
      <div className="max-w-md mx-auto flex flex-wrap place-content-center space-x-1">
        {numbers.map((ball, idx) => (
          <img onClick={changeColor} key={idx} src={`/balls/${ball}.svg`} />
        ))}
      </div>
      <h1 className="p-4 text-md text-center font-medium">제외 번호</h1>
      <div className="max-w-md mx-auto flex flex-wrap place-content-center space-x-1">
        {numbers.map((ball, idx) => (
          <img key={idx} src={`/balls/${ball}.svg`} />
        ))}
      </div>
      <div className="container">
        <button className="text-center" onClick={handleClick}>
          {" "}
          추첨 시작{" "}
        </button>
        <div className="max-w-md mx-auto flex flex-wrap place-content-center space-x-1"></div>
        {picks.map((ball, idx) => (
          <img key={idx} src={`/balls/${ball}.svg`} />
        ))}
      </div>
      <style jsx>{`
        img {
          width: 9%;
          margin-bottom: 5px;
        }
        .active {
          color: gray;
        }
      `}</style>
    </div>
  );
}
