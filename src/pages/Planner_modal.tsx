import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import ko from "date-fns/locale/ko";
import { registerLocale } from "react-datepicker";

registerLocale("ko", ko);

const Planner_modal = ({ IsModal, closeModal }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

  if (IsModal == true) {
    return (
      <div className="fixed top-0 h-full w-140 bg-gray-100 bg-opacity-80 flex items-center justify-center">
        {/* 전체 wrapper */}
        <div className="bg-white w-3/4  rounded-2xl border border-gray-300">
          <h1 className="font-bold p-4 border-b border-gray-300">방문 예약 신청</h1>
          <p className="text-sm p-4 text-gray-500">
            방문을 희망하시는 날짜를 선택하시면 예약 가능시간이 표시됩니다.
          </p>
          <div className="flex flex-col p-4">
            <p className="text-sm mb-1">방문 날짜</p>

            <DatePicker
              selected={selectedDate}
              locale="ko"
              className="p-2 border border-gray-300 rounded-md w-full "
              onChange={(date) => setSelectedDate(date)}
              placeholderText="연도,월,일"
              minDate={new Date()} // 오늘 이전의 날짜는 선택할 수 없도록 설정
              dateFormat="yyyy년 MM월 dd일"
              disabledKeyboardNavigation
            />
          </div>
          {selectedDate && (
            <div className="flex flex-col p-4">
              <p className="text-sm mb-1">방문 시간</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="p-2 border border-gray-300 rounded-md w-full "
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>
          )}
          <div className="w-full flex justify-end p-4">
            <button className="flex w-14 h-8 text-base rounded-xl text-sm bg-main-color text-white hover:bg-deep-blue items-center justify-center">
              다음
            </button>
          </div>
          <div className="w-full flex justify-end p-4 border-t border-gray-300">
            <button
              className="flex w-14 h-8 text-base rounded-xl text-sm bg-yellow-100 text-black hover:bg-deep-yellow items-center justify-center	"
              onClick={closeModal}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    );
  }
  return;
};

export default Planner_modal;
