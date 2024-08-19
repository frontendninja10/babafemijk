import Image from "next/image";
import Link from "next/link";
// import Logo from "../../icons/logo.png";

export default function Navbar() {
  return (
    <nav className="py-6 md:px-24 px-6 border-b border-zinc-300 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          {/* <Image src={Logo} width={25} height={25} alt="logo" /> */}
          <h2 className="font-bold text-lg text-[#161960]">BJK</h2>
        </Link>
        <div>
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
      </div>
    </nav>
  );
}
