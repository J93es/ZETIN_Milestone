import { useState } from "react";
import Item from "./Item.js";
import MoreBtnCntl from "./MoreBtnCntl.js";
import PrintContTitleYear from "./PrintContTitleYear.js";
import "./Css/Cont.css";

export default function Cont({ cont, defaultCount, isSelectAllYear }) {
  const [expended, setExpended] = useState(false);
  const itemList = getItemList(expended, isSelectAllYear, defaultCount, cont);
  const isMoreBtnHide = getIsMoreBtnHide(
    isSelectAllYear,
    defaultCount,
    cont.items.length
  );

  return (
    <ul>
      <div className="wrap-cont">
        <PrintContTitleYear year={cont.year} />

        <div className="area-item">
          {itemList}

          <MoreBtnCntl
            expended={expended}
            setExpended={setExpended}
            isHide={isMoreBtnHide}
          />
        </div>
      </div>
    </ul>
  );
}

function getItemList(expended, isSelectAllYear, defaultCount, cont) {
  const itemList = [];
  const showLen = getShowLen(
    expended,
    isSelectAllYear,
    defaultCount,
    cont.items.length
  );

  for (let i = 0; i < showLen; i++) {
    itemList.push(<Item item={cont.items[i]} key={i} />);
  }

  return itemList;
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
