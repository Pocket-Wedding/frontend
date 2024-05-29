import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import SimpleSlider from "../components/Mainpage/SimpleSlider";

import Comintro from "../assets/Image/Comintro.svg";
import guide from "../assets/Image/guide.svg";
import selfquote from "../assets/Image/selfquote.svg";
import eventreview from "../assets/Image/eventreview.svg";
import planner from "../assets/Image/planner.svg";
import Subimage from "../assets/Image/Subimage.svg";
import Sublogo from "../assets/Image/sublogo.svg";

const Mainpage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 w-50 ">
      <div
        style={{ marginBottom: "90px" }}
        className="relative bg-white shadow-md w-full max-w-[560px] h-full overflow-x-hidden overflow-y-auto responsive-container"
      >
        <Header />
        <Navbar />

        <div className="absolute w-full max-w-[560px] justify-center" style={{ top: "180px" }}>
          <SimpleSlider />
          <div
            className="flex flex-row w-full max-w-[560px]  justify-center"
            style={{ marginTop: "30px", top: 0 }}
          >
            <button className="mx-3 text-sm">
              <img src={Comintro} />
              <b>기업 소개</b>
            </button>
            <button className="mx-3 text-sm">
              <img src={guide} />
              <b>가이드</b>
            </button>
            <button className="mx-3 text-sm">
              <img src={selfquote} />
              <b>셀프 견적</b>
            </button>
            <button className="mx-3 text-sm">
              <img src={eventreview} />
              <b>이벤트&리뷰</b>
            </button>
            <button className="mx-3 text-sm">
              <img src={planner} />
              <b>플래너 상담</b>
            </button>
          </div>
        </div>

        <div
          className="flex flex-row absolute justify-center w-full max-w-[560px] text-xl md:text-3xl"
          style={{ top: "850px" }}
        >
          <b>비용 부담없이 스몰 웨딩을 실현하세요</b>
        </div>
        <div
          className="flex flex-row absolute justify-center w-full max-w-[560px] text-lg md:text-xl text-gray-400"
          style={{ top: "900px" }}
        >
          부제목
        </div>
        <div className="flex absolute w-full max-w-[560px] justify-center" style={{ top: "950px" }}>
          <img className="w-full max-w-[520px]" src={Subimage} />
        </div>

        <div
          className="flex flex-col absolute w-full max-w-[560px] bg-gray-800 p-10"
          style={{ top: "1400px" }}
        >
          <div className="flex flex-row h-1/4">
            <img className="flex items-center justify-center w-[80px] h-[100px]" src={Sublogo} />
            <div className="flex text-lg items-center mx-8" style={{ color: "white" }}>
              <b>
                우리는 간편하고 & 투명하고 & 합리적인<br></br>
                결혼준비 세상을 열어갑니다.
              </b>
            </div>
          </div>
          <div className="my-6">
            <b className="text-lg" style={{ color: "white" }}>
              Address
            </b>
            <p style={{ color: "white" }}>
              서울특별시 강남구 강남대로 364, 미왕빌딩 1614호,(우)06241 <br></br>
              (주)오픈웨딩 ㅣ 대표이사 유태민
            </p>
          </div>
          <div className="flex flex-row my-6" style={{ color: "white", fontSize: "12px" }}>
            <div>
              <b>고객센터</b>
              <p>
                Tel: 1661-1623<br></br>
                Email: <br></br>
                pocketwed123@naver.com <br></br>
                Fax:02-6455-3983
              </p>
            </div>
            <div className="mx-8">
              <b>운영시간</b>
              <p>
                매주 월요일 휴무<br></br>
                10:00-18:00
              </p>
            </div>
            <div className="mx-8">
              <b>비즈니스 센터</b>
              <p>
                파트너 가입<br></br>
                Pocketwed Biz<br></br>
                Bloger
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center my-1 "
            style={{ color: "white", fontSize: "12px" }}
          >
            <p>Copyrights © 2018 All Rights Reserved by OpenWedding Corp.</p>
            <p>서비스이용약관 / 개인정보처리방침</p>
          </div>
        </div>
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Mainpage;
