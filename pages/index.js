import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const lotto_round = "800";
export async function getServerSideProps() {
  const data = await (
    await fetch(
      `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${lotto_round}`
    )
  ).json();

  return { props: { data } };
}

export default function Home({ data }) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    console.log("asdfasdf");
    console.log(data);
  }, []);

  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
    </div>
  );
}
