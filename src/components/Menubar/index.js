import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { CubeIcon, MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Menubar() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
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
        <Menu.Items className="dropdown origin-top-right absolute right-0 mt-4 w-56 rounded-md">
          <div className="py-1">
            <Menu.Item>
              <Link href="/profile">
                <a className="block px-4 py-3 text-sm">Account settings</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <a
                href="https://github.com/Evavic44/spekni/blob/main/LICENSE"
                className="block px-4 py-3 text-sm"
              >
                License
              </a>
            </Menu.Item>
            <Menu.Item>
              <Link href="/changelog">
                <a className="block px-4 py-3 text-sm">Changelog</a>
              </Link>
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                <button
                  type="submit"
                  className="flex w-full buttonSpecial px-4 py-3 text-sm border"
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
                {theme === "light" ? (
                  <MoonIcon className="h-6 w-6" />
                ) : (
                  <SunIcon className="h-6 w-6" />
                )}
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
