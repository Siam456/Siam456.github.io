import Link from "next/link";
import React from "react";

import {
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  FacebookMessengerIcon,
} from "react-share";
import { BsGithub } from "react-icons/bs";

export default function index() {
  return (
    <div className=" bg-[url('/main_bg.png')] japan-filter h-[100vh] w-[100vw] bg-no-repeat bg-cover center">
      {/* <div>
        <Image src="/main_bg.jpg" fill />
      </div> */}
      <div className="  relative h-[100vh] w-[100vw]">
        <div className=" absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className=" w-[100vw] text-white dark:text-white text-4xl sm:text-6xl font-extrabold">
            <span className="text-green-700">Hasibul</span> Hasan
          </h1>
          <p className="py-1 font-semibold text-xl text-white dark:text-white">
            Software Engineer | Full Stack Web Developer | Mobile Application
            Developer{" "}
          </p>
          <hr className="w-[80vw] m-auto my-5"></hr>
          <div>
            <ul className="text-sm flex justify-center p-4">
              <li className="flex items-center mr-3 transition ease-in-out duration-500">
                <Link href="https://www.facebook.com/profile.php?id=100005289167762">
                  <p
                    aria-label="Social Link"
                    rel="noreferrer"
                    target="_blank"
                    className="block text-center mx-auto text-blue-500 hover:text-white"
                  >
                    <FacebookIcon size={34} round="true" />
                  </p>
                </Link>
              </li>

              <li className="flex items-center mr-3 transition ease-in-out duration-500">
                <Link href="https:/m.me/hasibulsiam456">
                  <p
                    aria-label="Social Link"
                    rel="noreferrer"
                    target="_blank"
                    className="block text-center mx-auto text-gray-500 hover:text-white"
                  >
                    <FacebookMessengerIcon size={34} round="true" />
                  </p>
                </Link>
              </li>
              <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                <Link href="https://www.linkedin.com/in/hasib11038/">
                  <p
                    aria-label="Social Link"
                    rel="noreferrer"
                    target="_blank"
                    className="block text-center mx-auto text-gray-500 hover:text-white"
                  >
                    <LinkedinIcon size={34} round="true" />
                  </p>
                </Link>
              </li>
              <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                <Link href="https://github.com/Siam456">
                  <p
                    aria-label="Social Link"
                    rel="noreferrer"
                    target="_blank"
                    className="block text-white dark:text-white text-center mx-auto  hover:text-white"
                  >
                    <BsGithub size={34} round="true" />
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
}
