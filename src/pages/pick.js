import Seo from "../components/Seo";
import { useState } from "react";

export default function Pick() {
	let numbers = [...Array(45).keys()].map((key) => key + 1);
	const [picks, setpicks] = useState([]);
	const [containpicks, setContpicks] = useState([]);
	const [exceptpicks, setExpicks] = useState([]);
	var lotto = [];

	while (lotto.length < 6) {
		var num = parseInt(Math.random() * 45 + 1);
		if (lotto.indexOf(num) == -1) {
			lotto.push(num);
		}
	}
	function addContain(e) {
		// var bodyTag = document.getElementByName("colorCont");
		// bodyTag.style.color = gray;
		const cPick = e.target.name;
		if (containpicks.indexOf(cPick) == -1) {
			setContpicks((containpicks) => [...containpicks, e.target.name]);
			console.log(e, containpicks);
		} else {
			setContpicks(containpicks.filter((item) => item !== cPick));
		}
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
					<img
						name={ball}
						onClick={addContain}
						key={idx}
						src={`/balls/${ball}.svg`}
					/>
				))}
			</div>
			<h1 className="p-4 text-md text-center font-medium">제외 번호</h1>
			<div className="max-w-md mx-auto flex flex-wrap place-content-center space-x-1">
				{numbers.map((ball, idx) => (
					<img
						name={ball}
						onClick={addContain}
						key={idx}
						src={`/balls/${ball}.svg`}
					/>
				))}
			</div>
			<div className="container text-center">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
					onClick={handleClick}
				>
					추첨 시작
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
				.picked {
					fill: gray;
				}
			`}</style>
		</div>
	);
}
