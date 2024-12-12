import Link from "next/link";
import Image from "next/image";

import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              className="dark:invert"
              src="/Logo.png"
              alt="Logo"
              width={90}
              height={80}
            />
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="#" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Categories
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Explore
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
          </ul>

          <FaSearch className="text-xl cursor-pointer hover:text-blue-400" />
          <FaUserCircle className="text-xl cursor-pointer hover:text-blue-400" />
          <Link href="/cart">
            <FaShoppingCart className="text-xl cursor-pointer hover:text-blue-400" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
