import { Link } from "react-router-dom";
import { starterPackProps } from "../../types/Seudeume.ts";

function StarterPack({
  mainTitle,
  comment,
  middleTitle1,
  middleDescription1,
  middleTitle2,
  middleDescription2,
}: starterPackProps) {
  return (
    <div className="w-125 h-130 rounded-30 bg-white ">
      {/* 제목 */}
      <p className="flex items-center justify-center mt-8 text-black text-2xl font-bold leading-normal">
        {mainTitle}
      </p>
      <div className="flex items-center mt-5 justify-center">
        {/* 코멘트 */}
        <div className="flex items-center justify-center w-50 h-10 rounded-30 bg-main-color text-white">
          {comment}
        </div>
      </div>

      {/* 상품설명 */}
      <div className="flex items-center px-12 pt-6">
        <p className="pr-5 text-black text-2xl font-bold leading-normal">01</p>
        <p className="p-3 text-black text-2xl font-bold leading-normal">{middleTitle1}</p>
      </div>
      <div className="pl-28 pr-12 ">
        <p className="flex items-center justify-center text-md font-light">{middleDescription1}</p>
        <Link to="/products">
          <button className="flex items-center justify-center w-14 h-7 mt-4 text-xs font-light rounded-5 bg-main-white border border-rounded hover:bg-gray-100">
            상품목록
          </button>
        </Link>
      </div>

      <div className="flex items-center px-12 pt-8">
        <p className="pr-5 text-black text-2xl font-bold leading-normal">02</p>
        <p className="p-3 text-black text-2xl font-bold leading-normal">{middleTitle2}</p>
      </div>
      <div className="pl-28 pr-12 ">
        <p className="flex items-center justify-center text-md font-light">{middleDescription2}</p>
        <Link to="/products">
          <button className="flex items-center justify-center w-14 h-7 mt-4 text-xs font-light rounded-5 bg-main-white border border-rounded hover:bg-gray-100">
            상품목록
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StarterPack;
