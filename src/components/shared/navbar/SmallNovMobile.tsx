import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";
import NavActions from "./NavActions";

export default function SmallNavMobile({ show }: { show: boolean }) {
  return (
    <Transition.Root
      show={show}
      as={Fragment}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-y-full"
      enterTo="translate-y-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-y-0"
      leaveTo="-translate-y-full">
      <Disclosure
        as="div"
        className="bg-primary dark:bg-darkModeSecondary border-t border-gray-200 shadow md:hidden absolute top-16 w-full z-0 h-16 flex justify-end gap-3.5 items-center px-2">
        <NavActions />
      </Disclosure>
    </Transition.Root>
  );
}
