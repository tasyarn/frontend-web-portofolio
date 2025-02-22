import Link from "next/link";
import { Mansalva } from "next/font/google";

const mansalva = Mansalva({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className=" text-[#493628] p-4 px-8 xl:px-40 border-b-2 border-[#493628] border-dashed backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className={`${mansalva.className} text-2xl font-extrabold`}>Tasya Rania </h1>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-400 text-[#493628] font-bold">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-400 text-[#493628] font-bold">About</Link></li>
          <li><Link href="/projects" className="hover:text-gray-400 text-[#493628] font-bold">Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}
