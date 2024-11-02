"use client";
import Link from "next/link";
// import Logo from "../../icons/logo.png";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import ModeToggle from "@/components/ui/mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeDrawer = () => setIsOpen(false);

  const COLORS = {
    color1: "#ff218c", // Dark Blue
    color2: "#ffd800", // Teal
    color3: "#21b1ff", // Light Sea Green
  };

  return (
    <nav className="py-6 px-6 border-b border-zinc-200 z-30 lg:mb-28 mb-16 fixed top-0 left-0 w-full backdrop-blur-lg dark:border-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          {/* <Image src={Logo} width={25} height={25} alt="logo" /> */}
          <h2 className="font-bold text-lg text-[#1d2f6f] dark:text-[#6a5acd]">
            BJK
          </h2>
          {/* <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1204_4292)">
              <path
                d="M2.45462 18.0037L2.52234 7.84632C2.5342 6.00753 3.82017 4.43118 5.59547 4.07984L15.4049 2.13522C17.7618 1.6679 19.9494 3.51263 19.9342 5.95335L19.8665 16.1124C19.8538 17.9504 18.5678 19.5259 16.7925 19.8781L6.98303 21.8227C4.62612 22.29 2.43853 20.4453 2.45462 18.0037Z"
                fill="#21b1ff"
                fill-opacity="0.2"
              />
              <path
                d="M7.26065 22.0565L7.32837 11.8974C7.33938 10.0603 8.6262 8.48479 10.4015 8.13261L20.2109 6.18884C22.5679 5.72152 24.7554 7.56539 24.7394 10.007L24.6716 20.1661C24.6598 22.004 23.3738 23.5795 21.5985 23.9317L11.7891 25.8763C9.43215 26.3428 7.24456 24.4989 7.26065 22.0582V22.0565Z"
                fill="#21b1ff"
                fill-opacity="0.5"
              />
              <path
                d="M12.0668 26.1092L12.1345 15.9501C12.1464 14.1113 13.4323 12.5366 15.2076 12.1845L25.0171 10.2398C27.374 9.77252 29.5616 11.6172 29.5455 14.058L29.4778 24.2171C29.4659 26.0558 28.1799 27.6314 26.4046 27.9827L16.5952 29.9273C14.2383 30.3946 12.0507 28.5499 12.0659 26.1092H12.0668Z"
                fill="#21b1ff"
                fill-opacity="0.8"
              />
            </g>
            <defs>
              <clipPath id="clip0_1204_4292">
                <rect
                  width="27.0909"
                  height="27.9375"
                  fill="white"
                  transform="translate(2.45453 2.0625)"
                />
              </clipPath>
            </defs>
          </svg> */}
        </Link>
        <div className="lg:block hidden ml-auto">
          <ul className="flex items-center gap-x-8 text-[#0f172a] dark:text-[#6a5acd]">
            <ModeToggle />
            <li>
              <Link
                href="/about"
                className="relative inline-block duration-1000"
              >
                <span className="border-b-2 border-transparent hover:border-[#6a5acd] transition-colors">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="relative inline-block duration-1000"
              >
                <span className="border-b-2 border-transparent hover:border-[#6a5acd] transition-colors">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/achievements"
                className="relative inline-block duration-1000"
              >
                <span className="border-b-2 border-transparent hover:border-[#6a5acd] transition-colors">
                  Achievements
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="relative inline-block duration-1000"
              >
                <span className="border-b-2 border-transparent hover:border-[#6a5acd] transition-colors">
                  Events
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="relative inline-block duration-1000"
              >
                <span className="border-b-2 border-transparent hover:border-[#6a5acd] transition-colors">
                  Blog
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger>
            <Menu className="lg:hidden" />
          </DrawerTrigger>
          <DrawerContent className="flex flex-col justify-start items-center p-6">
            <DrawerClose className="self-end">
              <X className="w-8 h-8" />
            </DrawerClose>
            <DrawerHeader>
              <DrawerDescription>
                <ul className="flex mt-20 flex-col divide-y items-center">
                  {[
                    { href: "/", text: "Home" },
                    { href: "/about", text: "About" },
                    { href: "/projects", text: "Projects" },
                    { href: "/achievements", text: "Achievements" },
                    { href: "/events", text: "Events" },
                    { href: "/blog", text: "Blog" },
                  ].map((link, index) => (
                    <li key={index} className={index > 0 ? "pt-7" : ""}>
                      <Link
                        href={link.href}
                        className="hover:text-[#161960] text-xl duration-200 hover:underline"
                        onClick={closeDrawer}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
