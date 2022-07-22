/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { CubeIcon, SunIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";

export default function Menubar() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Menu as="div" className="relative md:inline-block text-left hidden">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border py-3">
          <CubeIcon className="-mr-1 ml-4 h-6 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-4 w-56 rounded-md shadow-lg bg-white dark:bg-black border dark:text-white dark:border-zinc-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <a
                href="#"
                className="block px-4 py-3 text-sm border-zinc-200 dark:border-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                Account settings
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className="block px-4 py-3 text-sm border-zinc-200 dark:border-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                License
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className="block px-4 py-3 text-sm border-zinc-200 dark:border-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                Changelog
              </a>
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                <button
                  type="submit"
                  className="flex w-full buttonSpecial px-4 py-3 text-sm border border-zinc-200 dark:border-zinc-900 dark:hover:text-zinc-500"
                >
                  Sign out
                </button>
              </Menu.Item>
            </form>
            {/* Theme Switcher */}
            <Menu.Item>
              <button
                onClick={changeTheme}
                className="flex items-center justify-center px-4 py-3 text-sm"
              >
                {/* <MoonIcon className="h-6 w-6" /> */}
                <SunIcon className="h-6 w-6" />
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
