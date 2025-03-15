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
import {
  X,
  HousePlus,
  Signature,
  GitBranch,
  Trophy,
  PlaneTakeoff,
  LibraryBig,
} from "lucide-react";
import ModeToggle from "@/components/ui/mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);

  return (
    <nav className="py-6 px-6 border-b border-zinc-200 z-30 lg:mb-28 mb-16 fixed top-0 left-0 w-full backdrop-blur-lg dark:border-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <h2 className="font-bold text-lg text-[#1d2f6f] dark:text-[#6a5acd]">
            BJK
          </h2>
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
            <div className="flex items-center align-middle bg-slate-200 w-full justify-between px-4 rounded-md py-2 dark:bg-slate-400">
              <ModeToggle />
              <DrawerClose className="">
                <X className="w-8 h-8 text-white dark:text-black" />
              </DrawerClose>
            </div>
            <DrawerHeader>
              <DrawerDescription>
                <ul className="flex mt-20 flex-col items-start w-full">
                  {[
                    {
                      href: "/",
                      text: "Home",
                      icon: <HousePlus className="w-4 h-4" />,
                    },
                    {
                      href: "/about",
                      text: "About",
                      icon: <Signature className="w-4 h-4" />,
                    },
                    {
                      href: "/projects",
                      text: "Projects",
                      icon: <GitBranch className="w-4 h-4" />,
                    },
                    {
                      href: "/achievements",
                      text: "Achievements",
                      icon: <Trophy className="w-4 h-4" />,
                    },
                    {
                      href: "/events",
                      text: "Events",
                      icon: <PlaneTakeoff className="w-4 h-4" />,
                    },
                    {
                      href: "/blog",
                      text: "Blog",
                      icon: <LibraryBig className="w-4 h-4" />,
                    },
                  ].map((link, index) => (
                    <li
                      key={index}
                      className={
                        index > 0
                          ? "pt-7 flex items-center"
                          : "flex items-center"
                      }
                    >
                      {link.icon}
                      <Link
                        href={link.href}
                        className="hover:text-[#161960] text-xl duration-200 pl-2"
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
