import { useState, useMemo } from "react";
import Conts from "./components/Conts.js";
import YearSelectBtnCntl from "./components/YearSelectBtnCntl.js";
import "./styles/css/Milestone.css";
import "./styles/css/fonts.css";

export default function Milestone(props) {
  const { dataFileNames } = useMemo(() => {
    return getMilestoneData();
  }, []);

  const conts = useMemo(() => {
    return getConts(dataFileNames);
  }, [dataFileNames]);

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
        isSelectAllYear={isSelectAllYear}
      />
    </div>
  );
}

function getMilestoneData() {
  return require("./data/index.json");
}

function getConts(dataFileNames) {
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
