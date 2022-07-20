import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  PlayIcon,
  XIcon,
  UserCircleIcon,
  CodeIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import HashnodeLogo from "../../public/images/hashnode.svg";
import GithubDarkLogo from "../../public/images/github-dark.svg";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Menubar from "../Menubar";

const explore = [
  {
    name: "Recruiters",
    description: "See a list of vetted recruiters currently hiring",
    href: "/recruiters",
    icon: UserCircleIcon,
  },
  {
    name: "Developers",
    description: "See trusted developers endorsed on Spekni",
    href: "/explore",
    icon: CodeIcon,
  },
  {
    name: "About Us",
    description: "Want to know more about Spekni? Read more here",
    href: "/about",
    icon: HomeIcon,
  },
];
const callsToAction = [
  { name: "How it works", href: "https://youtube.com", icon: PlayIcon },
];
const resources = [
  {
    name: "API",
    href: "/developer",
  },
  {
    name: "License",
    href: "https://github.com/Evavic44/spekni/blob/main/LICENSE",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { data: session, status } = useSession();
  return (
    <div>
      <Popover className="test relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex items-center  lg:flex-1">
              <Image src={Logo} alt="Logo" width="30px" height="30px" />
              <Link href="/">
                <a className="font-bold text-xl ml-1">Spekni</a>
              </Link>
            </div>

            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white dark:bg-black rounded-md p-2 inline-flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-900">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className="hidden md:flex md:justify-end space-x-10"
            >
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "" : "",
                        "group rounded-md inline-flex items-center text-base"
                      )}
                    >
                      <span>Explore</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "" : "",
                          "ml-2 h-5 w-5 group-hover:"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-100 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white dark:bg-zinc-900 px-5 py-6 sm:gap-8 sm:p-8">
                            {explore.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 highlight"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <h3 className="text-base font-medium">
                                    {item.name}
                                  </h3>
                                  <p className="mt-1 text-sm ">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 dark:bg-blue-800 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root w-full">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium  hover:bg-gray-100 dark:hover:bg-blue-800"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 "
                                    aria-hidden="true"
                                  />

                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link href="/about" className="text-base font-medium">
                About
              </Link>
              <Link
                href="https://github.com/Evavic44/spekni"
                className="text-base font-medium  "
              >
                Docs
              </Link>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {/* <Link href="/Sign Up">
                <a className="whitespace-nowrap text-base">Sign Up</a>
              </Link> */}
              {status === "loading" ? (
                <a className="btn btn-primary ml-6 inline-flex items-center justify-center">
                  <span className="loader loaderLight"></span>
                </a>
              ) : null}
              {status === "authenticated" ? (
                <Link href="/spiffgreen">
                  <a className="btn btn-primary ml-6 inline-flex items-center justify-center">
                    Profile
                  </a>
                </Link>
              ) : null}
              {status === "unauthenticated" ? (
                <Link href="/login">
                  <a className="btn btn-primary ml-6 inline-flex items-center justify-center">
                    Login
                  </a>
                </Link>
              ) : null}
              <Menubar />
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="highlight-bg rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-100 dark:divide-zinc-900">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center">
                    <Image
                      className="cursor-pointer"
                      src={Logo}
                      alt="Logo"
                      width="30px"
                      height="30px"
                    />
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="p-2 inline-flex items-center justify-center">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {explore.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-zinc-900"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 highlight"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base  ">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link href="/explore">
                    <a className="text-base font-medium  hover:text-zinc-700">
                      Explore
                    </a>
                  </Link>

                  <a
                    href="https://github.com/Evavic44/spekni"
                    className="text-base font-medium  hover:text-zinc-700"
                  >
                    Documentation
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium  hover:text-zinc-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <Link href="/login">
                    <a className="btn btn-dark w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base btn text-center">
                      Get Started
                    </a>
                  </Link>
                  <p className="mt-6 text-center text-base">
                    Existing User?{" "}
                    <Link href="/explore">
                      <a className="text-zinc-500 dark:text-zinc-900">
                        Endorse a dev
                      </a>
                    </Link>
                  </p>
                  <div className="mt-6 text-left">
                    <a
                      className="mr-5"
                      href="https://github.com/evavic44/spekni"
                    >
                      <Image
                        src={GithubDarkLogo}
                        width={20}
                        height={20}
                        title="Github logo"
                        alt="GitHub Logo"
                      />
                    </a>
                    {/* <a href="https://eke.hashnode.dev">
                      <Image
                        src={HashnodeLogo}
                        width="21px"
                        height="21px"
                        title="Hashnode logo"
                        alt="Hashnode logo"
                      />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
