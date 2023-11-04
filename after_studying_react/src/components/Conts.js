import Items from "./Items.js";
import PrintContTitleYear from "./PrintContTitleYear.js";
import "./Css/Conts.css";

export default function Conts({
  conts,
  selected,
  isSelectAllYear,
  defaultCount,
}) {
  const contsList = getContsList(
    conts,
    selected,
    isSelectAllYear,
    defaultCount
  );

  return <div className="area-conts">{contsList}</div>;
}

function getContsList(conts, selected, isSelectAllYear, defaultCount) {
  const contsList = [];

  for (let i = 0; i < conts.length; i++) {
    if (isContMustShow(conts[i], selected, isSelectAllYear)) {
      contsList.push(
        <ul key={i}>
          <div className="wrap-cont">
            <PrintContTitleYear year={conts[i].year} />
            <Items
              items={conts[i].items}
              defaultCount={defaultCount}
              isSelectAllYear={isSelectAllYear}
            />
          </div>
        </ul>
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
