import { SidebarContext } from "@/context/SidebarContext";
import React, { useContext, useState } from "react";
import { Avatar, Badge, WindmillContext } from "@windmill/react-ui";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import Link from "next/link";
import Routes from "../../utils/Routes";

export default function Navbar() {
  const {
    drawerOpen,
    toggleDrawer,
    closeDrawer,
    routeIndex,
    handleRouteIndex,
  } = useContext(SidebarContext);
  const { mode, toggleMode } = useContext(WindmillContext);

  // console.log(routeIndex);

  return (
    <nav className=" z-50 fixed top-0 w-full background_nav_footer border-gray-200 px-2 sm:px-4 py-2.5  ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Hasibul <span className=" text-green-600">Hasan</span>
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            className="rounded-md focus:outline-none text-green-500 pr-2"
            onClick={toggleMode}
            aria-label="Toggle color mode"
          >
            {mode === "dark" ? (
              <IoSunny className="w-5 h-5" aria-hidden="true" />
            ) : (
              <IoMoonSharp className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
          <button
            onClick={() => toggleDrawer()}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden md:flex">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-200 dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-00">
            {Routes.map((route, index) => (
              <li
                key={index}
                onClick={() => {
                  handleRouteIndex(index);
                }}
              >
                <Link href={route.path}>
                  <p
                    className={` ${
                      index === routeIndex
                        ? "text-gray-900 dark:text-white font-bold "
                        : "text-gray-600 dark:text-gray-400 font-semibold"
                    } block py-2 pl-3 pr-4   rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    {route.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div
          className={` w-full z-40 sm:w-1/2 lg:w-1/3 absolute ${
            drawerOpen ? "left-0" : "left-[-650px]"
          } duration-500 h-full bg-gray-300 dark:bg-gray-800 top-0 block md:hidden `}
        >
          <div className=" bg-gray-400 dark:bg-gray-900 p-4 flex justify-between">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Hasibul <span className=" text-green-600">Hasan</span>
              </span>
            </a>
            <div>
              <button
                onClick={closeDrawer}
                type="button"
                className="bg-gray-300 dark:bg-gtay-700 rounded-full p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-300 duration-300 hover:bg-gray-500 focus:outline-none focus:ring-inset "
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <ul className="p-5 h-[100vh] bg-gray-200 dark:bg-gray-900">
            {" "}
            {Routes.map((route, index) => (
              <li
                key={index}
                onClick={() => {
                  handleRouteIndex(index);
                  toggleDrawer();
                }}
              >
                <Link href={route.path}>
                  <p
                    className={` ${
                      index === routeIndex
                        ? "text-gray-900 dark:text-white font-bold "
                        : "text-gray-600 dark:text-gray-400 font-semibold"
                    } block py-2 pl-3 pr-4   rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    {route.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
