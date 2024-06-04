import CheckBox from "../../components/Mainpage/GuidePage/CheckBox";
import WeddingImg from "../../assets/Image/WeddingImg.png";
import guideGrape from "../../assets/Image/guideGrape.png";

function SeudeumePage() {
  return (
    <div className="w-140 h-full">
      <div className=" pb-20 p-14">
        <p className="flex justify-center mt-10 text-black text-2xl font-bold leading-normal">
          웨딩 체크리스트
        </p>
        <p className="flex justify-center  mt-3 text-black text-base font-light leading-8 ">
          결혼준비 체크리스트부터 유용한 정보를 모아놨습니다.
        </p>
      </div>

      <div className="p-5">
        <div className="flex justify-center flex-row">
          <CheckBox
            mainTitle="01. 결혼준비 가이드"
            comment="상견례부터 D-DAY까지"
            image={WeddingImg}
          />
          <CheckBox
            mainTitle="02. 예식장 체크사항"
            comment="예식장을 예약하기 전 필수로 체크해야 될 사항을 한눈에 보기"
            image={WeddingImg}
          />
        </div>

        <div className="flex justify-center flex-row my-5">
          <CheckBox
            mainTitle="03. 리허설촬영 체크리스트"
            comment="인생에서 한번쭌인 웨딩스튜디오 촬영을 완벽하게 하기"
            image={WeddingImg}
          />
          <CheckBox
            mainTitle="04. 드레스 체크리스트 "
            comment="원하는 컨셉을 정해보고 예산을 짠 후 선정하는 것이 중요"
            image={WeddingImg}
          />
        </div>
      </div>

      <div className="p-3">
        <p className="flex justify-center mt-28 text-black text-3xl font-bold ">
          01. 결혼준비 가이드
        </p>
        <p className="flex justify-center mt-8 text-black tracking-wide text-2xl font-thin ">
          결혼준비 체크리스트부터 유용한 정보를 모아놨습니다.
        </p>
        <img className="w-140 h-320 my-20" src={guideGrape} alt="guideGrape" />
      </div>
    </div>
  );
}

export default SeudeumePage;
