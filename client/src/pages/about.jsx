function About() {
  return (
    <main className="bg-gray-950 text-white min-h-screen flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold text-center">Tentang Game</h1>
      <div className="bg-transparent m-5 p-5 ring-1 rounded-2xl">
        <p className="text-center">
          Guess The Number adalah permainan tebak angka yang menguji logika,
          strategi, dan kemampuan berpikir pemain. Sistem akan memilih sebuah
          angka rahasia dalam rentang tertentu, dan pemain harus menebaknya
          dalam jumlah percobaan sesedikit mungkin. Setelah setiap tebakan,
          pemain akan menerima petunjuk apakah angka yang dimasukkan terlalu
          besar atau terlalu kecil. Gunakan petunjuk tersebut untuk mempersempit
          kemungkinan hingga menemukan angka yang benar dan mencetak skor
          terbaik.
        </p>
      </div>
      <div className="bubble bg-purple-500/70 left-20 -bottom-150"></div>
    </main>
  );
}

export default About;
