import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 fixed bottom-0 left-0 w-full">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8 md:mb-0">
            <h3 className="text-white text-lg font-bold mb-4 ml-8 mt-16">About</h3>
            <p className="text-gray-400 ml-8">Some information about IUTDS.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8 md:mb-0">
            <h3 className="text-white text-lg font-bold mb-4 mt-8">Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/about">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/achievements">
                  Achievements
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/debate-resources">
                  Debate Resources
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/programs">
                    Events
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/panel">
                    Panel
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-gray-400 text-center mb-4">
          &copy; {new Date().getFullYear()} Islamic University of Technology Debating Society
        </div>
      </div>
    </footer>
  );
}
