import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#493628] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="/projects" className="hover:text-gray-400">Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}
