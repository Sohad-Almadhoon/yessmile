import { cn } from '@/lib/utils'
import { Menu, Transition } from '@headlessui/react'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LuUser, LuUserPlus, LuUsers } from 'react-icons/lu'
import { FiChevronDown } from 'react-icons/fi'

const links = [
  {
    text: 'Account Settings',
    icon: <LuUser />,
  },
  {
    text: 'Add User',
    icon: <LuUserPlus />,
  },
  {
    text: 'Users',
    icon: <LuUsers />,
  },
]

const MenuItem = ({ text, icon }: { text: string; icon: ReactNode }) => {
  return (
    <Menu.Item as="li">
      {({ active }) => (
        <Link
          to="/"
          className={cn(
            active ? 'bg-gray-100' : '',
            'flex gap-2 items-center p-2 text-gray-600 font-medium hover:bg-gray-100 rounded-md'
          )}
        >
          {icon}
          {text}
        </Link>
      )}
    </Menu.Item>
  )
}

const ProfileMenu = () => {
  return (
    <Menu as="div" className="relative ml-4 flex-shrink-0">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex rounded-full text-sm text-white focus:outline-none gap-2 items-center">
              <span>Khaled</span>
              <FiChevronDown
                className={cn('h-5 w-5 text-white transition-transform', {
                  'rotate-180': open,
                })}
                aria-hidden="true"
              />
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
              {links.map((link, index) => (
                <MenuItem key={index} text={link.text} icon={link.icon} />
              ))}
              <Menu.Item as="li">
                <Link
                  to="/"
                  className="flex justify-center items-center p-2 text-primary font-medium hover:bg-blue-300 rounded-md border-t border-gray-200"
                >
                  Logout
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default ProfileMenu
