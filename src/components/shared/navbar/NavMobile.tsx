import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SearchBar from "./SearchBar";
import { AiOutlineClose } from "react-icons/ai";
export default function NavMobile({
  show,
  onHide,
}: {
  show: boolean;
  onHide: () => void;
}) {
  return (
    <>
      <div>
        <Transition.Root show={show} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={onHide}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full">
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={onHide}>
                        <span className="sr-only">Close sidebar</span>
                        <AiOutlineClose
                          className="h-6 w-6 text-white "
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary dark:bg-darkMode px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <a href="/">
                        {" "}
                        <img
                          src="https://portal.yessmile.de/wp-content/uploads/2022/07/YESSMILE-LOGO-ON-BLUE.svg"
                          className="mr-5"
                          height={80}
                          width={80}
                        />
                      </a>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <a
                            className="text-lg font-semibold leading-6 text-white  hover:text-primary"
                            href="/leads">
                            Leads
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-lg font-semibold leading-6 text-white hover:text-primary"
                            href="/patients">
                            Patients
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-lg font-semibold leading-6 text-white hover:text-primary"
                            href="/schedule">
                            Schedule
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-lg font-semibold leading-6  text-white hover:text-primary"
                            href="/settings">
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-lg font-semibold leading-6 text-white hover:text-primary"
                            href="/payments">
                            Payments
                          </a>
                        </li>
                        <li>
                          <SearchBar mobile />
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}
