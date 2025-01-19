import Infoes from "./Infoes.js";
import PrintItemTitleMonth from "./PrintItemTitleMonth.js";
import "../styles/css/Items.css";

export default function Items({ items }) {
  const itemsList = items.map((item, i) => {
    return (
      <div className="wrap-item" key={i}>
        <PrintItemTitleMonth month={item.month} />
        <Infoes infoes={item.infoes} />
      </div>
    );
  });

  return <div className="area-items">{itemsList}</div>;
}
