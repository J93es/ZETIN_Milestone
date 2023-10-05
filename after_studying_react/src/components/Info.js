import { useMemo } from "react";

function Info(props) {
  const { info } = props;

  const infoTextList = useMemo(() => getInfoTextList(info), [info]);

  return (
    <ul className="each-info">
      <div className="wrap-info">
        <div className="info-title">{info.title}</div>

        <div className="info-text">{infoTextList}</div>
      </div>
    </ul>
  );
}

function getInfoTextList(info) {
  const infoTextList = [];

  for (let i = 0; i < info.text.length; i++) {
    infoTextList.push(<div key={i}>{info.text[i]}</div>);
  }
  return infoTextList;
}

export default Info;
