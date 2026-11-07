// COMPONENTE DE NAVEGACIÓN Y LOGO



const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-md bg-red-950/90 flex flex-col items-center py-4 gap-3">

      {/* LOGO */}
      <img
        className="w-55 object-contain"
        src="https://scontent.fctc1-1.fna.fbcdn.net/v/t1.15752-9/892088222_1504425671621922_3184895542261020895_n.png?stp=dst-png_s960x960&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=FgPGR9F22kYQ7kNvwH3LwdL&_nc_oc=Adr3pkYS5adIoz3qwHBnO0W0tDsPk9IhobUsy7DWYJh0FOnp9rQeRd8K1ewNkN9siDs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fctc1-1.fna&_nc_ss=7a22e&oh=03_Q7cD6wGR1aCi7aToXHeA6L-nHXvMv-lK2z6BwGi1xymyL7dZnA&oe=6B15FBB9"
        alt="RED VELOCITY FEST"
      />

      {/* ENLACES */}
      <div className="flex items-center justify-center gap-6 flex-wrap">

        <a href="#inicio"
          className="text-white font-semibold px-5 py-2 rounded-lg hover:bg-red-600 hover:scale-105 transition-all duration-300">
          INICIO
        </a>

        <a href="#entradas"
          className="text-white font-semibold px-5 py-2 rounded-lg hover:bg-red-600 hover:scale-105 transition-all duration-300">
          BOLETERÍA
        </a>

        <a href="#info"
          className="text-white font-semibold px-5 py-2 rounded-lg hover:bg-red-600 hover:scale-105 transition-all duration-300">
          INFO
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
