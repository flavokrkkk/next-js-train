import Link from "next/link";
import Navigation from "./Navigation";

export interface INavigate {
  id?: string;
  pathName: string;
  label: string;
}

const routesItem: INavigate[] = [
  { id: new Date().toISOString(), pathName: "/", label: "Home" },
  { id: new Date().toISOString(), pathName: "/blog", label: "Blog" },
  { id: new Date().toISOString(), pathName: "/about", label: "About" },
];

const Header = () => {
  return (
    <header className="h-16 flex justify-center items-center gap-10 border text-white bg-gray-500">
      <Navigation navLinks={routesItem} />
    </header>
  );
};

export default Header;
