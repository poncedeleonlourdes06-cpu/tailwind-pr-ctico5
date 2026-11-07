// Componente de la grilla informativa de artistas.

const artistas = [
  {
    id: 1,
    nombre: "Neon Pulse",
    genero: "Electrónica",
    escenario: "Main Stage",
    descripcion: "Ritmos electrónicos y sonidos futuristas para hacer vibrar al público.",
    imagen: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800"
  },
  {
    id: 2,
    nombre: "Red Flames",
    genero: "Rock alternativo",
    escenario: "Rock Stage",
    descripcion: "Guitarras potentes y una energía que se siente en cada canción.",
    imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800"
  },
  {
    id: 3,
    nombre: "DJ Voltage",
    genero: "Techno",
    escenario: "Main Stage",
    descripcion: "Una experiencia electrónica con mezclas intensas y mucho ritmo.",
    imagen: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800"
  },
  {
    id: 4,
    nombre: "Urban Kings",
    genero: "Rap / Hip Hop",
    escenario: "Urban Stage",
    descripcion: "Flow, freestyle y cultura urbana sobre el escenario.",
    imagen: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800"
  },
  {
    id: 5,
    nombre: "Black Thunder",
    genero: "Hard Rock",
    escenario: "Rock Stage",
    descripcion: "Sonidos fuertes y una puesta en escena explosiva.",
    imagen: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800"
  },
  {
    id: 6,
    nombre: "Luna Roja",
    genero: "Pop alternativo",
    escenario: "Main Stage",
    descripcion: "Melodías modernas que combinan emoción y energía.",
    imagen: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800"
  },
  {
    id: 7,
    nombre: "Street Beat",
    genero: "Trap",
    escenario: "Urban Stage",
    descripcion: "Beats urbanos y sonidos actuales que marcan tendencia.",
    imagen: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800"
  },
  {
    id: 8,
    nombre: "Electric Soul",
    genero: "Funk / Soul",
    escenario: "Main Stage",
    descripcion: "Una mezcla de groove, instrumentos y mucho movimiento.",
    imagen: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800"
  },
  {
    id: 9,
    nombre: "Dark Noise",
    genero: "Metal",
    escenario: "Rock Stage",
    descripcion: "Potencia, distorsión y una experiencia musical intensa.",
    imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800"
  },
  {
    id: 10,
    nombre: "Skyline",
    genero: "Indie Rock",
    escenario: "Urban Stage",
    descripcion: "Sonidos alternativos y canciones para disfrutar en vivo.",
    imagen: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800"
  }
];

const Lineup = ()=> {
  return (
    <section id="artistas" className="bg-neutral-950 text-white py-20 px-6">

      {/* ENCABEZADO */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          NUESTRO <span className="text-red-500">LINE UP</span>
        </h2>

        <p className="text-gray-400 text-lg">
          Diez artistas, tres escenarios y una experiencia inolvidable.
        </p>
      </div>

      {/* GRILLA DE ARTISTAS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {artistas.map((artista) => (
          <div
            key={artista.id}
            className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl shadow-black/40 border border-red-950/50 hover:scale-105 transition-transform duration-300"
          >

            {/* IMAGEN */}
            <img
              src={artista.imagen}
              alt={artista.nombre}
              className="w-full aspect-video object-cover"
            />

            {/* INFORMACIÓN */}
            <div className="p-5">

              <h3 className="text-2xl font-bold text-white mb-3">
                {artista.nombre}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {artista.descripcion}
              </p>

              <div className="flex items-center justify-between gap-2">

                <span className="bg-red-950 text-red-400 text-xs font-semibold px-3 py-2 rounded-full">
                  {artista.genero}
                </span>

                <span className="text-gray-300 text-xs font-medium">
                  {artista.escenario}
                </span>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Lineup;


