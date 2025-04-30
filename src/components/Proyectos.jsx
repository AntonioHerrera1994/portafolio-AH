import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'

const projects = [
  { id: 1, title: "Dashboard Analytics en React", image: "proyectosp/pp1.png", link: "https://analytics-demov1.netlify.app/" },
  { id: 2, title: "Web Tecnológica en Astro", image: "proyectosp/pp2.png", link: "https://tec-landing.netlify.app/" },
  { id: 3, title: "Web de noticias en Astro y React", image: "proyectosp/pp3.png", link: "https://tec-news-dev.netlify.app/" },
];

const itemsPerPage = 6;

function ProjectPersonal() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen flex flex-col items-center text-center bg-gradient-to-br from-gray-900 to-black py-10 px-4">
      {/* Galería */}
      <Link to="/" className="text-black mt-18 bg-white rounded-md px-5 py-2" >Regresar</Link>
      <div className="grid md:grid-cols-3 gap-8 mb-8 mt-15">
        <AnimatePresence mode="wait">
          {currentProjects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center font-normal text-gray-700 text-white">
                {project.title}
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {/* Paginación */}
      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50 transition-all"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 transition-all"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default ProjectPersonal;
