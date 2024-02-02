import PrintInfoTitle from "./PrintInfoTitle.js";
import PrintInfoText from "./PrintInfoText.js";
import "../styles/css/Infoes.css";

export default function Infoes({ infoes }) {
  const infoesList = getInfoesList(infoes);

  return <div className="area-infoes">{infoesList}</div>;
}

function getInfoesList(infoes) {
  const infoesList = [];

  for (let i = 0; i < infoes.length; i++) {
    infoesList.push(
      <div className="wrap-info" key={i}>
        <PrintInfoTitle info={infoes[i]} />
        <PrintInfoText info={infoes[i]} />
      </div>
    );
  }

  return infoesList;
}
