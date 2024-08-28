"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Links({ className }) {
  const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  const session = true;
  const isAdmin = false;

  const pathName = usePathname();

  return (
    <div className="flex items-center justify-between">
      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        {links.map((link) => {
          const isActive = pathName === link.path;
          return (
            <Link
              key={link.title}
              href={link.path}
              className={`py-2 px-4 rounded-full ${className} ${
                isActive
                  ? "bg-white text-black"
                  : "hover:bg-white hover:text-black"
              }`}
            >
              {link.title}
            </Link>
          );
        })}
        {session ? (
          <>
            {isAdmin && (
              <Link
                href="/admin"
                className={`py-2 px-4 rounded-full ${className} ${
                  pathName === "/admin"
                    ? "bg-white text-black"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                Admin
              </Link>
            )}
            <Link href="" className="bg-white text-black py-2 px-4 rounded-sm">
              Logout
            </Link>
          </>
        ) : (
          <Link
            href="/login"
            className={`
            ${
              pathName === "/login"
                ? "bg-white text-black py-2 px-4 rounded-sm"
                : "bg-white text-black py-2 px-4 rounded-sm"
            }`}
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className="md:hidden cursor-pointer z-10">
        {open ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Links */}
      {open && (
        <div className="absolute top-0 right-0 h-[100vh] w-1/2 bg-gray-800 text-white md:hidden flex flex-col items-center z-0">
          {links.map((link, index) => {
            const isActive = pathName === link.path;
            const marginTopClass = index === 0  && open ? "mt-11" : "";

            return (
              <Link
                key={link.title}
                href={link.path}
                className={`py-2 px-4 w-full text-center ${marginTopClass} ${
                  isActive
                    ? "bg-white text-black"
                    : "hover:bg-white hover:text-black"
                }`}
                // onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            );
          })}
          {session ? (
            <>
              {isAdmin && (
                <Link
                  href="/admin"
                  className={`py-2 px-4 w-full text-center ${
                    pathName === "/admin"
                      ? "bg-white text-black"
                      : "hover:bg-white hover:text-black"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Admin
                </Link>
              )}
              <Link
                href=""
                className="bg-white text-black py-2 px-4 w-full text-center"
                onClick={() => setOpen(false)}
              >
                Logout
              </Link>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-white text-black py-2 px-4 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
