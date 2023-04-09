import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getById, updateProduct } from "../../api/product";
import { useParams, useNavigate } from "react-router-dom";
import { updateForm, updateSchema } from "../../models/product";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateForm>({
    resolver: yupResolver(updateSchema),
    defaultValues: async () => {
      if (id) {
        return await fetchProductById(id);
      }
    },
  });
  const onHandleSubmit = async (data: updateForm) => {
    try {
      if (id) {
        const response = await updateProduct(id, data);
        console.log(response);
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProductById = async (id: string | number) => {
    const { data } = await getById(id);
    return data;
  };
  // useEffect(() => {
  //   if (id) {
  //     fetchProductById(id);
  //   }
  // }, []);
  return (
    <div className="flex">
      <div className="w-full p-7">
        <h1 className="leading-[30px] mb-4 text-xl text-[#5F5E61] font-semibold">
          Cập nhật Sản phẩm
        </h1>
        <form action="" className="" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="flex gap-x-[35px]">
            <div>
              <div className="flex items-center justify-center w-[500px] mb-5">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 rounded-lg shadow-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <img
                      src="../../samsungA73.png"
                      className="w-[150px]"
                      alt=""
                    />
                    <p className="mt-3 text-gray-400">Sửa ảnh</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              <textarea
                {...register("desc_short")}
                className="w-full h-24 shadow-md rounded-md outline-none p-4 text-[13px] text-[#5A6169] resize-none border-none"
                placeholder="Mô tả ngắn..."
              ></textarea>
              <p className="text-xs text-red-500">
                {errors.desc_short && errors.desc_short.message}
              </p>
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
                  {...register("name")}
                  type="text"
                  className="px-3 py-2 w-full text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none"
                />
                <p className="text-xs text-red-500">
                  {errors.name && errors.name.message}
                </p>
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
                    {...register("original_price")}
                    type="number"
                    className="px-3 py-2 w-full text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none"
                  />
                  <p className="text-xs text-red-500">
                    {errors.original_price && errors.original_price.message}
                  </p>
                </div>
                <div className="w-2/4 mb-4">
                  <label
                    htmlFor=""
                    className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                  >
                    Giá khuyến mãi
                  </label>
                  <input
                    {...register("price")}
                    type="number"
                    className="px-3 py-2 w-full text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none"
                  />
                  <p className="text-xs text-red-500">
                    {errors.price && errors.price.message}
                  </p>
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
                <textarea
                  {...register("special")}
                  className="p-3 w-full text-sm text-[#444444] resize-none h-32 leading-5 border border-gray-200 rounded-md outline-none"
                />
                <p className="text-xs text-red-500">
                  {errors.special && errors.special.message}
                </p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                >
                  Mô tả dài
                </label>
                <textarea
                  {...register("desc_long")}
                  className="p-3 w-full text-sm text-[#444444] resize-none h-32 leading-5 border border-gray-200 rounded-md outline-none"
                />
                <p className="text-xs text-red-500">
                  {errors.desc_long && errors.desc_long.message}
                </p>
              </div>
              <button className="bg-[#00B0D7] hover:bg-[#007BFF] transition-all text-white text-xs leading-[14px] px-[13px] py-[10px] rounded-md">
                Thêm mới
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
