import { useMemo } from "react";
import Cont from "./Cont.js";

function Window(props) {
  const { selected, conts, isSelectAllYear } = props;

  const contList = useMemo(
    () => getContList(selected, conts, isSelectAllYear),
    [conts, isSelectAllYear, selected]
  );

  return <div className="area-cont">{contList}</div>;
}

function getContList(selected, conts, isSelectAllYear) {
  const contList = [];

  for (let i = 0; i < conts.length; i++) {
    if (isSelectAllYear || Number(selected) === conts[i].year) {
      contList.push(
        <Cont
          cont={conts[i]}
          defaultCount={1}
          isSelectAllYear={isSelectAllYear}
          key={i}
        />
      );
    }
  }
  return contList;
}

export default Window;
