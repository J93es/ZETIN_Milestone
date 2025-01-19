import Items from "./Items.js";
import PrintContTitleYear from "./PrintContTitleYear.js";
import "../styles/css/Conts.css";

export default function Conts({ conts, selected, isSelectAllYear }) {
  const contsList = getContsList(conts, selected, isSelectAllYear);

  return <ul className="area-conts">{contsList}</ul>;
}

function getContsList(conts, selected, isSelectAllYear) {
  const contsList = [];

  for (let i = 0; i < conts.length; i++) {
    if (isContMustShow(conts[i], selected, isSelectAllYear)) {
      contsList.push(
        <li key={i}>
          <div className="wrap-cont">
            <PrintContTitleYear year={conts[i].year} />
            <Items items={conts[i].items} />
          </div>
        </li>
      );
    }
  }

  return contsList;
}

function isContMustShow(cont, selected, isSelectAllYear) {
  if (isSelectAllYear) {
    return true;
  }
  if (String(selected) === String(cont.year)) {
    return true;
  }

  return false;
}
