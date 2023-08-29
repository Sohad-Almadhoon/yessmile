import { AiFillBell } from "react-icons/ai";
import NavMenu from "./NavMenu";
import { MdLocalPostOffice } from "react-icons/md";
import ProfileMenu from "./ProfileMenu";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

const NavActions = () => {
  return (
    <>
      <NavMenu
        icon={<AiFillBell className=" p-1 rounded-md text-white w-7 h-7" />}>
        <p className="text-gray-600 font-medium text-lg p-2">
          No new notifications
        </p>
        <Menu.Item as="li">
          <Link
            to="/"
            className="flex justify-center items-center p-2 text-primary font-medium hover:bg-blue-300 rounded-md border-t border-gray-200 capitalize">
            See all notifications
          </Link>
        </Menu.Item>
      </NavMenu>
      <NavMenu
        icon={
          <MdLocalPostOffice className=" p-1 rounded-md text-white w-7 h-7" />
        }>
        <p className="text-gray-600 font-medium text-lg p-2">No new messages</p>
        <Menu.Item as="li">
          <Link
            to="/"
            className="flex justify-center items-center p-2 text-primary font-medium hover:bg-blue-300 rounded-md border-t border-gray-200 capitalize">
            See all messages
          </Link>
        </Menu.Item>
      </NavMenu>
      <div>
        <img
          src="https://development.yessmile.de/wp-content/uploads/2022/09/T36QHFGBF-U033E6P66TA-b3b5e8e82b87-512.jpeg"
          alt="sponsor"
          width={40}
          height={40}
        />
      </div>
      <ProfileMenu />
    </>
  );
};

export default NavActions;
