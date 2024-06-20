/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Image1 from "../../assets/image33.png";
import { useNavigate } from "react-router-dom";

function StudioProduct() {
  const [name, setName] = useState<string>("원규 스튜디오");
  const [comment, setComment] = useState<string>("리허설_오전_특가(토탈)");
  const [category, setCategory] = useState<string>("리허설_토탈");
  const navigate = useNavigate();

  const showInformation = () => {
    navigate("/SeudeumeInfo");
  };

  return (
    <div className="w-140 h-full flex items-center justify-center">
      <div className="w-100 h-40 my-2 border-1 shadow-sm border-gray-200 p-3 flex rounded-md flex-row items-start">
        <div className="flex-shrink-0">
          <img src={Image1} alt="Image1" className="w-46 h-32 object-cover" />
        </div>
        <div className="ml-4 flex flex-col justify-between">
          <div>
            <p className="text-black text-lg font-bold">{name}</p>
            <p className="text-black text-base">{comment}</p>
            <p className="mt-2 px-2 text-main-color text-xs font-normal bg-light-yellow inline-block">
              {category}
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex space-x-2 mt-1">
              <button
                onClick={showInformation}
                className="px-4 w-22 h-6 text-white text-xs bg-main-color font-light rounded-md hover:bg-deep-blue"
              >
                상품정보
              </button>
              <button className="px-4 w-22 h-6 text-white text-xs bg-light-blue font-light rounded-md hover:bg-deep-blue">
                견적 추가
              </button>
            </div>
            <button className="px-4 mt-1 w-43 h-6 text-main-color text-xs bg-white border border-gray-300 font-light rounded-md hover:bg-gray-100">
              실시간 후기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudioProduct;
