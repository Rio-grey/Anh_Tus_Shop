import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="">
      <header className="py-1 px-6 bg-[#00B0D7]">
        <div className="flex items-center gap-[115px] mx-auto">
          <img className="w-[50px]" src="/logo.png" alt="" />
          <h3 className="leading-[25px] text-white">Dashboard</h3>
          <div className="w-full px-3 bg-white rounded-md">
            <i className="cursor-pointer fa-solid fa-magnifying-glass"></i>
            <input
              className="px-3 py-1 border-none rounded-md outline-none grow w-[98%] focus:ring-transparent"
              type="text"
              placeholder="Tìm kiếm"
            />
          </div>
          <h2 className="text-xl font-semibold text-white leading-[30px] whitespace-nowrap">
            Xin chào Lê Đình Quý
          </h2>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
