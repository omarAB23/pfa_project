import SideBar from "@/components/profile-components/SideBar";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
