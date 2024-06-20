import Weddinghallbutton from "../components/Weddinghalls/Weddinghallbutton";
import BottomNavbar from "../components/Mainpage/BottomNavbar";
import hallimage from "../assets/Image/hallimage.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Weddinghalls = () => {
  const [hallData, setHallData] = useState([]);
  const [visiblenumber, setVisiblenumber] = useState(4);

  const Weddinghall_Show = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/halls/show
  `);
      setHallData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("불러오기 실패", error);
    }
  };

  useEffect(() => {
    Weddinghall_Show();
  }, []);

  const Loadmore = () => {
    if (hallData.length > visiblenumber) {
      setVisiblenumber((prevNumber) => prevNumber + 4);
    } else {
      window.alert("더 이상 표시할 웨딩홀이 없습니다.");
    }
  }; //더보기 버튼 추가 렌더링
  return (
    <div className="w-140 h-full h-screen">
      <div className="bg-white w-full p-10 text-sm text-gray-600">
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
      <div className="bg-gray-100 w-full p-10">
        <h1 className="text-xl font-bold ">제휴 웨딩홀</h1>
        <p className="my-3 text-gray-600">
          포켓웨딩과 제휴된 웨딩홀로 아름다운 결혼을 상상해보아요!
        </p>
        <div className="w-full my-5">
          {hallData.slice(0, visiblenumber).map((hall) => (
            <button
              key={hall.id}
              className="w-56 mx-2 my-3 shadow-xl rounded-2xl transform transition-transform duration-100 hover:scale-105 "
            >
              <img className="rounded-t-2xl" src={hallimage} />
              <div className="flex flex-col items-center bg-white rounded-b-2xl p-5">
                <h1 className="font-bold mb-5">{hall.name}</h1>
                <p>{hall.weddingForm}</p>
                <p>{hall.price}</p>
                <p>{hall.hallForm}</p>
                <p>{hall.address}</p>
                <p>{hall.phoneNumber}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            className=" w-1/6 h-9 mb-5 mt-10  rounded-md text-sm bg-main-color text-white hover:bg-deep-blue"
            onClick={Loadmore}
          >
            더보기
          </button>
        </div>
      </div>
      <div className="bg-white p-10">
        <div className="mb-10">
          <h1 className="font-bold text-2xl mb-2">지역별 웨딩홀 탐색</h1>
          <p className="mb-5">
            웨딩홀의 대관비 , 식사비, 위치 등의 조건을 선택하고 <br />
            '필터링 적용' 버튼을 눌러 원하시는 조건의 웨딩홀을 찾아보세요
          </p>
          <select className="pl-3 w-24 mr-6 h-10 border-solid border-2 border-gray-300 rounded-md">
            <option value="">지역</option>
            <option value="서울">서울</option>
            <option value="인천">인천</option>
            <option value="경기도">경기도</option>
          </select>
          <select className="pl-3 w-24 mr-6 h-10 border-solid border-2 border-gray-300 rounded-md">
            <option value="">상세</option>
            <option value="대관비">대관비</option>
            <option value="식사비">식사비</option>
          </select>
          <select className="pl-3 w-24 mr-10 h-10 border-solid border-2 border-gray-300 rounded-md">
            <option value="">가격</option>
            <option value="100">100만원 이하</option>
            <option value="500">500만원 이하</option>
            <option value="1000">1000만원 이하</option>
          </select>
          <button className=" w-12 h-11   rounded-md text-sm bg-main-color text-white hover:bg-deep-blue justify-end">
            검색
          </button>
        </div>
        <div className="my-20">
          <h1 className="font-bold text-2xl mb-2">예산범위로 웨딩홀 탐색</h1>
          <p className="mb-5">
            하객 200명 기준으로 '대관비+연출비+식사비' 등을 합산하여 예상되는 <br />
            예산 범위로 웨딩홀을 탐색할 수 있습니다.
          </p>
          <div className="flex">
            <input
              type="number"
              className=" block w-44 pl-3 pr-10 py-2 mr-5 text-base border-solid border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              placeholder="최소 가격대"
            />
            <b className="mr-5 mt-2">~</b>
            <input
              type="number"
              className="block w-44 pl-3 pr-10 py-2 mr-5 text-base  border-solid border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              placeholder="최대 가격대"
            />
            <button className=" w-12 h-11   rounded-md text-sm bg-main-color text-white hover:bg-deep-blue">
              검색
            </button>
          </div>
        </div>
        <div className="my-20">
          <h1 className="font-bold text-2xl mb-2">상호명으로 웨딩홀 탐색</h1>
          <p className="mb-5">웨딩홀 상호명으로 검색을 하실 수 있습니다.</p>
          <div className="flex">
            <input
              type="text"
              className="block w-3/4 pl-3 pr-10 py-2 mr-5 text-base  border-solid border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              placeholder="상호명으로 검색"
            />
            <button className=" w-12 h-11   rounded-md text-sm bg-main-color text-white hover:bg-deep-blue">
              검색
            </button>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Weddinghalls;
