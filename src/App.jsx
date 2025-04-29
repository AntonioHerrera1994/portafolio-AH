
import React from 'react'
import Perfil from '../src/assets/perfil.jpeg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  

  return (
    <>
    <div className="bg-gray-950 text-white">

<header className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 to-black">
<img
  src={Perfil}
  alt="foto de perfil" 
  className=" block w-full max-w-75 rounded-xl mb-8 " 
  />
  <h1 className="text-5xl font-bold mb-4" data-aos="fade-down">José Antonio Herrera Quintero</h1>
  <p className="text-xl text-gray-400 mb-6" data-aos="fade-up">Frontend Developer | Web Developer </p>
  <a href="#contact" class="px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition" data-aos="fade-up" data-aos-delay="300">Contáctame</a>
</header>


<section id="about" class="px-6 max-w-4xl mx-auto" data-aos="fade-up">
  <h2 className="text-3xl font-semibold mb-4">Sobre mí</h2>
  <p className="text-gray-300 leading-relaxed">Graduado del Instituto Tecnologico de Tijuana, apasionado por mi trabajo y por las pequeñas cosas de la vida. Capaz de evolucionar y aprender en diferentes entornos priorizando el aprendizaje constante para mejorar las buenas practicas con las que llevo a cabo los diferentes proyectos.
  <br></br>Programador especialista en desarrollo de páginas web y conocimientos de Marketing Digital que me permite complementar ambas areas de gran manera.</p>
</section>


<section id="experience" class="py-16 px-6 max-w-4xl mx-auto" data-aos="fade-up">
  <h2 className="text-3xl font-semibold mb-8">Experiencia</h2>
  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-bold">VikingDev / Freelance — <span class="text-cyan-400">Desarrollo Web / Marketing Digital</span></h3>
      <p className="text-sm text-gray-400">2022 - Actualidad</p>
      <p claclassNamess="text-gray-300 mt-2">Desarrollo y mantenimiento de sitios web para diferentes empresas y negocios asi como diseño grafico, programación de publicaciones en redes sociales y campañas en Meta y Google Ads.</p>
    </div>
    <div>
      <h3 className="text-xl font-bold">TruCapitals  — <span class="text-cyan-400">Desarrollo Web / Web Master </span></h3>
      <p className="text-sm text-gray-400">2022 - Actualidad</p>
      <p className="text-gray-300 mt-2">Desarrollo y mantenimiento de los sitios web de TruCapitals, manejo de host y CRM. Apoyo a configuraciones de plataformas para distintos usos. Apoyo al area de Marketing Digital en tareas especificas que se requieren.</p>
    </div>
    <div>
      <h3 className="text-xl font-bold">Gas Silza  — <span class="text-cyan-400">Desarrollo Web / Desarrollo de Software </span></h3>
      <p className="text-sm text-gray-400">2022</p>
      <p className="text-gray-300 mt-2">Programación del sitio web de la empresa. Desarrollo de aplicaciones moviles y sistemas de gestión. Soporte técnico.</p>
    </div>
    <div>
      <h3 className="text-xl font-bold">Grupo Coinase  — <span class="text-cyan-400">Desarrollo Web / Coordinador de Marketing </span></h3>
      <p className="text-sm text-gray-400">2021</p>
      <p className="text-gray-300 mt-2">Desarrollo y mantenimiento del sitio web de la empresa. Coordinación de las estrategias de Marketing de la empresa que comprenden: Material de diseño gráfico, material audiovisual, eventos de networking (B2B), publicaciones en redes sociales, analizis de la competencia.</p>
    </div>
    <div>
      <h3 className="text-xl font-bold">Grupo Concordia  — <span class="text-cyan-400">Desarrollo Web / Medios Digitales </span></h3>
      <p className="text-sm text-gray-400">2019 - 2021</p>
      <p className="text-gray-300 mt-2">Desarrollo y mantenimiento de las páginas de la empresa. Analizar y dar seguiminto a través de Google Analytics. Campañas en Facebook Ads y Google Ads. Actividades de Community Manager.</p>
    </div>
  </div>
</section>


<section id="education" className="py-16 px-6 max-w-4xl mx-auto" data-aos="fade-up">
  <h2 className="text-3xl font-semibold mb-8">Educación</h2>
  <div>
    <h3 className="text-xl font-bold">Ing. En Sistemas Computacionales — Intituto Tecnológico de Tijuana
</h3>
  </div>
</section>


<section id="skills" className="py-16 px-6 max-w-4xl mx-auto" data-aos="fade-up">
  <h2 className="text-3xl font-semibold mb-8">Habilidades</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-cyan-400">
    <div>HTML / CSS</div>
    <div>JavaScript</div>
    <div>Wordpress</div>
    <div>Astro</div>
    <div>React</div>
    <div>Tailwind CSS</div>
    <div>Figma</div>
    <div>Git / GitHub</div>
  </div>
</section>

<section id="projects" className="py-16 px-6 max-w-4xl mx-auto" data-aos="fade-up">
  <h2 className="text-3xl font-semibold mb-8">Proyectos Destacados</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Portafolio Profesional</h3>
      <p className="text-gray-400 mt-2">Proyectos en los que he trabajado de clientes que han plasmado su confianaz en mi trabajo.</p>
      <Link to="/projectgallery" className="text-cyan-400 text-sm underline mt-2 inline-block">Ver Portafolio</Link>


    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Dashboard Admin</h3>
      <p className="text-gray-400 mt-2">Proyectos personales que he realizado con tecnológias tales como Astro y React.</p>
      <Link to="/projectpersonal" className="text-cyan-400 text-sm underline mt-2 inline-block">Ver Proyectos</Link>
    </div>
  </div>
</section>


<section id="contact" className="py-16 px-6 max-w-4xl mx-auto text-center" data-aos="fade-up">
  <h2 className="text-3xl font-semibold mb-6">Contáctame</h2>
  <p className="text-gray-300 mb-4">¿Te interesa trabajar conmigo? ¡Hablemos!</p>
  <a href="https://wa.link/de39ak" className="px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition" target='_blank'>Ir a la Conversación</a>
  <div className="mt-8 space-x-4">
    <a href="https://www.linkedin.com/in/antonio-h-43715b234/" target="_blank" className="text-gray-400 hover:text-white">LinkedIn</a>

  </div>
  <div class="mt-8">
    <a href="../src/assets/Antonio H - CV.pdf" download className="text-sm text-gray-400 underline">Descargar CV PDF</a>
  </div>
</section>


<footer class="text-center py-6 text-gray-500">
  &copy; 2025 Ingeniero Antonio Herrera.
</footer>


<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>AOS.init();</script>
</div>  
    </>
  )
}

export default App
