import PWlogo from "../assets/Image/PWlogo.svg";

const Header = () => {
  return (
    <div className="flex absolute top-0 bg-HeaderColor justify-center items-center w-[600px] h-[90px] z-10">
      <img style={{ width: "160px" }} src={PWlogo} />
    </div>
  );
};

export default Header;
