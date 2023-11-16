import { useState } from "react";
import Conts from "./components/Conts.js";
import YearSelectBtnCntl from "./components/YearSelectBtnCntl.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/css/Milestone.css";
import "./styles/css/fonts.css";

export default function Milestone(props) {
  const { defaultCount, dataFileNames, dataPath } = getIndexData();
  const conts = getConts(dataFileNames, dataPath);
  const allYearValue = "all-year";
  const [selected, setSelect] = useState(allYearValue);
  const isSelectAllYear = getIsSelectAllYear(selected, allYearValue);

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

function getIndexData() {
  return require("./data/index.json");
}

function getConts(dataFileNames, dataPath) {
  const conts = dataFileNames.map((fileName) => {
    return require("./data/" + fileName);
  });

  return conts;
}

function getIsSelectAllYear(selected, allYearValue) {
  if (String(selected) === String(allYearValue)) {
    return true;
  }
  return false;
}
