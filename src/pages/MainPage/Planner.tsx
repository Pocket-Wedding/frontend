import { useState } from "react";
import Planner_modal from "./Planner_modal";

const Planner = () => {
  const [IsModal, setIsModal] = useState(false);

  const ModalOpen = () => {
    setIsModal(true);
  };

  const ModalClose = () => {
    setIsModal(false);
  };

  return (
    <div className="flex flex-col relative bg-white w-140 max-w-[560px] h-full responsive-container">
      <div className="w-full flex flex-col items-center justify-center my-5 bg-gray-100  p-5 rounded-2xl">
        <h1 className="flex font-bold text-2xl w-full items-center justify-center mb-8">
          스몰웨딩 상담
        </h1>
        <p className="flex items-center justify-center text-center text-gray-500 mb-8">
          스몰웨딩 진행 및 스드메 관련한 상담을 하실 수 있습니다. <br />
          상담 소요시간은 약 1시간이 소요됩니다. <br />
          방문상담은 유료(1만원)로 진행되며 오딩과 계약 진행시 면제처리됩니다.
        </p>
        <button
          className="flex w-44 h-10 text-lg rounded-md text-sm bg-main-color text-white hover:bg-deep-blue items-center justify-center"
          onClick={ModalOpen}
        >
          스몰 웨딩 상담 신청 바로가기
        </button>
      </div>

      <div className="w-full flex flex-col items-center justify-center bg-gray-100 p-5 rounded-2xl mb-28">
        <h1 className="flex font-bold text-2xl w-full items-center justify-center mb-8">
          스드메 상담
        </h1>
        <p className="flex items-center justify-center text-center text-gray-500 mb-8">
          일반 웨딩홀혹은 스몰웨딩에 필요한 '스드메 서비스'는 <br />
          온라인으로 모두 진행하실 수 있습니다. <br />
          하지만 오프라인 상담이 필요하시다면 신청해주세요. <br />
          예약제로 상담을 진행하고 있으며 '노쇼'를 <br />
          방지하기 위해 예약시 1만원의 예약금이 발생하며 상담 이후 환불처리됩니다.
        </p>
        <button
          className="flex w-44 h-10 text-lg rounded-md text-sm bg-main-color text-white hover:bg-deep-blue items-center justify-center"
          onClick={ModalClose}
        >
          스드메 상담 신청 바로가기
        </button>
      </div>

      <Planner_modal IsModal={IsModal} closeModal={ModalClose} />
    </div>
  );
};

export default Planner;
