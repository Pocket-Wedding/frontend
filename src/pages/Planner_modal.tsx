const Planner_modal = ({ IsModal }) => {
  if (IsModal == true) {
    return (
      <div className="fixed top-0 h-full w-140 bg-gray-100 bg-opacity-80 flex items-center justify-center">
        {/* 전체 wrapper */}
        <div className="bg-white w-3/4 h-1/3 rounded-2xl">
          <h1 className="font-bold p-4 border-b border-gray-300">방문 예약 신청</h1>
          <p className="text-sm p-4 text-gray-500">
            방문을 희망하시는 날짜를 선택하시면 예약 가능시간이 표시됩니다.
          </p>
        </div>
      </div>
    );
  }
  return;
};

export default Planner_modal;
