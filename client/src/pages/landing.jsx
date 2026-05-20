import Navbar from "./navbar";

function Landing() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-950 min-h-screen flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold text-white text-center">
          Selamat Datang di Game Tebak Angka
        </h1>
        <p className="capitalize text-gray-300 text-center">
          dibuat oleh kaana dan nara
        </p>
        <div className="absolute w-50 h-50 bg-purple-500 rounded-full left-2 -top-20 blur-3xl opacity-70">
        </div>
        <div className="absolute w-50 h-20 bg-blue-500 rounded-full right-5 -bottom-10 blur-3xl opacity-70">
        </div>
      </main>
    </>
  );
}

export default Landing;
