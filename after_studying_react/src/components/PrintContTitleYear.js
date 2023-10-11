import "./Css/PrintContTitleYear.css";

function PrintContTitleYear(props) {
  const { year } = props;

  return (
    <div className="cont-title-year">
      <strong>{year}</strong>
    </div>
  );
}

export default PrintContTitleYear;
