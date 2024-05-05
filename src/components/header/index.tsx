"use client";
import {
  ABOUT_PATH,
  CONTACT_PATH,
  HOME_PATH,
  PROJECTS_PATH,
} from "@/constants/routes";
import Link from "next/link";

import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-black p-4 grid grid-cols-1 sm:grid-cols-2">
      <div className="text-white">LazyDev</div>
      <div className="flex justify-end gap-4">
        <Link
          href={HOME_PATH}
          className="text-white text-sm text-whtie rounded-3xl p-2 px-3"
        >
          Home
        </Link>
        <Link
          href={ABOUT_PATH}
          className="text-white text-sm text-whtie rounded-3xl p-2 px-3"
        >
          About
        </Link>
        <Link
          href={PROJECTS_PATH}
          className="text-white text-sm text-whtie rounded-3xl p-2 px-3"
        >
          Projects
        </Link>
        <Link
          href={CONTACT_PATH}
          className="text-white text-sm text-whtie rounded-3xl p-2 px-3"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
export default Header;
