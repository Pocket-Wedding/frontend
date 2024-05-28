import { Link } from "react-router-dom";
import headerLogo from "../assets/headerLogo.svg";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-center w-140 h-22 bg-main-color broder ">
        <img src={headerLogo} alt="headerLogo" />
      </div>
      <div className="flex justify-center w-140 h-12">
        <nav className="flex w-140 h-12 items-center justify-center border-b-2 ">
          <Link
            to="/"
            className="flex justify-center w-20 text-black text-sm font-bold mx-2 hover:border-b-2 mt-4 pb-3 border-b-main-color"
          >
            홈
          </Link>

          <Link
            to="/weddinghalls"
            className="flex justify-center w-22 text-black text-sm font-bold mx-3 hover:border-b-2 mt-4 pb-3 border-b-main-color"
          >
            스몰 웨딩홀
          </Link>

          <Link
            to="/Seudeume"
            className="flex justify-center w-22 text-black text-sm font-bold mx-3 hover:border-b-2 mt-4 pb-3 border-b-main-color"
          >
            스드메
          </Link>

          <Link
            to="/invitations"
            className="flex justify-center w-29 text-black text-sm font-bold mx-3 hover:border-b-2 mt-4 pb-3 border-b-main-color"
          >
            청첩장 & 축의금
          </Link>

          <Link
            to="/online"
            className="flex justify-center w-23 text-black text-sm font-bold mx-3 hover:border-b-2 mt-4 pb-3 border-b-main-color"
          >
            온라인 웨딩
          </Link>

          <Link
            to="/events"
            className="flex justify-center w-22 text-black text-sm font-bold mx-2 hover:border-b-2 mt-4 pb-3 border-b-main-color"
          >
            이벤트
          </Link>
        </nav>
      </div>
    </div>
  );
}
export default Header;
