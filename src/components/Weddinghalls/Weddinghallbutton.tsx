import hallimage from "../../assets/Image/hallimage.svg";

const Weddinghallbutton = () => {
  return (
    <button className="w-1/2 mx-2 shadow-xl rounded-2xl">
      <img className="rounded-t-2xl" src={hallimage} />
      <div className="flex flex-col items-center bg-white rounded-b-2xl p-5">
        <h1 className="font-bold mb-5">웨딩홀명</h1>
        <p>지역</p>
        <p>대관비</p>
        <p>식사비</p>
        <p>최소 보증</p>
        <p>200명 예산</p>
      </div>
    </button>
  );
};

export default Weddinghallbutton;
