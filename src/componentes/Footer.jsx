// Componente de tarjetas informativas de entradas/pases.


const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-12">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LOGO */}
        <div>
          <h2 className="text-2xl font-extrabold">
            RED <span className="text-red-500">VELOCITY</span>
          </h2>

          <p className="text-gray-400 text-sm mt-3">
            Tres días de música, energía y cultura urbana.
          </p>
        </div>

        {/* REDES SOCIALES */}
        <div>
          <h3 className="text-lg font-bold mb-5">
            REDES SOCIALES
          </h3>

          <div className="flex gap-5 flex-wrap">

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors">
              Instagram
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors">
              Facebook
            </a>

            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors">
              YouTube
            </a>

            <a href="https://x.com/" target="_blank" rel="noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors">
              X
            </a>

          </div>
        </div>

        {/* FORMULARIO */}
        <div>
          <h3 className="text-lg font-bold mb-3">
            NEWSLETTER
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            Recibí todas las novedades del festival.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">

            <input
              type="email"
              placeholder="Tu correo electrónico"
              required
              className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
            />

            <button
              type="submit"
              className="bg-red-700 hover:bg-red-600 rounded-lg py-3 font-bold transition-colors"
            >
              SUSCRIBIRME
            </button>

          </form>
        </div>

      </div>

      {/* CREDITOS */}
      <div className="max-w-6xl mx-auto border-t border-neutral-800 mt-12 pt-6 text-center">

        <p className="text-gray-500 text-sm">
          © 2027 Red Velocity Fest. Todos los derechos reservados.
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Desarrollado por:
          <a className=" flex gap-2 justify-center hover:text-red-600 transition-colors duration-300" href="https://github.com/poncedeleonlourdes06-cpu">Lourdes Ponce de León</a>
          <a className=" flex gap-2 justify-center hover:text-red-600 transition-colors duration-300" href="https://github.com/Laura125gh">Laura Ponce de León</a>
        </p>

      </div>

    </footer>
  );
};

export default Footer;
