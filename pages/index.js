import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const lotto_round = "800";

export default function Home() {
	const [movies, setMovie] = useState([]);
	useEffect(() => {
		console.log("asdfasdf");
		async () => {
			try {
				const data = await fetch(
					`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${lotto_round}`
				).json();
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		};
	}, []);
	return (
		<div>
			<Seo title="Home" />
			<h1 className="active">Hello</h1>
		</div>
	);
}
