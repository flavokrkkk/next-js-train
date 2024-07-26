import Link from "next/link";
import { FC, PropsWithChildren, ReactNode } from "react";

interface IAboutListData {
  id: string;
  path: string;
  text: string;
}

const AboutListData: IAboutListData[] = [
  { id: new Date().toISOString(), path: "/about/team", text: "Team" },
  { id: new Date().toISOString(), path: "/about/contacts", text: "Contacts" },
];

interface IAboutLayout {
  children: ReactNode;
}

const Aboutlayout: FC<IAboutLayout> = ({ children }) => {
  return (
    <section className=" w-full p-5">
      <h1 className="flex justify-center text-2xl">About Us</h1>
      <ul className="m-2 flex flex-col gap-2 text-white">
        {AboutListData.map((page) => (
          <li
            key={page.id}
            className="border-2 border-red-800 p-3 bg-red-400 rounded-md"
          >
            <Link href={page.path}>{page.text}</Link>
          </li>
        ))}
      </ul>
      <main className="flex justify-center">{children}</main>
    </section>
  );
};

export default Aboutlayout;
