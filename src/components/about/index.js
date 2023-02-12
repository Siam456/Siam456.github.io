import React from "react";
import Image from "next/image";
import { Button } from "@windmill/react-ui";
import { EduInfo } from "@/utils/Data";
import { FcGraduationCap } from "react-icons/fc";
import Link from "next/link";

export default function About() {
  return (
    <div className="block w-[95vw] mt-5 md:w-4/5 xl:w-3/5 m-auto">
      <h2 className="title">About me</h2>
      <p className="description"></p>
      <div className="block my-5 md:flex text-center">
        <div className="relative w-full md:w-1/2 my-5 md:m-0 h-auto flex justify-center items-center">
          <div className="rounded-full overflow-hidden  z-10">
            <Image src={"/me.png"} alt="me" width={250} height={250} />
          </div>
          <div className=" absolute w-[250px] h-[250px] rounded-full bg-green-500"></div>
        </div>
        <div className="w-full px-4 md:w-1/2 h-auto text-left">
          <h1 className=" font-bold text-4xl pb-6">I'm Hasibul Hasan!!!</h1>
          <p className="pb-6">
            Currently working at{" "}
            <Link
              rel="noreferrer"
              target="_blank"
              href={"https://brainstation-23.com/"}
              className="text-blue-600 font-bold"
            >
              Brain Station 23
            </Link>{" "}
            as a associate software engineer . We're mainly responsible for
            designing, developing & testing enterprise system. I'm highly
            interested in Distributed Systems, Cloud Computing, and System
            Design. I would love anything that's challenging, and makes me learn
            something new.
          </p>
          <p className="pb-6">
            In my leasure time, I like to learn developing, Playing Game....
          </p>{" "}
          <hr className="hr-line py-6"></hr>
          <p>
            <span className=" font-bold">Contact:</span> +8801755770538{" "}
          </p>{" "}
          <p>
            <span className=" font-bold">Mail: </span>{" "}
            hasibul15-11038@diu.edu.bd
          </p>
          <div className=" flex justify-center">
            <Button
              className={`py-2 px-12 my-6 text-sm font-medium text-gray-900 dark:text-gray-100 bg-green-600 hover:bg-green-700 duration-300 `}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      <h2 className="title">Education</h2>
      <p className="description"></p>
      <div className="pb-5">
        {EduInfo.map((value, index) => (
          <div
            key={index}
            className="flex border-2 my-2 shadow-md rounded dark:border-gray-500"
          >
            <div>
              <FcGraduationCap size={100} className="px-3" />
            </div>
            <div>
              <div className="px-6 py-4">
                <div className="font-bold text-2xl dark:text-white mb-1">
                  {value.title}
                </div>
                <p className="text-gray-700 font-semibold text-xl mb-1">
                  {value.name}
                </p>
                <p className="text-gray-700 text-base">{value.duration}</p>
              </div>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
