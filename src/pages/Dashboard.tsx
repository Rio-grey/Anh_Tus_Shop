import React from "react";
import SidebarMenu from "../components/SidebarMenu";

const Dashboard = () => {
  return (
    <div className="flex">
      <SidebarMenu></SidebarMenu>
      <div className="w-full p-7">
        <div className="flex justify-between mb-7">
          <div>
            <h1 className="leading-[30px] mb-4 text-xl text-[#5F5E61] font-semibold">
              Điện thoại
            </h1>
            <div className="flex items-center gap-x-5">
              <span className="text-[#5F5E61] text-[13px] font-semibold">
                Bộ lọc:
              </span>
              <div>
                <span className="block mb-2 text-[13px] text-[#5A6169]">
                  Danh mục sản phẩm
                </span>
                <select
                  name=""
                  id=""
                  className="min-w-[352px] px-2 py-1 border border-gray-200 rounded-md"
                >
                  <option value="Laptop">Laptop</option>
                </select>
              </div>
            </div>
          </div>
          <a href="/admin/add" className="block mr-12">
            <img src="add_icon.svg" alt="" />
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y-2 divide-gray-200">
            <thead>
              <tr>
                <th className="sticky inset-y-0 left-0 px-4 py-2 text-left bg-white">
                  <label htmlFor="SelectAll" className="sr-only">
                    Select All
                  </label>
                  <input
                    type="checkbox"
                    id="SelectAll"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  #
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Tên sản phẩm
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Thành tiền
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Mô tả
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Ẩn/hiện
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="sticky inset-y-0 left-0 px-4 py-2 bg-white">
                  <label className="sr-only" htmlFor="Row1">
                    Row 1
                  </label>
                  <input
                    className="w-5 h-5 border-gray-300 rounded"
                    type="checkbox"
                    id="Row1"
                  />
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  1
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  Iphone
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  10.000.000đ
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả,
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap"></td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
                  >
                    Sửa
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Xóa
                  </a>
                </td>
              </tr>
              <tr>
                <td className="sticky inset-y-0 left-0 px-4 py-2 bg-white">
                  <label className="sr-only" htmlFor="Row2">
                    Row 2
                  </label>
                  <input
                    className="w-5 h-5 border-gray-300 rounded"
                    type="checkbox"
                    id="Row2"
                  />
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  2
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  Oppo
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  10.000.000đ
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả,
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap"></td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
                  >
                    Sửa
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Xóa
                  </a>
                </td>
              </tr>
              <tr>
                <td className="sticky inset-y-0 left-0 px-4 py-2 bg-white">
                  <label className="sr-only" htmlFor="Row3">
                    Row 3
                  </label>
                  <input
                    className="w-5 h-5 border-gray-300 rounded"
                    type="checkbox"
                    id="Row3"
                  />
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  3
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  Samsung
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  10.000.000đ
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả,
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap"></td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
                  >
                    Sửa
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Xóa
                  </a>
                </td>
              </tr>
              <tr>
                <td className="sticky inset-y-0 left-0 px-4 py-2 bg-white">
                  <label className="sr-only" htmlFor="Row4">
                    Row 4
                  </label>
                  <input
                    className="w-5 h-5 border-gray-300 rounded"
                    type="checkbox"
                    id="Row4"
                  />
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  1
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  Redmi
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  10.000.000đ
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả,
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap"></td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
                  >
                    Sửa
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Xóa
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
