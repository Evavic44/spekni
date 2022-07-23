import React, { Fragment } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import {
  MenuIcon,
  PlayIcon,
  XIcon,
  TerminalIcon,
  HeartIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import GithubDarkLogo from "../../public/images/github-dark.svg";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Menubar from "../Menubar";
import { useTheme } from "next-themes";

const explore = [
  {
    name: "Developers",
    description: "See trusted developers endorsed on Spekni",
    href: "/explore",
    icon: TerminalIcon,
  },
  {
    name: "Recruiters",
    description: "See a list of vetted recruiters currently hiring",
    href: "/recruiters",
    icon: BriefcaseIcon,
  },
  {
    name: "About Us",
    description: "Want to know more about Spekni? Read more here",
    href: "/about",
    icon: HeartIcon,
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
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <Popover className="test relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex items-center  lg:flex-1">
              <Image src={Logo} alt="Logo" width={30} height={30} />
              <Link href="/">
                <a className="font-bold text-xl ml-1">Spekni</a>
              </Link>
            </div>

            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center">
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
                      <Popover.Panel className="absolute z-100 -ml-4 mt-4 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg overflow-hidden">
                          <div className="dropdown rounded-b-none relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                            {explore.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-5 w-5 mt-2 highlight"
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
                          <div className="px-5 py-5 dropdownButton space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root w-full">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-5 w-5 highlight"
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
            <div className="highlight-bg rounded-lg shadow-lg">
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
                        className="-m-3 p-3 flex items-center rounded-md"
                      >
                        <item.icon
                          className="flex-shrink-0 h-5 w-5 highlight"
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
                  <p className="mt-6 text-center text-sm">
                    Existing User?{" "}
                    <Link href="/explore">
                      <a className="highlight text-sm">Endorse a dev</a>
                    </Link>
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <Menu>
                      <Menu.Item>
                        <button onClick={changeTheme} className="text-sm">
                          {theme === "light" ? (
                            <MoonIcon className="h-6 w-6" />
                          ) : (
                            <SunIcon className="h-6 w-6" />
                          )}
                        </button>
                      </Menu.Item>
                    </Menu>

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
