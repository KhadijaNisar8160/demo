// import logo from "../../public/icons/logo.avif";
const Header = () => {
  return (
    <header className="header mt-5">
      <div className="font-semibold text-xl text-black flex items-center justify-center border-8 border-black h-28">
        <h1 className="text-center ">
          <span className="font-bold">WARNING:</span> This product contains
          nicotine. <br />
          Nicotine is an addictive chemical.
        </h1>
      </div>

      <div className="flex justify-between mt-5 overflow-hidden">
        <div className=" ml-[520px] ">
          <a href="/">
            <img
              src="https://mipod.com/cdn/shop/files/Mi-Pod_Logo_190x@2x.png?v=1613174085"
              className="w-[190px] h-[86.5px]"
            />
          </a>
        </div>
        {/* <a href="/">
          <img src={logo} className="w-10 h-10" />
        </a> */}
        <div className="grid grid-cols-3 gap-6 items-center mt-4 mr-10">
          <img
            src="data:image/jpeg;base64,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"
            className="w-[40px] h-[30px] cursor-pointer"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJ2Lz8l6BwcDeldmeY27CnJP4eV06BLxZ2ldW1ZqCfN9RMaP2-ltIoD4&usqp=CAE&s"
            className="w-[20px] h-[20px] cursor-pointer"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUK1WQHNNB8yG481CAtwj8Yxr7OJ6E3s5za0_6QOa0ZeqkuqQSEfKMV0&usqp=CAE&s"
            className="w-[20px] h-[20px] cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
