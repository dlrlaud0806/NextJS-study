import Head from "next/head";

export default function Seo({ title }) {
  const myTitle = `${title} | by Next.js`;
  return (
    <Head>
      <title>{myTitle}</title>
    </Head>
  );
}
