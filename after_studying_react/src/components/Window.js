import { useMemo } from "react";
import Cont from "./Cont.js";

function Window(props) {
  const { selected, conts, isSelectAllYear, defaultCount } = props;

  const contList = useMemo(
    () => getContList(selected, conts, isSelectAllYear, defaultCount),
    [selected, conts, isSelectAllYear, defaultCount]
  );

  return <div className="area-cont">{contList}</div>;
}

function getContList(selected, conts, isSelectAllYear, defaultCount) {
  const contList = [];

  for (let i = 0; i < conts.length; i++) {
    if (isContMustShow(isSelectAllYear, selected, conts[i])) {
      contList.push(
        <Cont
          cont={conts[i]}
          defaultCount={defaultCount}
          isSelectAllYear={isSelectAllYear}
          key={i}
        />
      );
    }
  }

  return contList;
}

function isContMustShow(isSelectAllYear, selected, cont) {
  if (isSelectAllYear) {
    return true;
  }
  if (String(selected) === String(cont.year)) {
    return true;
  }

  return false;
}

export default Window;
