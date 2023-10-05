import { useMemo } from "react";
import Info from "./Info.js";
import PrintItemTitleMonth from "./PrintItemTitleMonth.js";

function Item(props) {
  const { item } = props;

  const infoList = useMemo(() => getInfoList(item), [item]);

  return (
    <ul className="each-item">
      <div className="wrap-item">
        <PrintItemTitleMonth month={item.month} />

        <div className="area-info">{infoList}</div>
      </div>
    </ul>
  );
}

function getInfoList(item) {
  const infoList = [];

  for (let i = 0; i < item.infoes.length; i++) {
    infoList.push(<Info info={item.infoes[i]} key={i} />);
  }
  return infoList;
}

export default Item;
