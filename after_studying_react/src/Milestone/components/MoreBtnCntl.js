import { useEffect, useCallback } from "react";
import "../styles/css/MoreBtnCntl.css";
import { Button } from "react-bootstrap";

export default function MoreBtnCntl({ expended, setExpended, isHide }) {
  const handleExpended = useCallback(
    (e) => {
      if (typeof setExpended === "function") {
        setExpended(e);
      }
    },
    [setExpended]
  );

  useEffect(() => {
    handleExpended(false);
  }, [isHide, handleExpended]);

  if (isHide) {
    return <></>;
  }

  if (expended) {
    return getMoreBtn("숨기기", () => handleExpended(!expended));
  }
  return getMoreBtn("더보기", () => handleExpended(!expended));
}

function getMoreBtn(moreBtnText, handleExpended) {
  return (
    <Button type="button" className="btn btn-dark" onClick={handleExpended}>
      <span className="more-btn-text">{moreBtnText}</span>
    </Button>
  );
}
