import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
	const lottohist = require("../../public/lotto_hist.json"); //https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=1034
	let last = lottohist.length - 1;
	let ltCur = lottohist[last];
	const sorted_hist = Object.entries(lottohist.slice(-9, -1)).sort(
		(a, b) => a["drwNo"] - b["drwNo"]
	);
	// useEffect(() => {
	// }, []);

	return (
		<div className="max-w-md max-h-md mx-auto">
			<Seo title="Home" />
			<h1 className="p-4 text-md sm:text-base text-center font-medium">
				{ltCur.drwNo}회 당첨번호 ({ltCur.drwNoDate})
			</h1>
			<div className="max-w-md flex place-content-center space-x-1">
				<h1 className="p-4 text-md text-center font-medium">{ltCur.drwNo}</h1>
				<img className="ball-img flex-1" src={`/balls/${ltCur.drwtNo1}.svg`} />
				<img className="ball-img flex-1" src={`/balls/${ltCur.drwtNo2}.svg`} />
				<img className="ball-img flex-1" src={`/balls/${ltCur.drwtNo3}.svg`} />
				<img className="ball-img flex-1" src={`/balls/${ltCur.drwtNo4}.svg`} />
				<img className="ball-img flex-1" src={`/balls/${ltCur.drwtNo5}.svg`} />
				<img className="ball-img flex-1" src={`/balls/${ltCur.drwtNo6}.svg`} />
				<img className="ball-img flex-1" src={"/plus.svg"} />
				<img className="ball-img flex-1" src={`/balls/${ltCur.bnusNo}.svg`} />
			</div>
			<h1 className="p-4 text-md text-center font-medium">
				당첨번호 내역 (~{ltCur.drwNo - 1}회)
			</h1>
			{sorted_hist.map((lt, idx) => (
				<div key={idx} className="max-w-md flex place-content-center space-x-1">
					<h1 className="p-4 text-xs sm:text-md xs:text-xs text-center font-medium">
						{lt[1].drwNo}
					</h1>
					<img
						className="ball-img flex-1"
						src={`/balls/${lt[1].drwtNo1}.svg`}
					/>
					<img
						className="ball-img flex-1"
						src={`/balls/${lt[1].drwtNo2}.svg`}
					/>
					<img
						className="ball-img flex-1"
						src={`/balls/${lt[1].drwtNo3}.svg`}
					/>
					<img
						className="ball-img flex-1"
						src={`/balls/${lt[1].drwtNo4}.svg`}
					/>
					<img
						className="ball-img flex-1"
						src={`/balls/${lt[1].drwtNo5}.svg`}
					/>
					<img
						className="ball-img flex-1"
						src={`/balls/${lt[1].drwtNo6}.svg`}
					/>
					<img className="ball-img flex-1" src={"/plus.svg"} />
					<img className="ball-img flex-1" src={`/balls/${lt[1].bnusNo}.svg`} />
				</div>
			))}
			<style jsx>{`
				div {
					flex-flex-1: 1;
				}

				.ball-img {
					max-width: 8%;
				}

				img {
					max-width: 50px;
					max-height: 50px;
				}
			`}</style>
		</div>
	);
}
