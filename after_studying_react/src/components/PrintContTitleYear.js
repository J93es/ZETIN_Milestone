function PrintContTitleYear(props) {
  const { year } = props;

  return (
    <div className="cont-title-year">
      <strong>{year}년</strong>
    </div>
  );
}

export default PrintContTitleYear;
