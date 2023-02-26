import About from "@/components/about";
import React, { useState, useRef, useEffect } from "react";
import Services from "@/components/service";
import Contact from "@/components/Contact";

export default function test() {
  const videoRef = useRef();
  const [showPage, setShowPage] = useState("about");
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: "environment",
          width: {
            min: 1280,
            ideal: 1920,
            max: 2560,
          },
          height: {
            min: 720,
            ideal: 1080,
            max: 1440,
          },
        },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => console.log(err));
  }, [videoRef]);
  return (
    <div className=" relative min-h-[100vh]">
      <video ref={videoRef}></video>
      <div className=" absolute w-full top-0 left-0 z[9999999] ">
        <div className=" w-full flex justify-center items-center mt-5">
          <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
            <button
              onClick={() => {
                setShowPage("about");
              }}
              className="px-5 py-2 text-xs font-thin text-gray-50 transition-colors duration-200 bg-red-600 hover:bg-red-700 sm:text-sm dark:bg-gray-800 dark:text-gray-300"
            >
              About
            </button>
            <button
              onClick={() => {
                setShowPage("services");
              }}
              className="px-5 py-2 text-xs font-thin text-gray-50 transition-colors duration-200 bg-red-600 hover:bg-red-700 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 "
            >
              Services
            </button>
            <button
              onClick={() => {
                setShowPage("contact");
              }}
              className="px-5 py-2 text-xs font-thin text-gray-50 transition-colors duration-200 bg-red-600 hover:bg-red-700 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 "
            >
              Contact
            </button>
          </div>
        </div>
        {showPage === "about" && (
          <div>
            <About />
          </div>
        )}

        {showPage === "services" && (
          <div>
            <Services />
          </div>
        )}

        {showPage === "contact" && (
          <div>
            <Contact />
          </div>
        )}
      </div>
    </div>
  );
}
