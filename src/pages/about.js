import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="p-10 text-center">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-4 text-gray-600">
          Hi, I'm a passionate developer who loves building web applications.
        </p>
      </main>
      <Footer />
    </div>
  );
}
