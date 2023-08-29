import { Disclosure } from "@headlessui/react";
import { useDarkMode } from "../../../hooks/useMode";
import { BsFillSunFill } from "react-icons/bs";
import { MdNightsStay } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import Links from "./Links";
import SearchBar from "./SearchBar";
import NavMobile from "./NavMobile";
import SmallNavMobile from "./SmallNovMobile";
import { useState } from "react";
import NavActions from "./NavActions";
export default function Navbar() {
  const { toggleDarkMode, darkMode } = useDarkMode();
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Disclosure as="nav" className="bg-primary dark:bg-darkModeSecondary">
        {({ open }: { open: boolean }) => (
          <>
            <div className="mx-auto container flex h-16 justify-between items-center relative z-50 bg-primary dark:bg-darkModeSecondary px-2 gap-3.5">
              <div className="flex items-center">
                <span
                  onClick={() => setShowNav(!showNav)}
                  className="block lg:hidden cursor-pointer">
                  <FaBarsStaggered className="w-8 h-8 dark:text-white p-1 mr-3 text-black" />
                </span>
                <a href="/">
                  {" "}
                  <img
                    src="https://portal.yessmile.de/wp-content/uploads/2022/07/YESSMILE-LOGO-ON-BLUE.svg"
                    className="mr-5"
                    height={80}
                    width={80}
                  />
                </a>
                <Links />
              </div>
              <SearchBar />
              <div className="flex items-center gap-3.5 ml-auto">
                <button type="button" className="text-white ">
                  <FaUserSecret className="bg-white p-1 rounded-md text-primary w-6 h-6" />
                </button>
                <button
                  type="button"
                  className="text-white "
                  onClick={() => toggleDarkMode()}>
                  {darkMode === "dark" ? (
                    <MdNightsStay className=" bg-white p-1 rounded-md text-primary w-6 h-6" />
                  ) : (
                    <BsFillSunFill className=" bg-white p-1 rounded-md text-primary w-6 h-6" />
                  )}
                </button>
                <div className="sm:flex hidden gap-3.5 items-center">
                  <NavActions />
                </div>
              </div>
              <div className="flex h-16 justify-between sm:hidden">
                <div className="flex items-center">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <AiOutlineClose
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <FaBarsStaggered
                        className="block h-6 w-6 dark:text-white text-black"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <SmallNavMobile show={open} />
          </>
        )}
      </Disclosure>
      <NavMobile show={showNav} onHide={() => setShowNav(false)} />
    </>
  );
}
