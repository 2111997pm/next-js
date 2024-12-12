import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-4">
        <Image
          className="dark:invert"
          src="/Logo.png"
          alt="logo"
          width={80}
          height={68}
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        <div className="col-span-1 lg:col-span-2">
          <h3 className="text-lg font-semibold">Contact us</h3>
          <p className="mt-4 text-gray-400">Logo@gmail.com</p>
          <p className="mt-4 text-gray-400">+91 12345 67890</p>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit ame t consectetur.
          </p>
          <p className="mb-5">Lorem ipsum dolor sit amet consectet</p>
          <Image
            className="dark:invert"
            src="/group.png"
            alt="logo"
            width={150}
            height={150}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold">Products Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Legal Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-5">Get the app</h3>
          <Image
            className="dark:invert"
            src="/playstore.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="text-center pt-8">
        Copyright © 2020. All rights reserved.
      </div>
    </footer>
  );
}
