import React from "react";

const Signup = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <form
        action=""
        className="flex items-center justify-between p-[55px] bg-white rounded-2xl shadow-xl min-w-[800px] min-h-[570px]"
      >
        <div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-lg text-[#444]">
              Email
            </label>
            <input
              type="text"
              className="px-3 py-2 border border-gray-200 rounded-md outline-none min-w-[410px]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-lg text-[#444]">
              Số điện thoại
            </label>
            <input
              type="number"
              className="px-3 py-2 border border-gray-200 rounded-md outline-none min-w-[410px]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-lg text-[#444]">
              Mật khẩu
            </label>
            <input
              type="password"
              className="px-3 py-2 border border-gray-200 rounded-md outline-none min-w-[410px]"
            />
          </div>
          <button className="min-w-[410px] bg-[#FF424E] text-white rounded-md py-3 mb-[34px]">
            Đăng ký
          </button>
          <div>
            <p className="text-lg leading-4 text-[#444] text-center mb-4">
              Hoặc đăng nhập bằng
            </p>
            <div className="flex items-center justify-center gap-x-5">
              <a href="">
                <img src="fb.png" alt="" />
              </a>
              <a href="">
                <img src="google.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src="logo.png" className="w-[185px] h-[162px]" alt="" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
