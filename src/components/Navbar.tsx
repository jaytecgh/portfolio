// src/components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white text-[#020080] py-4 fixed w-full shadow-lg top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Justice Amoah</h1>
        <ul className="flex space-x-8 text-[#020080]">
          <li>
            <Link href="#home" className="hover:text-yellow-500 transition">Home</Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-yellow-500 transition">Projects</Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-yellow-500 transition">Skills</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-yellow-500 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
