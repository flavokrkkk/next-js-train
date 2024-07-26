import Link from "next/link";

const Header = () => {
  return (
    <header className="h-16 flex justify-center items-center gap-10 border text-white bg-gray-500">
      <Link href={"/"}>Home</Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/about"}>About</Link>
    </header>
  );
};

export default Header;
