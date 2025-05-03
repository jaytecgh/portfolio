// src/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white text-[#020080] py-4 fixed w-full shadow-lg top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
      <Link href="#home" className="flex items-center space-x-2">
          <Image 
            src="/jaytec.jpg" 
            alt="JayTec GH" 
            width={40} 
            height={40} 
            className="rounded-full" 
          />
        </Link>
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
