import { Menu, Transition } from '@headlessui/react'
const NavMenu = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="relative flex rounded-full text-sm text-white focus:outline-none">
          {icon}
        </Menu.Button>
      </div>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="absolute top-4 right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg py-2"
        >
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default NavMenu
