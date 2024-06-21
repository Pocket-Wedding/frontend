import useCheckStore from "../../stores/CheckStore.ts";

interface CheckModalProps {
  IsModal: boolean;
  closeModal: boolean;
}

const CheckEstimate: React.FC<CheckModalProps> = ({ IsModal, closeModal }) => {
  const { companyName, companyComment } = useCheckStore((state) => ({
    companyName: state.companyName,
    companyComment: state.companyComment,
  }));

  if (IsModal) {
    return (
      <div className="fixed inset-0 bg-gray-100 bg-opacity-80 flex items-center justify-center">
        <div className="w-112 h-240 bg-white rounded-lg shadow-lg p-5">
          <p className="flex items-center justify-center mt-10 text-black text-2xl font-bold">
            나의 견적서 확인하기
          </p>
          <p className="flex items-center justify-center mt-10 text-black text-xl font-bold">
            선택하신 구성
          </p>
          <p className="flex items-center justify-center mt-2 text-black text-lg font-light">
            스튜디오/ 드레스/ 메이크업
          </p>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mt-10 w-24 h-10 text-base rounded-xl text-lg bg-main-color text-white">
              스튜디오
            </div>
            <p className="flex items-center justify-center mt-4 text-black text-lg font-nomarl">
              {companyName ? companyName : "스튜디오 업체 이름"}
            </p>
            <p className="flex items-center justify-center mt-2 text-black text-lg font-nomarl">
              {companyComment ? companyComment : "특가 이름"}
            </p>

            <div className="flex items-center justify-center mt-10 w-24 h-10 text-base rounded-xl text-lg bg-main-color text-white">
              드레스
            </div>
            <p className="flex items-center justify-center mt-4 text-black text-lg font-nomarl">
              드레스 업체 이름
            </p>
            <p className="flex items-center justify-center mt-2 text-gray-500 text-lg font-nomarl">
              리허설 + 본식
            </p>

            <div className="flex items-center justify-center mt-10 w-24 h-10 text-base rounded-xl text-lg bg-main-color text-white">
              메이크업
            </div>
            <p className="flex items-center justify-center mt-4 text-black text-lg font-nomarl">
              메이크업 업체 이름
            </p>
            <p className="flex items-center justify-center mt-2 text-gray-500 text-lg font-nomarl">
              리허설 + 본식
            </p>
            <div className="mt-10 w-96 h-0.5 rounded-xl bg-main-color" />
          </div>

          <div className="flex flex-col items-end p-5">
            <p className="text-right mt-2 text-main-color text-lg font-nomarl">패키지 견적 가격</p>
            <p className="text-right mt-2 text-main-color text-sm font-light">(부과세 포함)</p>
            <p className="text-right mt-2 text-main-color text-lg font-light">
              ₩ 000,000,000,000 원
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="flex items-center justify-center mt-6 w-16 h-10 text-base rounded-xl text-lg bg-main-color text-white hover:bg-deep-blue"
              onClick={closeModal}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default CheckEstimate;
