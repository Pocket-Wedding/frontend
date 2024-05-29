const Navbar = () => {
  return (
    <div
      className="flex absolute bg-white w-full max-w-[560px] h-[80px] justify-center border-2 border-b-gray-400"
      style={{ top: "86px" }}
    >
      <button className="mx-3 text-sm md:text-lg">
        <b>홈</b>
      </button>
      <button className="mx-3 text-sm md:text-lg">
        <b>스몰 웨딩홈</b>
      </button>
      <button className="mx-3 text-sm md:text-lg">
        <b>스드메</b>
      </button>
      <button className="mx-3 text-sm md:text-lg">
        <b>청첩장&축의금</b>
      </button>
      <button className="mx-3 text-sm md:text-lg">
        <b>온라인 웨딩</b>
      </button>
      <button className="mx-3 text-sm md:text-lg">
        <b>이벤트</b>
      </button>
    </div>
  );
};

export default Navbar;
