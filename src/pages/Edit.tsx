import React from "react";
import SidebarMenu from "../components/SidebarMenu";

const Edit = () => {
  return (
    <div className="flex">
      <SidebarMenu></SidebarMenu>
      <div className="w-full p-7">
        <h1 className="leading-[30px] mb-4 text-xl text-[#5F5E61] font-semibold">
          Cập nhật Sản phẩm
        </h1>
        <div className="flex gap-x-[35px]">
          <div>
            <a
              href=""
              className="w-[395px] h-[259px] shadow-md mb-1 rounded-lg flex items-center justify-center"
            >
              <img
                src="samsungA73.png"
                alt=""
                className="mb-5 w-[242px] h-[242px]"
              />
            </a>
            <textarea
              name=""
              id=""
              className="w-full h-24 shadow-md rounded-md outline-none p-4 text-[13px] text-[#5A6169] resize-none"
              placeholder="Mô tả ngắn..."
            ></textarea>
          </div>
          <div className="w-full">
            <h1 className="text-[#3D5170] font-medium mb-4 px-4 shadow-md leading-6 pb-4">
              Thông tin sản phẩm
            </h1>
            <div className="mb-4">
              <label
                htmlFor=""
                className="text-[13px] leading-5 text-[#5A6169] block mb-2"
              >
                Tên sản phẩm
              </label>
              <input
                type="text"
                className="px-3 py-2 w-full text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none"
              />
            </div>
            <div className="flex gap-x-2">
              <div className="w-2/4 mb-4">
                <label
                  htmlFor=""
                  className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                >
                  Giá gốc
                </label>
                <input
                  type="text"
                  className="px-3 py-2 w-full text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none"
                />
              </div>
              <div className="w-2/4 mb-4">
                <label
                  htmlFor=""
                  className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                >
                  Giá khuyến mãi
                </label>
                <input
                  type="text"
                  className="px-3 py-2 w-full text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor=""
                className="text-[13px] leading-5 text-[#5A6169] block mb-2"
              >
                Danh mục
              </label>
              <select className="p-2 w-2/4 text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none">
                <option value="Laptop">Laptop</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor=""
                className="text-[13px] leading-5 text-[#5A6169] block mb-2"
              >
                Tên sản phẩm
              </label>
              <textarea className="p-3 w-full text-sm text-[#444444] resize-none h-32 leading-5 border border-gray-200 rounded-md outline-none" />
            </div>
            <div className="mb-4">
              <label
                htmlFor=""
                className="text-[13px] leading-5 text-[#5A6169] block mb-2"
              >
                Mô tả dài
              </label>
              <textarea className="p-3 w-full text-sm text-[#444444] resize-none h-32 leading-5 border border-gray-200 rounded-md outline-none" />
            </div>
            <button className="bg-[#00B0D7] hover:bg-[#007BFF] transition-all text-white text-xs leading-[14px] px-[13px] py-[10px] rounded-md">
              Thêm mới
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
