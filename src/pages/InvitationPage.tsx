import Image2 from "../assets/Image2.png";
import link from "../assets/link.svg";
import magicStick from "../assets/magicStick.svg";
import BottomNavbar from "../components/Mainpage/BottomNavbar";

function SeudeumePage() {
  return (
    <div>
      <div className="w-140 h-full p-14">
        <div className=" pb-20">
          <p className="flex justify-start mt-5 text-black text-2xl font-bold leading-normal">
            편리하고 감각적인 모바일 청첩장
          </p>
          <p className=" mt-8 text-black text-base font-light leading-8 ">
            결혼식 준비 과정은 행복하지만 동시에 많은 준비가 필요해요.
            <br />
            복잡한 과정 중 하나인 청첩장 발송을 간편하게 해결해드립니다.
            <br />
            감각작언 디자인과 다양한 템플릿으로 당신의 결혼식을
            <br />
            돋보이게 하는모바일 청첩장을 클릭 몇 번으로 만들고
            <br />
            손쉽게 친구와 가족에게 전달하세요.
          </p>
        </div>

        <div className="pb-20">
          <p className="mt-5 text-black text-2xl font-bold leading-normal">
            스마트한 축의금 페이지
          </p>
          <p className="mt-5 text-black text-base font-light leading-8 ">
            요즘 축의금은 현금이 아닌 온라인으로 주고받는 경우가 많아졌습니다
            <br />
            저희 서비스는 이런 트랜드를 반영해
            <br />
            안전하고 편리한 축의금 페이지를 제공해요.
            <br />
            결혼식 정보를 공유하는 것뿐만 아니라,
            <br />
            축의금도 간편하게 받을 수 있어 결혼 준비의 번거로움을 덜어드립니다.
          </p>
        </div>

        <div className="flex justify-center">
          <img src={Image2} alt="Image2" className="w-90 h-90 mb-10" />
        </div>

        <div>
          <p className="flex justify-center mt-28 text-black text-3xl font-bold ">
            결제하지 마세요!
          </p>
          <p className="flex justify-center mt-10 text-black tracking-wide text-2xl font-thin ">
            먼저, 무료 시안 만들어보고
          </p>
          <p className="flex justify-center mt-1 text-black tracking-wide text-2xl font-medium ">
            마음에 드시면 구매하세요.
          </p>
          <p className="flex justify-center mt-8 text-black text-base font-light leading-7 ">
            인생의 가장 아름다운 날,
            <br />
            포켓 웨딩에서 모바일 청첩장을 만들어 보세요!
          </p>

          <div className="flex justify-center my-16">
            <button className="flex justify-center items-center w-36 h-8 mb-20 rounded-md text-xs text-black bg-light-yellow font-light hover:bg-deep-yellow">
              <img src={magicStick} alt="magicStick" className="w-4 h-4 mr-2" />
              {"지금 바로 제작하기"}
            </button>
            <button className="flex justify-center items-center w-28 h-8 mb-20 ml-5 rounded-md text-xs bg-nomal-gray text-black font-light hover:bg-deep-gray">
              <img src={link} alt="link" className="w-4 h-4 mr-2" />
              {"샘플 링크 보기"}
            </button>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
}

export default SeudeumePage;
