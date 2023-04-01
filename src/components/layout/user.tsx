import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-red-500">
        <img src="" alt="" />
        <input type="text" className="border border-gray-400" />
      </header>
      {/* Content */}
      <Outlet></Outlet>
      {/* Footer */}
      <footer>Footer</footer>
    </div>
  );
};

export default UserLayout;
