import { useState, useMemo, useEffect } from "react";
import Item from "./Item.js";
import MoreBtnCntl from "./MoreBtnCntl.js";
import PrintContTitleYear from "./PrintContTitleYear.js";

function Cont(props) {
  const { cont, defaultCount, isSelectAllYear } = props;
  const [expended, handleExpended] = useState(false);

  const itemList = useMemo(
    () => getItemList(expended, isSelectAllYear, defaultCount, cont),
    [expended, isSelectAllYear, defaultCount, cont]
  );

  const moreBtn = useMemo(
    () => getMoreBtn(isSelectAllYear, expended, handleExpended),
    [isSelectAllYear, expended]
  );

  useEffect(() => {
    return () => {
      if (!isSelectAllYear && expended) {
        handleExpended(!expended);
      }
    };
  }, [isSelectAllYear, expended]);

  return (
    <ul className="each-cont">
      <div className="wrap-cont">
        <PrintContTitleYear year={cont.year} />

        <div className="area-item">
          {itemList}

          {moreBtn}
        </div>
      </div>
    </ul>
  );
}

function getItemList(expended, isSelectAllYear, defaultCount, cont) {
  const itemList = [];
  const showLen =
    !expended && isSelectAllYear ? defaultCount : cont.items.length;

  for (let i = 0; i < showLen; i++) {
    itemList.push(<Item item={cont.items[i]} key={i} />);
  }
  return itemList;
}

function getMoreBtn(isSelectAllYear, expended, handleExpended) {
  const moreBtn = isSelectAllYear ? (
    <MoreBtnCntl
      expended={expended}
      onClick={() => handleExpended(!expended)}
    />
  ) : (
    []
  );

  return moreBtn;
}

export default Cont;
