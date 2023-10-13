import Info from "./Info.js";
import PrintItemTitleMonth from "./PrintItemTitleMonth.js";
import "./Css/Item.css";

export default function Item({ item }) {
  const infoList = getInfoList(item);

  return (
    <div className="wrap-item">
      <PrintItemTitleMonth month={item.month} />

      <div className="area-info">{infoList}</div>
    </div>
  );
}

function getInfoList(item) {
  const infoList = [];

  for (let i = 0; i < item.infoes.length; i++) {
    infoList.push(<Info info={item.infoes[i]} key={i} />);
  }

  return infoList;
}
