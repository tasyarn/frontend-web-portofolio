import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to My Portfolio</h1>
        <p className="text-gray-600 mt-4">Explore my projects and experiences.</p>
      </main>
      <Footer />
    </div>
  );
}
