import PrintInfoTitle from "./PrintInfoTitle.js";
import PrintInfoText from "./PrintInfoText.js";
import "./Css/Info.css";

function Info(props) {
  const { info } = props;

  return (
    <div className="wrap-info">
      <PrintInfoTitle info={info} />
      <PrintInfoText info={info} />
    </div>
  );
}

export default Info;
