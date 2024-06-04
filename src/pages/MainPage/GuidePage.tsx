import CheckBox from "../../components/Mainpage/GuidePage/CheckBox";
import weddingImg from "../../assets/Image/weddingImg.png";
import weddingImg2 from "../../assets/Image/weddingImg2.png";
import weddingImg3 from "../../assets/Image/weddingImg3.png";
import weddingImg4 from "../../assets/Image/weddingImg4.png";
import guideGrape from "../../assets/Image/guideGrape.png";
import { useRef } from "react";

function SeudeumePage() {
  const guideRef = useRef(null);
  const hallRef = useRef(null);
  const rehearsalRef = useRef(null);
  const dressRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Title = ({ children }) => (
    <p className="flex justify-start mt-14 text-black tracking-wide text-xl font-bold ">
      {children}
    </p>
  );

  const SubTitle = ({ children }) => (
    <p className="flex justify-start mt-3 text-black tracking-wide text-xl font-light">
      {children}
    </p>
  );

  return (
    <div className="w-140 h-full">
      <div className="pb-20 p-14">
        <p className="flex justify-center mt-10 text-black text-2xl font-bold leading-normal">
          웨딩 체크리스트
        </p>
        <p className="flex justify-center mt-3 text-black text-xl font-light leading-8">
          결혼준비 체크리스트부터 유용한 정보를 모아놨습니다.
        </p>
      </div>

      <div className="p-1">
        <div className="flex justify-center flex-row">
          <CheckBox
            mainTitle="01. 결혼준비 가이드"
            comment="상견례부터 D-DAY까지"
            image={weddingImg}
            onClick={() => handleScroll(guideRef)}
          />
          <CheckBox
            mainTitle="02. 예식장 체크사항"
            comment="예식장을 예약하기 전 필수로 체크해야 될 사항을 한눈에 보기"
            image={weddingImg2}
            onClick={() => handleScroll(hallRef)}
          />
        </div>

        <div className="flex justify-center flex-row my-5">
          <CheckBox
            mainTitle="03. 리허설촬영 체크리스트"
            comment="인생에서 한번쭌인 웨딩스튜디오 촬영을 완벽하게 하기"
            image={weddingImg3}
            onClick={() => handleScroll(rehearsalRef)}
          />
          <CheckBox
            mainTitle="04. 드레스 체크리스트"
            comment="원하는 컨셉을 정해보고 예산을 짠 후 선정하는 것이 중요"
            image={weddingImg4}
            onClick={() => handleScroll(dressRef)}
          />
        </div>
      </div>

      <div ref={guideRef}>
        <p className="flex justify-center mt-28 text-black text-3xl font-bold">
          01. 결혼준비 가이드
        </p>
        <p className="flex justify-center mt-8 text-black tracking-wide text-xl font-thin">
          상견례부터 D-DAY까지
        </p>
        <img className="w-140 h-320 my-20" src={guideGrape} alt="guideGrape" />
      </div>

      <div ref={hallRef} className="mb-40">
        <p className="flex justify-center mt-28 text-black text-3xl font-bold">
          02. 예식장 체크사항
        </p>
        <p className="flex justify-center mt-8 text-black tracking-wide text-xl font-thin">
          예식장을 예약하기 전 필수로 체크해야 될 사항을 한눈에 보기
        </p>
        <img src={weddingImg2} alt="weddingImg2" className="w-140 h-15 my-14" />
        <div className="flex justify-center">
          <button className="flex justify-center items-center w-40 h-9 mb-10 border border-main-color rounded-2xl text-md text-main-color font-light hover:shadow-md hover:scale-105">
            체크리스트 다운로드
          </button>
        </div>
        <div className="p-3">
          <Title>01. 원하는 예식일 및 시간</Title>
          <SubTitle>연도, 달, 일, 시간, 하객수 등</SubTitle>
          <Title>02. 위치</Title>
          <SubTitle>연도, 달, 일, 시간, 하객수 등</SubTitle>
          <Title>03. 주차</Title>
          <SubTitle>연도, 달, 일, 시간, 하객수 등</SubTitle>
          <Title>04. 웨딩홀 비용</Title>
          <Title>05. 대관료</Title>
          <Title>06. 보증 인원</Title>
          <Title>07. 식대 기준</Title>
          <Title>08. 서비스 옵션</Title>
          <SubTitle>
            꽃장식/ 포토테이블/ 플라워샤워/ 혼구용품(방명록, 필기구, 혼인서약서 등)/ 음료,주류/
            축가,연주,사회자/ 식권
          </SubTitle>
          <Title>09. 예식진행도우미, 수모비(폐백도우미) 비용</Title>
          <Title>10. 연회장 확인</Title>
          <SubTitle>동시 or 분리예식/음식(한식or코스or뷔페)</SubTitle>
          <Title>11. 시설</Title>
          <SubTitle>
            신부대기실, 파우더룸, 혼주룸, 탈의실, 엘리베이터, 분위기, 조명, 스크린위치, 꽃장식 위치,
            주례단상 등
          </SubTitle>
          <Title>12. 각 웨딩홀 특이사항</Title>
          <Title>13. 부가세 유무확인</Title>
        </div>
      </div>

      <div ref={rehearsalRef} className="mb-40">
        <p className="flex justify-center mt-28 text-black text-3xl font-bold">
          03. 리허설 촬영 체크리스트
        </p>
        <p className="flex justify-center mt-8 text-black tracking-wide text-xl font-thin">
          결혼준비 체크리스트부터 유용한 정보를 모아놨습니다.
        </p>
        <img src={weddingImg3} alt="weddingImg3" className="w-140 h-15 my-14" />
        <div className="p-3">
          <Title>원본데이터</Title>
          <SubTitle>
            4-5시간을 촬영 하시면서 흔들린 사진, 눈감은 사진을 제외한 촬영 원본(약 500~600장)을
            원본데이터라고 합니다.
            <br />
            <br />
            세미촬영은 2-3시간 촬영/ 원본데이터 (약 200~300장)으로 일반 리허설촬영과 상이합니다.
          </SubTitle>
          <Title>수정본데이터</Title>
          <SubTitle>
            원본데이터중에 앨범으로 제작하기 위한 보정이 필요한 사진을 셀렉하게 됩니다.
            수정본데이터는 셀렉 후 보통 3-4개월 후 이후에 앨범과 수정본 데이터를 받으실 수 있어요
            <br />
            <br />
            보정한 사진은 예식장에 디피 할 20R 액자, 포토테이블, 청첩장, 식전영상 등으로 활용하실 수
            있어요.
          </SubTitle>
          <Title>액자</Title>
          <SubTitle>
            20R 액자는 50cm * 60cm 큰 사이즈의 액자입니다. 결혼식 당일 홀 옆에 세워서 세팅하게
            됩니다.
            <br />
            <br />
            예식 전날 웨딩홀로 직접 액자를 들고 가셔야 하니 스튜디오에서 미리 픽업 하셔야 합니다.
          </SubTitle>
          <Title>포토테이블</Title>
          <SubTitle>
            결혼식 당일 테이블 위에 진열하는 작은 사이즈의 액자입니다.
            <br />
            <br />
            수정한 사진 중 5-6장을 인쇄하여 웨딩홀에 일주일 전쯤 미리 전달합니다.
          </SubTitle>
          <Title>리허설촬영 스튜디오</Title>
          <SubTitle>
            • 메이크업샵에서 헬퍼님과 만나 드레스 환복 후 동행하여 스튜디오로 이동합니다. 보통
            스튜디오 까지 30분-1시간이 소요됩니다. <br />
            <br />
            • 스튜디오 도착 후, 작가님과 인사 후 촬영이 시작됩니다. 소품으로 활용할 부케는 보통
            스튜디오에서 준비해 주십니다. <br />
            <br />• 우산, 모자, 썬글라스, 캐쥬얼촬영 의상, 액세서리 등 다양하게 준비해가시면
            이색적인 사진을 찍을 수 있습니다.
            <br />
            <br />• 촬영된 원본파일은 2-3주 후 스튜디오 홈페이지를 통해 확인 및 다운로드 가능합니다.
          </SubTitle>
          <Title>세미촬영</Title>
          <SubTitle>
            스튜디오 촬영과 야외촬영 중 원하시는 컨셉으로 2-3시간 촬영합니다.
            <br />
            <br />
            (본식스냅을 추가 하셨을 경우, 같은 작가님으로 배정받을 확률이 높아 좋습니다.)
          </SubTitle>
          <Title>부케</Title>
          <SubTitle>
            부케는 촬영때 사용한 부케, 본식 부케로 구성하여 진행합니다.
            <br />
            <br />
            촬영날 사용한 부케는 조화, 생화 중에 선택 가능하며 본식부케는 생화로 진행합니다.
          </SubTitle>
        </div>
      </div>

      <div ref={dressRef} className="mb-40">
        <p className="flex justify-center mt-28 text-black text-3xl font-bold">
          04. 드레스 체크리스트
        </p>
        <p className="flex justify-center mt-8 text-black tracking-wide text-xl font-thin">
          원하는 컨셉을 정해보고 예산을 짠 후 선정하는 것이 중요
        </p>
        <img src={weddingImg4} alt="weddingImg4" className="w-140 h-15 mt-14" />
        <div className="p-3">
          <Title>드레스 투어</Title>
          <SubTitle>
            • 드레스샵에서 피팅비가 발생합니다. (피팅비는 스드메 계약시 사라집니다)
            <br />
            <br />
            • 피팅비용은 샵마다 상이하며 보통 3-5만원입니다.
            <br />
            <br />• 드레스 투어시 사진 촬영을 위해 친구와 동행하는 것을 추천드립니다.
          </SubTitle>
          <Title>드레스 디자인</Title>
          <SubTitle>
            • 본식 드레스와 리허설 드레스가 상이합니다.
            <br />
            <br />
            • 리허설 촬영시 화려하고 다양한 컨셉의 드레스를 입는다면 본식은 깔끔하고 단정한 드레스를
            많이 입으십니다.
            <br />
            <br />• 머메이드, A라인, 벨라인 등 평소 본인이 선호하는 디자인을 참고하되, 다양한
            스타일을 입어보는 것을 추천드립니다.
          </SubTitle>
          <Title>헤어 및 메이크업 스타일</Title>
          <SubTitle>
            • 피부톤에 맞는 웨딩메이크업, 헤어스타일 참고 사진을 저장해 가는 것을 추천드립니다.
            <br />
            <br />• 결혼 준비의 꽃은 웨딩드레스지만, 메이크업 스타일도 중요합니다.
          </SubTitle>
          <Title>악세서리</Title>
          <SubTitle>
            • 보통 악세서리는 드레스샵에서 대여가 가능합니다.
            <br />
            <br />• 티아라, 헤어밴드, 귀걸이, 목걸이 등을 미리 체크해두는 것도 도움이 됩니다.
          </SubTitle>
          <Title>드레스 용어</Title>
          <SubTitle>
            오간자, 오프숄더, 튤립 소매 등 다양한 드레스 용어를 미리 숙지하시면 드레스 투어가 더
            즐거워집니다.
          </SubTitle>
          <img src={weddingImg} alt="weddingImg" className="w-140 h-15 my-14" />
          <Title>05-2. 촬영드레스 셀렉</Title>
          <SubTitle>
            촬영일로부터 3~4주전에 가봉하시는 것이 좋습니다.
            <br />
            <br />
            주말은 예식이나 행사 등으로 볼 수 있는 드레스가 한정적이니, 평일에 방문하시는 것을
            추천해드려요.
            <br />
            <br />
            촬영 가봉은 60~90분 내외로 진행됩니다. 4~5벌 정도의 드레스를 입어보시게 됩니다. 그 중
            3벌을 최종으로 선택하게 됩니다.
          </SubTitle>
          <Title> TIP</Title>
          <SubTitle>
            • 결정한 드레스 샵에서 입어보고 싶은 드레스를 사진을 찍어가시면 좋아요.
            <br />
            <br />
            • 촬영 드레스를 입었을 때 또렷해보일 수 있도록 메이크업 해주셔도 좋습니다.
            <br />
            <br />• 장시간 촬영이므로 다양한 드레스를 고르시는 것도 좋고 볼레로를 사용해 변형을 많이
            할 수 있는 드레스를 고르셔도 좋습니다. 촬영드레스는 사진찍었을 때 예쁜 드레스를
            추천해드려요.
          </SubTitle>
          <Title>05-3. 본식드레스 셀렉</Title>
          <SubTitle>
            예식일로부터 3~4주전에 가봉하시는 것이 좋습니다.
            <br />
            <br />
            주말은 예식이나 행사 등으로 볼 수 있는 드레스가 한정적이니, 평일에 방문하시는 것을
            추천해드려요 본식 가봉은 60분~90분 내외로 진행됩니다.
            <br />
            <br />
            4~5벌 정도의 드레스를 입어보시고 최종 1벌을 선택합니다.
          </SubTitle>
          <Title> TIP</Title>
          <SubTitle>
            •결정한 드레스 샵에서 입어보고 싶은 드레스를 사진을 찍어가시면 좋아요.
            <br />
            <br />
            • 본식 드레스를 입었을 때 또렷해보일 수 있도록 메이크업 해주셔도 좋습니다.
            <br />
            <br />• 계절에 맞는 드레스를 같이 보면 더 좋아요. 여름 예식은 튤소재나 오간자실크, 겨울
            예식은 레이스나 얇지 않은 소재의 실크드레스를 추천해드려요
            <br />
            <br />• 본식은 사진찍었을 때보다, 입고 거울로 모습을 봤을 때 예쁜 드레스로 고르시는 것도
            좋은 방법입니다.
          </SubTitle>
        </div>
      </div>
    </div>
  );
}

export default SeudeumePage;
