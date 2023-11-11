import "../styles/css/YearSelectBtnCntl.css";
import { FormSelect } from "react-bootstrap";

export default function YearSelectBtnCntl({
  conts,
  onChange,
  allYearValue,
  value,
}) {
  const handleSelect = (e) => {
    if (typeof onChange === "function") {
      onChange(e.target.value);
    }
  };

  const yearOptList = getYearOptList(conts, allYearValue);

  return (
    <FormSelect id="yearSelectBtn" onChange={handleSelect} value={value}>
      {yearOptList}
    </FormSelect>
  );
}

function getYearOptList(conts, allYearValue) {
  const yearOptList = [
    <option value={allYearValue} key={-1}>
      모든 연도
    </option>,
  ];

  for (let i = 0; i < conts.length; i++) {
    yearOptList.push(
      <option value={conts[i].year} key={i}>
        {conts[i].year}
      </option>
    );
  }

  return yearOptList;
}
