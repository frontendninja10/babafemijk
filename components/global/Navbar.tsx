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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);

  return (
    <nav className="py-6 px-6 border-b border-zinc-300 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          {/* <Image src={Logo} width={25} height={25} alt="logo" /> */}
          <h2 className="font-bold text-lg text-[#212A37]">BJK</h2>
        </Link>
        <div className="lg:block hidden ml-auto">
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="hover:text-[#161960] duration-200 hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-[#161960] duration-200 hover:underline"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-[#161960] duration-200 hover:underline"
              >
                Quotes
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-[#161960] duration-200 hover:underline"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger>
            <Menu className="lg:hidden" />
          </DrawerTrigger>
          <DrawerContent className="">
            <DrawerHeader>
              <DrawerTitle className="text-2xl font-bold mb-10">
                Menu
              </DrawerTitle>
              <DrawerDescription>
                <ul className="flex flex-col divide-y items-center">
                  {[
                    { href: "/", text: "Home" },
                    { href: "/about", text: "About" },
                    { href: "/projects", text: "Projects" },
                    { href: "/", text: "Quotes" },
                    { href: "/", text: "Blog" },
                  ].map((link, index) => (
                    <li key={index} className={index > 0 ? "pt-5" : ""}>
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
            {/* <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
