import React, { useEffect, useRef, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
const navigation = [
  {
    name: "HOME",
    scroll: "home",
    hidden: false,
    href: undefined,
  },
  {
    name: "PROJECTS",
    scroll: "projects",
  },
];
interface Props {
  currentScroll: [string, boolean];
  setCurrentScroll: React.Dispatch<React.SetStateAction<[string, boolean]>>;
}
const NavBar: React.FC<Props> = ({ currentScroll, setCurrentScroll }) => {
  const [navFixed, setNavFixed] = useState(false);
  const disButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavFixed(!(window.scrollY === 0));
    });
  }, []);
  return (
    <Disclosure
      as="nav"
      className={`bg-teal-100 fixed w-full z-30 transform duration-300 ${
        navFixed ? "nav-fixed" : "text-white"
      }`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-4 text-teal-800 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-900"
                  ref={disButton}
                >
                  <span className="sr-only">Open main menu</span>
                  <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {open ? (
                      <>
                        <span
                          aria-hidden="true"
                          className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out rotate-45"
                        ></span>
                        <span
                          aria-hidden="true"
                          className="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out opacity-0"
                        ></span>
                        <span
                          aria-hidden="true"
                          className="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out -rotate-45"
                        ></span>
                      </>
                    ) : (
                      <>
                        <span
                          aria-hidden="true"
                          className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -translate-y-1.5"
                        ></span>
                        <span
                          aria-hidden="true"
                          className="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out"
                        ></span>
                        <span
                          aria-hidden="true"
                          className="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out translate-y-1.5"
                        ></span>
                      </>
                    )}
                  </div>
                </Disclosure.Button>
              </div>
              <div className="hidden flex-shrink-0 sm:flex items-center text-xl font-extrabold select-none md:text-2xl absolute left-0 font-mono tracking-widest">
                ARSA
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="sm:hidden flex-shrink-0 flex items-center text-xl font-extrabold select-none md:text-2xl font-mono tracking-widest">
                  ARSA
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href || undefined}
                        className={`hover:text-teal-600 px-3 py-2 text-sm font-medium select-none text-teal-800 cursor-pointer ${
                          currentScroll[0] === item.scroll && !currentScroll[1]
                            ? navFixed
                              ? "border-b-2 border-black"
                              : "border-b-2 border-white"
                            : null
                        }`}
                        onClick={() =>
                          item.scroll !== undefined &&
                          setCurrentScroll([item.scroll, true])
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className={`sm:hidden`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    className={`text-teal-900 hover:bg-teal-700 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-bold cursor-pointer ${
                      navFixed ? "" : "border-b border-white"
                    }`}
                    onClick={() => {
                      disButton.current?.click();
                      if (item.scroll !== undefined)
                        setCurrentScroll([item.scroll, true]);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
