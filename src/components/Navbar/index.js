import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import styled from "styled-components";
import {
  MenuIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
  TerminalIcon,
  UserCircleIcon,
  CodeIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import HashnodeLogo from "../../public/images/hashnode.svg";
import GithubDarkLogo from "../../public/github-dark.svg";
import Link from "next/link";

const explore = [
  {
    name: "Recruiters",
    description: "See a list of vetted recruiters currently hiring",
    href: "/about",
    icon: UserCircleIcon,
  },
  {
    name: "Developers",
    description: "See trusted developers endorsed on Spekni",
    href: "/developer",
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
    description: "Start integrating Spekni's API.",
    href: "/developer",
    icon: TerminalIcon,
  },
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Container>
      <Popover className="test relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex items-center  lg:flex-1">
              <Image src={Logo} alt="Workflow" width="40px" height="40px" />
              <span className="font-bold text-2xl ml-1">Spekni</span>
            </div>

            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center  hover: hover:bg-gray-100 ">
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
                        "group bg-white rounded-md inline-flex items-center text-base"
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
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {explore.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 highlight"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <h3 className="text-base font-medium ">
                                    {item.name}
                                  </h3>
                                  <p className="mt-1 text-sm ">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  //  href={item.href}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium  hover:bg-gray-100"
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

              <Link href="/about" className="text-base font-medium  ">
                About
              </Link>
              <Link href="/documentation" className="text-base font-medium  ">
                Docs
              </Link>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {/* <a href="/login" className="whitespace-nowrap text-base">
                Login
              </a> */}
              <Link href="/login">
                <a className="btn btn-primary ml-6 inline-flex items-center justify-center">
                  Get Started
                </a>
              </Link>
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
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={Logo}
                      alt="Workflow"
                      width="30px"
                      height="30px"
                    />
                    {/* <span className="font-medium text-base ml-1">Spekni</span> */}
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center  hover: hover:bg-gray-100">
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
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
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
                  <a
                    href="#"
                    className="text-base font-medium  hover:text-gray-700"
                  >
                    Developers
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium  hover:text-gray-700"
                  >
                    Documentation
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium  hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="btn btn-primary w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base btn text-center"
                  >
                    Get Started
                  </a>
                  <div className="mt-6 text-center ">
                    <a
                      className="mr-5"
                      href="https://github.com/evavic44/spekni"
                    >
                      <Image
                        src={GithubDarkLogo}
                        width="21px"
                        height="21"
                        title="Github logo"
                      />
                    </a>
                    <a href="https://eke.hashnode.dev">
                      <Image
                        src={HashnodeLogo}
                        width="21px"
                        height="21px"
                        title="Hashnode logo"
                      />
                    </a>
                  </div>
                  {/* <p className="mt-6 text-center text-base font-medium ">
                    Existing customer?{" "}
                    <a href="#" className="highlight">
                      Sign in
                    </a>
                  </p> */}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  width: 100%;

  @media (max-width: 1000px) {
    .logo .logo-text {
      display: none;
    }
  }
`;
