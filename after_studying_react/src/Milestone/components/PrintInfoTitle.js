import "../styles/css/PrintInfoTitle.css";

export default function PrintInfoTitle({ info }) {
  const infoTitleList = getInfoTitleList(info);

  return <div className="area-info-title">{infoTitleList}</div>;
}

function getInfoTitleList(info) {
  if (info.titles.length === 0) {
    return getInfoTitle("", -1);
  }

  const infotitleList = [];

  for (let i = 0; i < info.titles.length; i++) {
    infotitleList.push(getInfoTitle(info.titles[i], i));
  }

  return infotitleList;
}

function getInfoTitle(string, key) {
  return (
    <div className="wrap-info-title" key={key}>
      <div className="info-title">{string}</div>
    </div>
  );
}
