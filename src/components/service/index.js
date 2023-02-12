import React from "react";

import { Skils, Project } from "@/utils/Data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@windmill/react-ui";

export default function index() {
  return (
    <div className="block mt-5 w-[95vw] md:w-4/5 xl:w-3/5 m-auto">
      <h2 className="title">Skill-Set</h2>
      <p className="description">Technology I have learned so far</p>
      <div className="w-full grid grid-cols-1 px-2 md:px-0 md:grid-col-2 lg:grid-cols-3  gap-4 my-10">
        {Skils.map((value, index) => (
          <div
            key={index}
            className=" rounded-md border-2 border-gray-400 dark:border-gray-700  p-5 "
          >
            <div className=" bg-gray-200 dark:bg-stone-800 p-2 h-10 w-10 rounded-full ">
              <value.icon
                size={25}
                className="text-green-400 dark:text-red-400"
              />
            </div>
            <p className="py-2 font-semibold text-green-600 dark:text-green-600 text-xl">
              {value.name}
            </p>
            <p className="text-gray-500 dark:text-gray-300 font-semibold">
              {value.stack}
            </p>
          </div>
        ))}
      </div>
      <h2 className="title">Projects</h2>
      <p className="description">
        These projects are done under university courses and also my personal
        usage
      </p>
      <div className="w-full grid grid-cols-1 auto-rows-[1fr] px-2 md:px-0 md:grid-col-2 lg:grid-cols-3  gap-4 my-10">
        {Project.map((value, index) => (
          <Link
            key={index}
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full contents relative"
          >
            <div className="group flex justify-center rounded dark:bg-gray-900">
              <div className="max-w-sm flex flex-col justify-between rounded overflow-hidden shadow-lg">
                <div>
                  <div className=" rounded overflow-hidden relative w-full h-52">
                    <Image
                      className="group-hover:scale-105 duration-300"
                      fill
                      sizes={250}
                      src={value.image}
                      alt="Sunset in the mountains"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl dark:text-white mb-2">
                      {value.title}
                    </div>
                    <p className="text-gray-700 text-base min-h-[70px]">
                      {value.description}
                    </p>
                  </div>
                </div>
                <div className=" px-6 pt-4 pb-2">
                  <span className="inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #github
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className=" flex justify-center w-full">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/Siam456?tab=repositories"}
          className={`py-2 rounded px-12 mb-6 text-sm font-medium text-gray-100 bg-green-600 hover:bg-green-700 duration-300 `}
        >
          Show more on github
        </Link>
      </div>
    </div>
  );
}
