import React from "react";
import SidebarMenu from "../../components/SidebarMenu";

const Add = () => {
  return (
    <div className="flex">
      <div className="w-full p-7">
        <h1 className="leading-[30px] mb-4 text-xl text-[#5F5E61] font-semibold">
          Thêm mới Sản phẩm
        </h1>
        <div className="flex gap-x-[35px]">
          <div>
            <div className="flex items-center justify-center w-[500px] mb-5">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 rounded-lg shadow-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                  <p className="mt-3 text-gray-400">Thêm ảnh</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <textarea
              name=""
              id=""
              className="w-full h-24 shadow-md rounded-md outline-none border-none p-4 text-[13px] text-[#5A6169] resize-none"
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
            <div className="flex gap-x-2">
              <div className="w-2/4 mb-4">
                <label
                  htmlFor=""
                  className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                >
                  Danh mục
                </label>
                <select className="p-2 w-full text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none">
                  <option value="Laptop">Laptop</option>
                </select>
              </div>
              <div className="w-2/4 mb-4">
                <label
                  htmlFor=""
                  className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                >
                  Thương hiệu
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
                Đặc điểm nổi bật
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

export default Add;
