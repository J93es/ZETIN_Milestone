import PrintInfoTitle from "./PrintInfoTitle.js";
import PrintInfoText from "./PrintInfoText.js";
import "./Css/Info.css";

export default function Info({ info }) {
  return (
    <div className="wrap-info">
      <PrintInfoTitle info={info} />
      <PrintInfoText info={info} />
    </div>
  );
}
