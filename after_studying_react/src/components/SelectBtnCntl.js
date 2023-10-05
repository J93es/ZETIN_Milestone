import { useMemo } from "react";
import FormSelect from "react-bootstrap/FormSelect";

function SelectBtnCntl(props) {
  const { conts, onChange, value } = props;

  const handleSelect = (e) => {
    if (typeof onChange === "function") {
      onChange(e.target.value);
    }
  };

  const yearOptList = useMemo(() => getYearOptList(conts), [conts]);

  return (
    <FormSelect
      name="yearOption"
      className="yearOptionBtn"
      onChange={handleSelect}
      value={value}
    >
      {yearOptList}
    </FormSelect>
  );
}

function getYearOptList(conts) {
  const yearOptList = [
    <option value="all-year" key={0}>
      모든 연도
    </option>,
  ];

  for (let i = 0; i < conts.length; i++) {
    yearOptList.push(
      <option value={conts[i].year} key={i + 1}>
        {conts[i].year}년
      </option>
    );
  }

  return yearOptList;
}

export default SelectBtnCntl;
