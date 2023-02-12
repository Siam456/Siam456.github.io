import React from "react";
import dynamic from "next/dynamic";
import { Button, Input, Label, Textarea } from "@windmill/react-ui";
import useMailSubmit from "@/hooks/useMailSubmit";

// import Map from "@/components/Map";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function index() {
  const { onSubmit, register, handleSubmit, errors } = useMailSubmit();
  return (
    <div className=" block w-[95vw] mt-5 md:w-4/5 xl:w-3/5 m-auto">
      <h2 className="title">Contact with me</h2>
      <p className="description">
        If you have any queries rich me on{" "}
        <a href="mailto:hasibulsiam27@gamil.com" className=" text-green-600">
          hasibulsiam27@gamil.com
        </a>
      </p>

      <div className=" block lg:flex my-3">
        <div className="w-full flex justify-center items-center rounded overflow-hidden">
          <Map />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="p-2 w-full ">
            <form className=" mx-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label className="text-base mt-2 font-semibold text-black dark:text-gray-400 px-1 ">
                  {" "}
                  Name :{" "}
                </Label>
                <Input
                  {...register("name", {
                    required: `Name is required!`,
                  })}
                  name="name"
                  type={"text"}
                  placeholder="Your name"
                  className=" px-2  h-12 text-sm focus:outline-none block w-full text-black dark:text-white bg-gray-100 dark:bg-gray-700 border-transparent focus:bg-gray-200 dark:focus:bg-gray-600"
                />
                <span className="text-red-400 text-sm mt-2">
                  {errors.name?.message}
                </span>
              </div>
              <div>
                <div>
                  <Label className="text-base mt-2 font-semibold text-black dark:text-gray-400 px-1 ">
                    {" "}
                    Email :{" "}
                  </Label>
                  <Input
                    type={"text"}
                    {...register("email", {
                      required: `Email is required!`,
                    })}
                    name="email"
                    placeholder="any@gamil.com"
                    className=" px-2  h-12 text-sm focus:outline-none block w-full text-black dark:text-white bg-gray-100 dark:bg-gray-700 border-transparent focus:bg-gray-200 dark:focus:bg-gray-600"
                  />
                </div>
                <span className="text-red-400 text-sm mt-2">
                  {errors.email?.message}
                </span>
              </div>
              <div>
                <Label className="text-base mt-2 font-semibold text-black dark:text-gray-400 px-1 ">
                  {" "}
                  Subject :{" "}
                </Label>
                <Input
                  type={"text"}
                  {...register("subject", {
                    required: `Subject is required!`,
                  })}
                  name="subject"
                  placeholder="example"
                  className="border border-none px-2 h-12 text-sm focus:outline-none block w-full text-black dark:text-white bg-gray-100 dark:bg-gray-700 border-transparent focus:bg-gray-200 dark:focus:bg-gray-600"
                />
                <span className="text-red-400 text-sm mt-2">
                  {errors.subject?.message}
                </span>
              </div>

              <div>
                <Label className="text-base mt-2 font-semibold text-black dark:text-gray-400 px-1 ">
                  {" "}
                  Body :{" "}
                </Label>
                <Textarea
                  rows={"5"}
                  {...register("body", {
                    required: `Body is required!`,
                  })}
                  name="body"
                  className="border px-2 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-dark-700 border-transparent focus:bg-white"
                  placeholder="Enter some long form content."
                />
                <span className="text-red-400 text-sm mt-2">
                  {errors.body?.message}
                </span>
              </div>

              <Button
                type="submit"
                className={`py-2 px-12 my-6 text-sm font-medium text-gray-900 dark:text-gray-100 bg-green-600 hover:bg-green-700 duration-300 `}
              >
                Send Mail
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
