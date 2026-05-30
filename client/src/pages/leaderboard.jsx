function Leaderboard() {
  return (
    <main className="bg-gray-950 text-white min-h-screen flex flex-col items-center justify-center gap-2">
      <div className="bg-gray-800 w-100 rounded-xl p-2">
        <h1 className="text-3xl font-bold text-center">Leaderboard</h1>
        <div className="bg-transparent flex flex-col gap-3 m-5 p-5 rounded-2xl">
          {/* Leaderboard content will go here */}
          <div className="flex bg-amber-500 font-bold rounded-lg p-2 justify-around">
            <p>John doe</p>
            <p>100 points</p>
          </div>
          <div className="flex bg-gray-600 font-bold rounded-lg p-2 justify-around">
            <p>John doe</p>
            <p>80 points</p>
          </div>
          <div className="flex bg-orange-900 font-bold rounded-lg p-2 justify-around">
            <p>John doe</p>
            <p>60 points</p>
          </div>
          <div className="flex bg-mist-700 font-bold rounded-lg p-2 justify-around">
            <p>John doe</p>
            <p>50 points</p>
          </div>
          <div className="flex bg-mist-700 font-bold rounded-lg p-2 justify-around">
            <p>John doe</p>
            <p>50 points</p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Leaderboard;
