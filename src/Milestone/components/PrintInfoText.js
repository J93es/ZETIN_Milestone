import "../styles/css/PrintInfoText.css";

export default function PrintPrintInfoText({ info }) {
  const infoTextList = getInfoTextList(info);

  return <div className="area-info-text">{infoTextList}</div>;
}

function getInfoTextList(info) {
  if (info.texts.length === 0) {
    return getInfoText("", -1);
  }

  const infoTextList = [];

  for (let i = 0; i < info.texts.length; i++) {
    infoTextList.push(getInfoText(info.texts[i], i));
  }

  return infoTextList;
}

function getInfoText(string, key) {
  return (
    <div className="wrap-info-text" key={key}>
      <div className="info-text">{string}</div>
    </div>
  );
}
