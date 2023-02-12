import Link from "next/link";
import React from "react";

import {
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  FacebookMessengerIcon,
} from "react-share";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="background_nav_footer flex justify-center items-center h-[23vh] text-white">
      <div className=" text-center">
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
                  className="block text-center mx-auto text-gray-500 hover:text-white"
                >
                  <BsGithub size={34} round="true" />
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <h2 className=" text-gray-900 dark:text-white">
          Designed and developed by ©{" "}
          <span className=" text-green-600 font-semibold">Hasibul Hasan</span>
        </h2>
      </div>
    </div>
  );
}
