// Componente de portada e información principal.

const Hero = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-950 via-neutral-900 to-black flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-10">

        TUS BANDAS FAVORITAS AHORA CON VOS
      </h1>

      <div className="max-w-3xl text-white space-y-6">

        <section>
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            FECHAS
          </h2>
          <p>
            <li className=" list-none">
              <ul>15 de enero de 2027</ul>
              <ul>16 de enero de 2027</ul>
              <ul>17 de enero de 2027</ul>
            </li>

          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            PRÓXIMOS LUGARES
          </h2>
          <p>
            <p>
              <li className=" list-none flex flex-col items-center gap-2">
                <ul>Catamarca</ul>
                <ul>Tucumán</ul>
                <ul>La Rioja</ul>
                <ul>Jujuy</ul>
                <ul>Salta</ul>
              </li>

            </p>
          </p>
        </section>

        <div className="group relative inline-block">
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            ESLOGAN
          </h2>


          <p className="font-extrabold text-white text-2xl tracking-wide transition-all duration-300 group-hover:text-red-700">
            TRES DÍAS DE MÚSICA, ENERGÍA Y CULTURA URBANA.
          </p>

          <span className=" absolute -top-6 left-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
            🎵
          </span>

          <span className="absolute -top-6 right-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
            🎶
          </span>

        </div>
      
      </div>

      <div className>
        <a href="" className=" bg-red-600 flex m-12 p-4 h-15 w-45 items-center justify-center text-[24px] text-white font-semibold px-5 py-2 rounded-lg hover:bg-red-800 hover:scale-109 transition-all duration-300">Ver Entradas</a>
      </div>

    </main>
  );
};

export default Hero;
