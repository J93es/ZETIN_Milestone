import "./Css/MoreBtnCntl.css";
import { Button } from "react-bootstrap";

const MoreBtnCntl = (props) => {
  const { expended, onClick } = props;

  const handleClick = (e) => {
    if (typeof onClick === "function") {
      onClick(e);
    }
  };

  if (expended) {
    return getMoreBtn("숨기기", handleClick);
  }

  return getMoreBtn("더보기", handleClick);
};

function getMoreBtn(status, handleClick) {
  return (
    <div className="wrap-item">
      <div />
      <Button type="button" className="btn btn-info" onClick={handleClick}>
        <span className="btn-title">{status}</span>
      </Button>
    </div>
  );
}

export default MoreBtnCntl;
