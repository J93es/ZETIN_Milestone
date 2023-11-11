import { useState } from "react";
import Infoes from "./Infoes.js";
import MoreBtnCntl from "./MoreBtnCntl.js";
import PrintItemTitleMonth from "./PrintItemTitleMonth.js";
import "../styles/css/Items.css";

export default function Items({ items, defaultCount, isSelectAllYear }) {
  const [expended, setExpended] = useState(false);
  const isMoreBtnHide = getIsMoreBtnHide(
    isSelectAllYear,
    defaultCount,
    items.length
  );
  const itemsList = getItemsList(
    expended,
    isSelectAllYear,
    defaultCount,
    items
  );

  return (
    <div className="area-items">
      {itemsList}
      <MoreBtnCntl
        expended={expended}
        setExpended={setExpended}
        isHide={isMoreBtnHide}
      />
    </div>
  );
}

function getItemsList(expended, isSelectAllYear, defaultCount, items) {
  const itemsList = [];
  const showLen = getShowLen(
    expended,
    isSelectAllYear,
    defaultCount,
    items.length
  );

  for (let i = 0; i < showLen; i++) {
    itemsList.push(
      <div className="wrap-item" key={i}>
        <PrintItemTitleMonth month={items[i].month} />
        <Infoes infoes={items[i].infoes} />
      </div>
    );
  }

  return itemsList;
}

function getShowLen(expended, isSelectAllYear, defaultCount, itemsLength) {
  if (!isSelectAllYear) {
    return itemsLength;
  }
  if (defaultCount >= itemsLength) {
    return itemsLength;
  }
  if (expended) {
    return itemsLength;
  }

  return defaultCount;
}

function getIsMoreBtnHide(isSelectAllYear, defaultCount, itemsLength) {
  if (!isSelectAllYear) {
    return true;
  }
  if (defaultCount >= itemsLength) {
    return true;
  }

  return false;
}
