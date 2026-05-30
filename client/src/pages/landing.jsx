import About from "./about.jsx";

function Landing() {
  return (
    <>
      <main className="bg-gray-950 min-h-screen flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold text-white text-center">
          Selamat Datang di Game Tebak Angka
        </h1>
        <p className="capitalize text-gray-300 text-center">
          dibuat oleh kaana dan nur
        </p>
        <div className="bubble bg-purple-500 left-2 -top-20"></div>
        <div className="bubble bg-blue-500 right-5 -bottom-10"></div>
      </main>
      <About />
    </>
  );
}

export default Landing;
