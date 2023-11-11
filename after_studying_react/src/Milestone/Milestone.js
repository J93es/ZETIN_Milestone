import milestoneData from "./data/milestoneData.json";
import { useState } from "react";
import Conts from "./components/Conts.js";
import YearSelectBtnCntl from "./components/YearSelectBtnCntl.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/css/Milestone.css";
import "./styles/css/fonts.css";

export default function Milestone(props) {
  const conts = milestoneData;
  const allYearValue = "all-year";
  const [selected, setSelect] = useState(allYearValue);
  const isSelectAllYear = getIsSelectAllYear(selected, allYearValue);
  const defaultCount = getDefaultCount();

  return (
    <div className="area-milestone">
      <YearSelectBtnCntl
        conts={conts}
        onChange={setSelect}
        allYearValue={allYearValue}
        value={selected}
      />

      <Conts
        selected={selected}
        conts={conts}
        defaultCount={defaultCount}
        isSelectAllYear={isSelectAllYear}
      />
    </div>
  );
}

function getDefaultCount() {
  return 2;
}

function getIsSelectAllYear(selected, allYearValue) {
  if (String(selected) === String(allYearValue)) {
    return true;
  }
  return false;
}
