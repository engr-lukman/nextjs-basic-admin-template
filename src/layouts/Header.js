import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowLeftOnRectangleIcon,
  BellIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import Link from "next/link";
import clsx from "clsx";

const Header = ({ isShowSidebar, setIsShowSidebar }) => {
  return (
    <div
      className={clsx(
        "fixed w-full h-20 flex justify-between items-center transition-all duration-[500ms] bg-gray-100 text-white",
        isShowSidebar && "pl-52"
      )}
    >
      <div className="pl-5 md:pl-10">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setIsShowSidebar(!isShowSidebar)}
        />
      </div>
      <div className="flex items-center pr-5 md:pr-10">
        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-10 cursor-pointer text-yellow-700">
            <BellIcon className="h-8 w-8" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform scale-95"
            enterTo="transform scale-300"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-300"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-20 sm:right-10 z-50 mt-1 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-700 font-medium">Notifications</p>
                  <a className="text-sm text-orange-700" href="#">
                    Mark all as read
                  </a>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  {[1, 2, 3]?.map((notification) => (
                    <div key={notification} className="flex">
                      <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                        <CheckIcon className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-700">
                          Notification {notification}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          Test Notification {notification} text ...
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img
                  src="/avatar.png"
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                  alt="avatar"
                />
              </picture>
              <span className="hidden md:block font-medium text-gray-700">
                LuKm@n
              </span>
              <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform scale-95"
            enterTo="transform scale-300"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-300"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-52 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-gray-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <UserCircleIcon className="h-5 w-5 mr-2" />
                    Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-gray-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <Cog8ToothIcon className="h-5 w-5 mr-2" />
                    Change Password
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-gray-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-2" />
                    Logout
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

Header.displayName = "Header";
export default Header;
