import Home from "../assets/Image/Home.svg";
import reserve from "../assets/Image/reserve.svg";
import self from "../assets/Image/self.svg";
import Wedtalk from "../assets/Image/Weddingtalk.svg";
import My from "../assets/Image/My.svg";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 bg-gray-200 h-[100px] w-[600px] rounded-t-3xl">
      <div className="flex flex-row justify-center items-center h-full">
        <button className="mx-6">
          <img src={Home} />
        </button>
        <button className="mx-6">
          <img src={reserve} />
        </button>
        <button className="mx-6">
          <img src={self} />
        </button>
        <button className="mx-6">
          <img src={Wedtalk} />
        </button>
        <button className="mx-6">
          <img src={My} />
        </button>
      </div>
    </div>
  );
};

export default BottomNavbar;
