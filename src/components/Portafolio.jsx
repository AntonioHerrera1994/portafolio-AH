import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'

const projects = [
  { id: 1, title: "Favlash", image: "../src/assets/proyectos/1.png", link: "https://favlash.com/" },
  { id: 2, title: "Danya Argote", image: "../src/assets/proyectos/3.png", link: "https://danyaargote.com/" },
  { id: 3, title: "Corporate Recruiters", image: "../src/assets/proyectos/4.png", link: "https://global-recruiters.com/" },
  { id: 4, title: "Grupo Coinase", image: "../src/assets/proyectos/5.png", link: "https://coinase.mx/" },
  { id: 5, title: "Ciplastic", image: "../src/assets/proyectos/6.png", link: "http://ciplastic.com/" },
  { id: 6, title: "Tech Meol", image: "../src/assets/proyectos/7.png", link: "https://www.techmeol.com/" },
  { id: 7, title: "Ixaya Residencial", image: "../src/assets/proyectos/8.png", link: "https://ixayaresidencial.mx/" },
  { id: 8, title: "Grúas Cervantes", image: "../src/assets/proyectos/9.png", link: "https://gruascervantestijuana.com/" },
  { id: 9, title: "Mudanzas Hermosillo", image: "../src/assets/proyectos/10.png", link: "https://mudanzashermosillo.com.mx/" },
  { id: 10, title: "Madeiras Collection", image: "../src/assets/proyectos/11.png", link: "https://madeirascollection.com/" },
  { id: 11, title: "The Grill Gallery", image: "../src/assets/proyectos/12.png", link: "https://thegrillgallery.com/" },
  { id: 12, title: "Iboga Wellness", image: "../src/assets/proyectos/13.png", link: "https://ibogawellnessclinic.com/" },
  { id: 13, title: "Integra", image: "../src/assets/proyectos/14.png", link: "https://integratj.com.mx/" },
  { id: 14, title: "P&P Solutions", image: "../src/assets/proyectos/15.png", link: "https://ppsolutions.com.mx/" },
  { id: 15, title: "ClidPay", image: "../src/assets/proyectos/16.png", link: "http://clidpay.us/" },
  { id: 16, title: "Snitch Agency", image: "../src/assets/proyectos/17.png", link: "https://snitchagency.com/" },
  { id: 17, title: "Baja Box", image: "../src/assets/proyectos/18.png", link: "https://bajabox.com.mx/" },
  { id: 18, title: "Gyn & Med", image: "../src/assets/proyectos/19.png", link: "https://gynandmed.com/" },
  { id: 19, title: "La Recta Coworking", image: "../src/assets/proyectos/20.png", link: "https://larectacoworking.com/" },
  { id: 20, title: "Vikingdev", image: "../src/assets/proyectos/21.png", link: "http://vikingdevtj.com/" },
];

const itemsPerPage = 6;

function ProjectGallery() {
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
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 to-black">
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

export default ProjectGallery;
