import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-zinc-300 mt-44">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
        <div>
          <p>Babafemi J.K.</p>
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://github.com/frontendninja10"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://twitter.com/frontendninja10"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </Link>
          <Link
            href="https://linkedin.com/in/babafemijk"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link href="mailto:babafemijk@gmail.com">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
