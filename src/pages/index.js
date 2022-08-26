import { useEffect, useState } from "react";
import Seo from "../components/Seo";

// const lotto_round = "800";
// export async function getServerSideProps() {
//   try {
//     const data = await (
//       await fetch(
//         `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${lotto_round}`
//       )
//     ).json();

//     return { props: { data } };
//   } catch (e) {
//     console.log("Error", e);
//     return { props: {} };
//   }
// }

// function Profile() {
//   const [data, setData] = useState(null)
//   const [isLoading, setLoading] = useState(false)

//   useEffect(() => {
//     setLoading(true)
//     fetch('/api/profile-data')
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data)
//         setLoading(false)
//       })
//   }, [])

//   if (isLoading) return <p>Loading...</p>
//   if (!data) return <p>No profile data</p>

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.bio}</p>
//     </div>
//   )
// }
// {data}
export default function Home() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    console.log("asdfasdf");
    // console.log(data);
  }, []);

  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
    </div>
  );
}
