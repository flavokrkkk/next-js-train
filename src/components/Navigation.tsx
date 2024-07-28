"use client";
import Link from "next/link";
import { FC } from "react";
import { INavigate } from "./Header";
import { usePathname } from "next/navigation";

interface INavigation {
  navLinks: INavigate[];
}

const Navigation: FC<INavigation> = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((nav) => {
        const isActive = pathname === nav.pathName;
        return (
          <div
            key={nav.pathName}
            className={`${
              isActive ? "bg-red-400 rounded-md p-1" : "bg-transparent"
            }`}
          >
            <Link href={nav.pathName}>{nav.label}</Link>
          </div>
        );
      })}
    </>
  );
};

export default Navigation;
