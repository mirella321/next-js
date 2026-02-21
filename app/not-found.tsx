export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 text-white px-6 text-center">
      
      <h1 className="text-8xl md:text-9xl font-black drop-shadow-lg animate-pulse">
        404
      </h1>

      <h2 className="mt-6 text-2xl md:text-3xl font-bold">
        Ups... Nie ma takiej strony 
      </h2>

      <p className="mt-4 max-w-md text-lg opacity-90">
        Sprawdziliśmy pod kanapą, za serwerem i w lodówce.
        Niestety — nic tam nie ma.
      </p>

      <p className="mt-2 text-sm opacity-80 italic">
        Możliwe przyczyny: literówka, czarna dziura albo frontend się zbuntował.
      </p>

      <a
        href="/"
        className="mt-8 inline-block bg-white text-green-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:bg-gray-100 transition-transform duration-200"
      >
        Zabierz mnie do domu 🏠
      </a>

      <div className="absolute bottom-6 text-xs opacity-70">
        Error 404: Strona nie istnieje... tak jak Twoje stare commit message'y 👀
      </div>
    </div>
  );
}