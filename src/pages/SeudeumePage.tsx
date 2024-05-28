import { Link } from "react-router-dom";
import Image1 from "../assets/Image1.png";
import StarterPack from "../components/Seudeume/StarterPack";
import Analysis from "../components/Seudeume/Analysis";

function SeudeumePage() {
  return (
    <div className="w-140 h-full ">
      <div className="p-14 ">
        <p className="flex justify-start mt-5 text-black text-2xl font-bold leading-normal">
          웨딩 카페보다
          <br />
          웨딩 박람회보다 더 싸게
          <br />
          결혼준비를 할 수 있어요.
        </p>
        <p className="flex justify-start mt-10 text-black text-md font-light leading-relaxed ">
          '스드메 상품'은 어디서 계약하시더라도 동일한 구성입니다.
          <br />
          단지 들쭉날쭉한 '플래너 수수료'를 얼마나 책정하느냐에 따라 <br />
          소비자 가격이 달라질 뿐이죠. <br />
          포켓 웨딩은 '비동행 플래닝'으로 기존 '웨딩 플래너 역할'은 <br />
          그대로 제공해드리면서투명한 정찰제로 업계 최저가격을 선보입니다.
          <br />
          이제 결혼준비 시장도 투명하게 / 간편하게 바뀔 때가 되지 않았나요?
          <br />
          포켓웨딩이 앞장섭니다! 😘
        </p>
        <div className="flex justify-center">
          <img src={Image1} alt="Image1" className="w-80 h-80 mt-12 mb-10" />
        </div>
      </div>

      <div className="bg-light-gray pb-20">
        <p className="flex justify-center pt-20 text-black text-2xl font-bold leading-normal">
          스드메 스타터팩
        </p>
        <p className="flex justify-center mt-10 text-black text-lg font-light leading-relaxed text-center">
          결혼준비 초보자분들을 위해
          <br />
          '스드메 패키지'를 이해하기 쉽게 정리해서 추천드려요!
        </p>
        <div className="flex justify-center mt-20">
          <StarterPack
            mainTitle="스타터팩 1"
            comment="알뜰한 당신에게 추천!"
            middleTitle1="'드메' PACKAGE"
            middleDescription1="'스튜디오 촬영'을 생략하고 본식에서 사용할 '드레스, 메이크업' 상품만 구성"
            middleTitle2="'스드메' PACKAGE"
            middleDescription2="'스튜디오 촬영'과 본식에 사용할 '드레스, 메이크업'이 포함된 구성"
          />
        </div>
        <div className="flex justify-center mt-10">
          <StarterPack
            mainTitle="스타터팩 2"
            comment="적절한 가격대비 상품구성!"
            middleTitle1="'드메' PACKAGE"
            middleDescription1="'스튜디오 촬영'을 생략하고 본식에서 사용할 '드레스, 메이크업' 상품만 구성"
            middleTitle2="'스드메' PACKAGE"
            middleDescription2="'스튜디오 촬영'과 본식에 사용할 '드레스, 메이크업'이 포함된 구성"
          />
        </div>
        <div className="flex justify-center mt-10 mb-10">
          <StarterPack
            mainTitle="스타터팩 3"
            comment="퀄리티를 우선시 하면 추천!"
            middleTitle1="'드메' PACKAGE"
            middleDescription1="'스튜디오 촬영'을 생략하고 본식에서 사용할 '드레스, 메이크업' 상품만 구성"
            middleTitle2="'스드메' PACKAGE"
            middleDescription2="'스튜디오 촬영'과 본식에 사용할 '드레스, 메이크업'이 포함된 구성"
          />
        </div>
      </div>

      <div className="p-14 pb-20">
        <p className="flex justify-center mt-5 text-black text-2xl font-bold leading-normal">
          내 마음대로 견적서 생성
        </p>
        <p className="flex justify-center mt-6 text-black text-lg font-light leading-relaxed ">
          직접 '스/드/메'를 조합하여 최저가 견적을 낼 수 있어요.
        </p>
        <p className="flex justify-center mt-10 text-black text-sm font-light leading-relaxed ">
          1. '스/드/메'카테고리별로 원하는 상품을 선택하세요. <br />
          2. '드/메'만 필요하시다면? '드/메' 상품만 선택하세요. <br />
          3. '견적확인' 버튼을 누르면 금액을 확인할 수 있어요. <br />
          4. 검색아이콘을 클릭하시면 상세한 상품분석을 확인하실 수 있어요! <br />
          5. 계약 이후에는 오딩에서 웨딩플래너 역할을 대신해 모든 일을 처리해드려요. <br />
        </p>
        <p className="flex justify-center mt-32 text-black text-2xl font-bold leading-normal">
          스드메 업체 선택 Tip
        </p>
        <p className="flex justify-center mt-6 mb-5 text-black text-lg font-light leading-relaxed text-center">
          웨딩박람회, 웨딩플래너 없이 준비하려니 막연하실 수 있어요.
          <br />
          하지만 어렵지 않아요.
          <br />
          다음 가이드를 참조해보세요.
        </p>
        <Link to="/choice-studio" className="flex justify-center">
          <button className="flex items-center justify-center w-80 h-12 mt-4 text-base font-light bg-main-white border-2 rounded-lg hover:bg-black hover:text-white">
            스튜디오 고르는 방법
          </button>
        </Link>
        <Link to="/choice-dress" className="flex justify-center">
          <button className="flex items-center justify-center w-80 h-12 mt-3 text-base font-light bg-main-white border-2 rounded-lg hover:bg-black hover:text-white">
            드래스샵 고르는 방법
          </button>
        </Link>
        <Link to="/choice-makeup" className="flex justify-center">
          <button className="flex items-center justify-center w-80 h-12 mt-3 text-base font-light bg-main-white border-2 rounded-lg hover:bg-black hover:text-white">
            메이크업 고르는 방법
          </button>
        </Link>

        <div className="flex justify-center mt-20 ">
          <Analysis mainTitle="스튜디오" type="STUDIO" comment="왼쪽 '선택' 버튼을 클릭하세요." />
        </div>
        <div className="flex justify-center mt-5 ">
          <Analysis mainTitle="드레스" type="DRESS" comment="왼쪽 '선택' 버튼을 클릭하세요." />
        </div>
        <div className="flex justify-center mt-5 mb-20">
          <Analysis mainTitle="메이크업" type="MAKEUP" comment="왼쪽 '선택' 버튼을 클릭하세요." />
        </div>

        <div className="flex justify-center ">
          <button className="flex justify-center items-center w-16 h-7 mb-20 rounded-md text-sm text-main-color bg-light-yellow hover:bg-deep-yellow">
            {"초기화"}
          </button>
          <button className="flex justify-center items-center w-20 h-7 mb-20 ml-5 rounded-md text-sm bg-main-color text-white hover:bg-deep-blue">
            {"초기화"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeudeumePage;
