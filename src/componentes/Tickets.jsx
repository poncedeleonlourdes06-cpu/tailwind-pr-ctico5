// Componente de tarjetas informativas de entradas/pases.

const Tickets = () => {
    return (
        <section id="entradas" className="bg-neutral-900 text-white py-20 px-6">

            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold">
                    NUESTROS <span className="text-red-500">TICKETS</span>
                </h2>
                <p className="text-gray-400 mt-3">
                    Elegí tu experiencia para vivir el festival.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 ">

                {/* GENERAL */}
                <a href="#general" className="bg-black border border-red-950 rounded-2xl p-8 text-center shadow-xl shadow-red-600/20 hover:border-red-500 hover:scale-105 transition-all duration-300">
                    <span className="text-6xl">🎟️</span>
                    <h3 className="text-2xl font-bold mt-5">GENERAL</h3>
                    <p className="text-red-500 text-3xl font-extrabold mt-3">
                        $45.000
                    </p>
                    <p className="text-gray-400 text-sm mt-2">Acceso al festival.</p>
                    <li className="text-gray-400 text-sm mt-2 list-none ">
                        <ul>Acceso a los 3 días.</ul>
                        <ul>Entrada a todos los escenarios generales.</ul>
                        <ul>Zona de food trucks.</ul>
                        <ul>Participación en actividades del festival.</ul>

                    </li>
                </a>

                {/* VIP */}
                <a href="#vip" className="bg-black border border-red-950 rounded-2xl p-8 text-center shadow-xl shadow-red-600/40 hover:border-red-600 hover:scale-105 transition-all duration-300">
                    <span className="text-6xl">⭐</span>
                    <h3 className="text-2xl font-bold mt-5">VIP</h3>
                    <p className="text-red-500 text-3xl font-extrabold mt-3">
                        $85.000
                    </p>
                    <p className="text-gray-400 text-sm mt-2">Una experiencia exclusiva.</p>
                    <li className="text-gray-400 text-sm mt-2 list-none ">
                        <ul>Acceso a los 3 días.</ul>
                        <ul>Sector preferencial frente al escenario.</ul>
                        <ul>Baños exclusivos.</ul>
                        <ul>Barra de bebidas sin fila.</ul>
                         <ul>Pulsera VIP y merchandising del festival.</ul>

                    </li>
                </a>

                {/* EXPERIENCIA ROCK */}
                <a href="#rock" className="bg-black border border-red-950 rounded-2xl p-8 text-center shadow-xl shadow-red-600/30 hover:border-red-500 hover:scale-105 transition-all duration-300">
                    <span className="text-6xl">🎸</span>
                    <h3 className="text-2xl font-bold mt-5">EXPERIENCIA ROCK</h3>
                    <p className="text-red-500 text-3xl font-extrabold mt-3">
                        $120.000
                    </p>
                    <p className="text-gray-400 text-sm mt-2">Viví el rock de cerca.</p>
                    <li className="text-gray-400 text-sm mt-2 list-none ">
                        <ul>Acceso a los 3 días.</ul>
                        <ul>Sector exclusivo cerca del escenario.</ul>
                        <ul>Acceso al backstage en horarios programados.</ul>
                        <ul>Meet & greet con artistas seleccionados</ul>
                        <ul>Remera oficial del festival.</ul>
                        <ul>Kit de merchandising exclusivo.</ul>
                    </li>
                </a>

            </div>
        </section>
    );
};

export default Tickets;
