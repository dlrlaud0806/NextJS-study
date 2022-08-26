import Head from "next/head";

export default function Seo({ title }) {
	const myTitle = `${title} | Next Movies`;
	return (
		<Head>
			<title>{myTitle}</title>
		</Head>
	);
}
