import { useState, useEffect, Fragment } from "react";
import { Transition } from "@headlessui/react";
import clsx from "clsx";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function onWindowResizeHandler() {
    if (innerWidth <= 640) {
      setIsShowSidebar(false);
      setIsMobile(true);
    } else {
      setIsShowSidebar(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", onWindowResizeHandler);
    }

    return () => {
      removeEventListener("resize", onWindowResizeHandler);
    };
  }, []);

  return (
    <>
      <div className="max-w-app mx-auto bg-white flex items-stretch h-screen overflow-hidden">
        <div className="flex justify-between w-full h-auto overflow-hidden overflow-y-auto bg-white">
          <Header
            isShowSidebar={isShowSidebar}
            setIsShowSidebar={setIsShowSidebar}
          />
          <Transition
            as={Fragment}
            show={isShowSidebar}
            enter="transform transition duration-[500ms]"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform duration-[500ms] transition ease-in-out"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Sidebar isShowSidebar={isShowSidebar} />
          </Transition>
          <main
            className={clsx(
              "w-full overflow-hidden overflow-y-auto pt-24 transition-all duration-[500ms]",
              isShowSidebar && !isMobile && "pl-52"
            )}
          >
            <div className="px-5 md:px-10">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
