function PrintItemTitleMonth(props) {
  const { month } = props;

  return (
    <div className="item-title-month">
      <em>{month}</em>
    </div>
  );
}

export default PrintItemTitleMonth;
