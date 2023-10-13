import "./Css/PrintItemTitleMonth.css";

export default function PrintItemTitleMonth({ month }) {
  return (
    <div className="item-title-month">
      <em>{month}</em>
    </div>
  );
}
