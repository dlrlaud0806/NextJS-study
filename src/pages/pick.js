import Seo from "../components/Seo";
import { useState } from "react";

export default function Pick() {
  let numbers = [...Array(46).keys()];
  let pickednumbers = Array(46).fill(false);
  const [picks, setpicks] = useState([]);
  const [containpicks, setContpicks] = useState([]);
  const [exceptpicks, setExpicks] = useState([]);
  const [picked, setpicked] = useState(pickednumbers);

  function addContain(e) {
    const cPick = e.target.name;
    if (exceptpicks.indexOf(cPick) != -1) {
      alert("에러 : 제외번호에 등록된 숫자입니다.");
      return;
    } else if (containpicks.length == 6) {
      alert("에러 : 포함 번호가 6개 이상입니다.");
      return;
    } else if (containpicks.indexOf(cPick) == -1) {
      setContpicks((containpicks) => [...containpicks, e.target.name]);
    } else {
      setContpicks(containpicks.filter((item) => item !== cPick));
    }
    handlePicked(cPick);
  }

  function addExcept(e) {
    const cPick = e.target.name;
    if (containpicks.indexOf(cPick) != -1) {
      alert("에러 : 포함번호에 등록된 숫자입니다.");
      return;
    } else if (exceptpicks.indexOf(cPick) == -1) {
      setExpicks((exceptpicks) => [...exceptpicks, e.target.name]);
    } else {
      setExpicks(exceptpicks.filter((item) => item !== cPick));
    }
    handlePicked(cPick);
  }

  function handlePicked(cPick) {
    let tempPick = [...picked];
    tempPick[cPick] = !tempPick[cPick];

    setpicked(tempPick);
  }

  function handleClick() {
    var lotto = containpicks || [];

    while (lotto.length < 6) {
      var num = Math.floor(Math.random() * 45 + 1);
      if (lotto.indexOf(num) == -1 && exceptpicks.indexOf(num) == -1) {
        lotto.push(num);
      }
    }
    setpicks(
      lotto.sort(function (a, b) {
        return a - b;
      })
    );
  }

  return (
    <div>
      <Seo title="Pick" />
      <h1 className="p-4 text-md text-center font-medium">포함 번호</h1>
      <div className="max-w-md mx-auto flex flex-wrap place-content-center space-x-1">
        {numbers.slice(1).map((ball, idx) => (
          <img
            className="picked"
            name={ball}
            onClick={addContain}
            key={idx}
            src={picked[ball] ? "/balls/checked.svg" : `/balls/${ball}.svg`}
          />
        ))}
      </div>
      <h1 className="p-4 text-md text-center font-medium">제외 번호</h1>
      <div className="max-w-md mx-auto flex flex-wrap place-content-center space-x-1">
        {numbers.slice(1).map((ball, idx) => (
          <img
            name={ball}
            onClick={addExcept}
            key={idx}
            src={picked[ball] ? "/balls/checked.svg" : `/balls/${ball}.svg`}
          />
        ))}
      </div>
      <div className="max-w-md mx-auto container text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-smfont-bold py-1 px-2 rounded space-y-2"
          onClick={handleClick}
        >
          추첨
        </button>
        <div className="max-w-md mx-auto flex flex-wrap place-content-center space-x-1">
          {picks.map((ball, idx) => (
            <img key={idx} src={`/balls/${ball}.svg`} />
          ))}
        </div>
      </div>
      <style jsx>{`
        img {
          width: 9%;
          margin-bottom: 5px;
        }
        button {
          width: 20%;
        }
      `}</style>
    </div>
  );
}
