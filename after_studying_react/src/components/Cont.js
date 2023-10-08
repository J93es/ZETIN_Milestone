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
    () =>
      getMoreBtn(
        isSelectAllYear,
        expended,
        defaultCount,
        cont.items.length,
        handleExpended
      ),
    [expended, isSelectAllYear, defaultCount, cont]
  );

  useEffect(() => {
    return () => {
      handleExpended(false);
    };
  }, [isSelectAllYear]);

  return (
    <ul>
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
  if (expended) {
    return itemsLength;
  }
  if (defaultCount > itemsLength) {
    return itemsLength;
  }

  return defaultCount;
}

function getMoreBtn(
  isSelectAllYear,
  expended,
  defaultCount,
  itemsLength,
  handleExpended
) {
  if (!isSelectAllYear) {
    return [];
  }
  if (defaultCount > itemsLength) {
    return [];
  }

  return (
    <MoreBtnCntl
      expended={expended}
      onClick={() => handleExpended(!expended)}
    />
  );
}

export default Cont;
