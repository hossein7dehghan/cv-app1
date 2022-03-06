import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
const navigation = [
  {
    name: "Hossein Dehghan",
    href: "#HosseinDehghan",
    img: "./logo.svg",
    current: true,
  },
  { name: "Skills", href: "#Skills", img: "./Chart.svg", current: false },
  {
    name: "Portfolio",
    href: "#Portfolio",
    img: "./Category.svg",
    current: false,
  },
  {
    name: "Work history",
    href: "#Workhistory",
    img: "./Work.svg",
    current: false,
  },
  { name: "Contact Me", href: "#", img: "./phone.svg", current: false },
  { name: "Download CV", href: "#", img: "./Down.svg", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-[#1b1e218c] shadow-xl rounded-lg sticky top-0 z-50 backdrop-blur-lg m-5"
    >
      {({ open }) => (
        <>
          <div className=" mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="  flex items-center justify-between h-16 ">
              <div className="absolute  left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-center pr-3">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    width={500}
                    height={500}
                    className="block lg:hidden h-8 w-auto"
                    src="/logo.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className=" relative flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "  bg-[#131516] rounded-xl border-2 border-[#2A2D31] shadow-2xl text-white p-2 "
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-4 py-3 rounded-lg text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <div className="flex">
                          <Image
                            width={500}
                            height={500}
                            alt="12"
                            src={item.img}
                            className="h-5 pr-3"
                          />
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " bg-black text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-4 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <div className="flex">
                    <Image
                      alt="2"
                      width={500}
                      height={500}
                      src={item.img}
                      className="h-5 pr-3"
                    />
                    {item.name}
                  </div>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}