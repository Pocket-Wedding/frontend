/* eslint-disable @typescript-eslint/no-explicit-any */

function CheckBox({
  mainTitle,
  comment,
  image,
  onClick,
}: {
  mainTitle: string;
  comment: string;
  image: any;
  onClick: any;
}) {
  return (
    <div className="flex justify-center flex-col w-70 h-80">
      <div className="flex justify-center">
        <img src={image} alt="WeddingImg" className="w-60 h-40" />
      </div>
      <p className="flex justify-center mt-4 text-black text-xl font-medium ">{mainTitle}</p>
      <p className="flex justify-center mt-2 mb-2 text-black text-xs2 font-light ">{comment}</p>

      <div className="flex justify-center my-5 ">
        <button
          onClick={onClick}
          className="flex justify-center items-center w-29 h-7 mb-20 border border-main-color rounded-md text-xs text-main-color font-normal hover:shadow-md hover:scale-105"
        >
          자세히 보기
        </button>
      </div>
    </div>
  );
}

export default CheckBox;
