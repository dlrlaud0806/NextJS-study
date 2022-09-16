import Seo from "../components/Seo";
export default function About() {
  const lottohist = require("../../public/lotto_hist.json");

  const lt_num_cnt = {};

  for (let lt of lottohist) {
    for (const key in lt) {
      if (key.substring(0, 6) == "drwtNo" || key.substring(0, 6) == "bnusNo") {
        lt_num_cnt[lt[key]] = lt_num_cnt[lt[key]]
          ? (lt_num_cnt[lt[key]] += 1)
          : 1;
      }
    }
  }

  const sortedball = Object.entries(lt_num_cnt).sort((a, b) =>
    b[1] - a[1] == 0 ? a[0] - b[0] : b[1] - a[1]
  );

  return (
    <div>
      <Seo title="About" />
      <h1 className="p-4 text-lg text-center font-medium">많이 당첨된 번호</h1>
      <div>
        {sortedball.map((ball, idx) => (
          <div
            key={idx}
            className="flex flex-row place-content-center space-x-2"
          >
            <img className="flex-1" src={`/balls/${ball[0]}.svg`} />
            <h1>{ball[1]}</h1>
          </div>
        ))}
      </div>
      <style jsx>{`
        img {
          max-width: 50px;
          max-height: 50px;
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
}
