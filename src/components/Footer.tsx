"use client";

import { seynation } from "../app/index.js";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="font-sans tracking-wide bg-black px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
        <div>
          <Link href="/" className="hover:text-white">
            <Image className="" src={seynation} alt="Seynation" priority />
          </Link>
          <ul className="mt-10 flex space-x-5">
            <li>
              <a
                href="https://linkedin.com/company/seynation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-300 hover:fill-white w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/seynationdigital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-300 hover:fill-white w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4
            className="text-white font-semibold text-lg relative max-sm:cursor-pointer"
            onClick={(e) => {
              e.currentTarget.nextElementSibling.classList.toggle("active");
            }}
          >
            Company{" "}
            <svg
              xmlns="/"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>
          <ul className="space-y-5 mt-6 hidden sm:block active">
            <li>
              <a href="/about" className="hover:text-white text-gray-300 text-sm">
                About us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white text-gray-300 text-sm">
                Join Our Team
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white text-gray-300 text-sm">
                Our Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-white text-gray-300 text-sm">
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4
            className="text-white font-semibold text-lg relative max-sm:cursor-pointer"
            onClick={(e) => {
              e.currentTarget.nextElementSibling.classList.toggle("active");
            }}
          >
            Services{" "}
            <svg
              xmlns="/"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>
          <ul className="mt-6 space-y-5 text-[#d6d6d6] hidden sm:block active">
            <li>Web & App Development</li>
            <li>Software Development</li>
            <li>Social Media Management</li>
            <li>Digital Strategy</li>
          </ul>
        </div>

        <div>
          <h4
            className="text-white font-semibold text-lg relative max-sm:cursor-pointer"
            onClick={(e) => {
              e.currentTarget.nextElementSibling.classList.toggle("active");
            }}
          >
            Products{" "}
            <svg
              xmlns="/"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>
          <ul className="space-y-5 mt-6 hidden sm:block active">
            <li>
              <a
                href="https://www.festalive.com/"
                className="hover:text-white text-gray-300 text-sm"
              >
                Festalive App
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4
            className="text-white font-semibold text-lg relative max-sm:cursor-pointer"
            onClick={(e) => {
              e.currentTarget.nextElementSibling.classList.toggle("active");
            }}
          >
            Contact Us{" "}
            <svg
              xmlns="/"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>
          <ul className="space-y-5 mt-6 hidden sm:block active">
            <li>
              <a
                href="mailto:info@seynation.co"
                className="hover:text-white text-gray-300 text-sm block"
              >
                info@seynation.co
              </a>
              <p className="text-gray-300 text-sm mt-1">
                Arusha - Tanzania <br />
                Mega Complex Building, 7th Floor
              </p>
            </li>
            <li>
              <a
                href="https://wa.me/255742005867"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-gray-300 text-sm"
              >
                +255 742 005 867
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/255684224468"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-gray-300 text-sm"
              >
                +255 684 224 468
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-gray-400" />

      <div className="flex flex-wrap max-md:flex-col gap-4">
        <p className="text-gray-300 text-sm md:ml-auto">
          © 2025 Seynation Digital LTD. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        ul {
          display: none;
        }
        ul.active {
          display: block;
        }
        @media (min-width: 640px) {
          ul {
            display: block;
          }
        }
      `}</style>
    </footer>
  );
};