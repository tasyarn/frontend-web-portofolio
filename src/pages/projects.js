import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Projects() {
  const projects = [
    { title: "E-Commerce Website", description: "Built with Next.js & Tailwind." },
    { title: "Event Ticketing System", description: "A platform for managing event tickets." },
  ];

  return (
    <div>
      <Navbar />
      <main className="p-10 text-center">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
