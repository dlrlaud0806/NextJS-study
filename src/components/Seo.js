import Head from "next/head";

export default function Seo({ title }) {
  const myTitle = `${title} | Lotto Clover`;
  return (
    <Head>
      <title>{myTitle}</title>
    </Head>
  );
}
