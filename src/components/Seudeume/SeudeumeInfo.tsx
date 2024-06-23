import { useEffect } from "react";
import imgae32 from "../../assets/image32.png";
import imgae34 from "../../assets/image34.png";

const SeudeumeInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-140 h-full p-3">
      <p className="flex justify-center mt-20 text-black text-2xl font-bold">상품 정보</p>
      <div className="flex justify-center mt-5 text-black text-lg font-nomarl leading-normal">
        리허설_오전_특가 (토탈)
      </div>
      <div className="flex justify-center mt-6 text-gray-400 text-base font-nomarl leading-normal">
        원규스튜디오
      </div>
      <div className="flex justify-center mt-3 text-black text-base font-nomarl leading-normal">
        서울시 강남구
      </div>
      <div className="flex justify-center mt-14 text-black text-2xl font-bold leading-normal">
        구성 요약
      </div>
      <div className="flex justify-center mt-5 text-black text-base font-light leading-normal text-center leading-loose">
        앨범형 20P *1 <br />
        액자 20R *1 <br />
        [비수기첫타임] 12-2월/7-8월 ,첫타임: 10:30AM 촬영 <br />
        메이크업 및 헤어 포함 <br />
        드레스 3벌, 턱시도 1벌(제공) <br />
        원본/수정본 별도
      </div>
      <div className="flex flex-col items-center p-3">
        <img src={imgae32} alt="imgae32" className="flex items-center w-100 h-708 mt-12 mb-10" />
        <img src={imgae34} alt="imgae34" className="flex items-center w-100 h-708 mt-12 mb-10" />
      </div>
    </div>
  );
};

export default SeudeumeInfo;
