import Seo from "../components/Seo";
export default function Pick() {
	let numbers = [...Array(45).keys()].map((key) => key + 1);
	let pick = [];
	return (
		<div>
			<Seo title="Pick" />
			<h1 className="p-4 text-md text-center font-medium">포함 번호</h1>
			<div className="max-w-md mx-auto flex flex-wrap place-content-center space-x-1">
				{numbers.map((ball, idx) => (
					<img src={`/balls/${ball}.svg`} />
				))}
			</div>
			<h1 className="p-4 text-md text-center font-medium">제외 번호</h1>
			<div className="max-w-md mx-auto flex flex-wrap place-content-center space-x-1">
				{numbers.map((ball, idx) => (
					<img src={`/balls/${ball}.svg`} />
				))}
			</div>
			<div className="container">
				<h1 className="text-md text-center"> [버튼] 추첨 시작! </h1>
				<div className="max-w-md mx-auto flex flex-wrap place-content-center space-x-1"></div>
				{pick.map((ball, idx) => (
					<img src={`/balls/${ball}.svg`} />
				))}
			</div>
			<style jsx>{`
				img {
					width: 9%;
					margin-bottom: 5px;
				}
			`}</style>
		</div>
	);
}
