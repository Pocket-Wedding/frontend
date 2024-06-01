import Weddinghallbutton from "../components/Weddinghalls/Weddinghallbutton";

const Weddinghalls = () => {
  return (
    <div className="w-140 h-full h-screen">
      <div className="bg-white w-full h-1/4 p-10 text-sm text-gray-600">
        작은 결혼식은 그 자체로 더 특별하고 감동적입니다. <br />
        소중한 사람들과 함께 만드는 결혼식은 그 순간 순간이 <br />
        더욱 소중한 추억으로 남을 것 입니다. <br />
        <br />
        스몰 웨딩은 신랑 신부님의 개성과 스타일을 반영할 수 있는 최고의 선택입니다. <br />
        사랑하는 사람들과의 깊은 소통, 창의적이고 독창적인 연출, 경제적인 부담 감소, <br />
        간소한 준비과정, 그리고 특별한 추억을 위해 스몰 웨딩을 선택해보세요.
        <br />
        <br />
        당신의 특별한 날, 스몰 웨딩이 더 의미있게 만들어 줄 것 입니다.
      </div>
      <div className="bg-gray-100 w-full h-1/2 p-10">
        <h1 className="text-xl font-bold ">제휴 웨딩홀</h1>
        <p className="my-3 text-gray-600">
          포켓웨딩과 제휴된 웨딩홀로 아름다운 결혼을 상상해보아요!
        </p>
        <div className="w-full flex my-5">
          <Weddinghallbutton />
          <Weddinghallbutton />
        </div>
        <div className="w-full flex my-5">
          <Weddinghallbutton />
          <Weddinghallbutton />
        </div>
      </div>
    </div>
  );
};

export default Weddinghalls;
