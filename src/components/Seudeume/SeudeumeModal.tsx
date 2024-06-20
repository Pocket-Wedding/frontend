import StudioProduct from "./StudioProduct.tsx";

interface PlannerModalProps {
  IsModal: boolean;
  closeModal: () => void;
}

const Planner_modal: React.FC<PlannerModalProps> = ({ IsModal, closeModal }) => {
  if (IsModal) {
    return (
      <div className="fixed inset-0 bg-gray-100 bg-opacity-80 flex items-center justify-center">
        <div className="w-112 h-240 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center p-5 border-gray-200">
            <p className="text-black text-2xl font-bold">토탈 상품</p>
            <button
              className="w-14 h-8 text-base rounded-xl text-sm bg-main-color text-white hover:bg-deep-blue"
              onClick={closeModal}
            >
              닫기
            </button>
          </div>
          <div className="flex items-center justify-center">
            <StudioProduct />
          </div>
          <div className=" flex items-center justify-center">
            <StudioProduct />
          </div>
          <div className="flex items-center justify-center">
            <StudioProduct />
          </div>
          <div className="flex items-center justify-center">
            <StudioProduct />
          </div>
          <div className="flex items-center justify-center">
            <StudioProduct />
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Planner_modal;
