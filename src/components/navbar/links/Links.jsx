"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links({ className }) {
  const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  const session = true;
  const isAdmin = false;

  const pathName = usePathname();

  return (
    <div className="flex gap-6">
      {links.map((link) => {
        const isActive = pathName === link.path; // Check if the link is active
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
      })}{" "}
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
  );
}
