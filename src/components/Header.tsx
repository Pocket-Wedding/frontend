import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../assets/headerLogo.svg";

function Header() {
  const [val, setVal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const url = location.pathname;
    if (url.includes("events")) {
      setVal(6);
    } else if (url.includes("online")) {
      setVal(5);
    } else if (url.includes("Invitation")) {
      setVal(4);
    } else if (url.includes("Seudeume")) {
      setVal(3);
    } else if (url.includes("weddinghalls")) {
      setVal(2);
    } else {
      setVal(1);
    }
  }, [location]);

  const baseLinkClass =
    "flex justify-center text-black text-sm font-bold mt-4 pb-3 border-b-main-color hover:border-b-deep-gray hover:border-b-2";

  return (
    <div>
      <div className="flex items-center justify-center w-140 h-22 bg-main-color border">
        <img src={headerLogo} alt="headerLogo" />
      </div>
      <div className="flex justify-center w-140 h-12">
        <nav className="flex w-140 h-12 items-center justify-center border-b-2">
          <Link to="/" className={`${baseLinkClass} w-20 mx-2 ${val === 1 ? "border-b-3 " : ""}`}>
            홈
          </Link>

          <Link
            to="/weddinghalls"
            className={`${baseLinkClass} w-22 mx-3 ${val === 2 ? "border-b-3" : ""}`}
          >
            스몰 웨딩홀
          </Link>

          <Link
            to="/Seudeume"
            className={`${baseLinkClass} w-22 mx-3 ${val === 3 ? "border-b-3" : ""}`}
          >
            스드메
          </Link>

          <Link
            to="/Invitation"
            className={`${baseLinkClass} w-29 mx-3 ${val === 4 ? "border-b-3" : ""}`}
          >
            청첩장 & 축의금
          </Link>

          <Link
            to="/online"
            className={`${baseLinkClass} w-23 mx-3 ${val === 5 ? "border-b-3" : ""}`}
          >
            온라인 웨딩
          </Link>

          <Link
            to="/events"
            className={`${baseLinkClass} w-22 mx-2 ${val === 6 ? "border-b-3" : ""}`}
          >
            이벤트
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
