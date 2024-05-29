import { Link } from "react-router-dom";
import { AnalysisProps } from "../../types/Seudeume.ts";
import AnalysisImg from "../../assets/AnalysisImg.svg";

function starterPack({ mainTitle, comment, type }: AnalysisProps) {
  const getPath = () => {
    switch (type) {
      case "STUDIO":
        return "/STUDIO";
      case "DRESS":
        return "/DRESS";
      case "MAKEUP":
        return "/MAKEUP";
      default:
        return "/products";
    }
  };
  return (
    <div className="flex flex-column w-125 h-36 bg-white ">
      {/* 제목 */}
      <div className="p-3 w-24 bg-main-color">
        <p className="flex items-center justify-center mt-2 text-white text-lg font-medium ">
          {mainTitle}
        </p>
        <p className="flex items-center justify-center mt-1 text-md text-white font-thin">{type}</p>
        <div className="flex items-center mt-5 justify-center">
          <Link
            to={getPath()}
            className="flex items-center justify-center w-12 h-7 rounded-md text-sm font-normal text-white font-light bg-light-blue hover:bg-deep-blue"
          >
            선택
          </Link>
        </div>
      </div>

      {/* 중앙 */}
      <div className="flex justify-start w-70 h-36 border-y border-main-color">
        <div className="p-5 text-md">{comment}</div>
      </div>
      {/* 우측 */}
      <div className="w-24 h-36 border border-main-color ">
        <div className="flex justify-center items-center p-6">
          <img src={AnalysisImg} alt="AnalysisImg" className="w-8 h-8 " />
        </div>
        <p className="flex items-center justify-center ">상품 분석</p>
      </div>
    </div>
  );
}

export default starterPack;
