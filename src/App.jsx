import { useState } from "react";
import Tours from "./components/Tours";
import Data from "./components/Data";

function App() {
  const [tours, setTours] = useState(Data);

  const handleRemoveTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <div className="flex items-center justify-center gap-5 h-screen flex-col">
        <div className="text-2xl font-semibold">No Tours Left</div>
        <button
          onClick={() => setTours(Data)}
          className="border bg-gray-300 py-2 italic px-4 text-lg rounded-xs cursor-pointer shadow-xl hover:scale-95 transition ease-in-out"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-5 flex-col m-5">
      <h1 className="md:text-6xl text-4xl uppercase italic tracking-wide font-bold text-[#0C175E] mx-auto">Incredible Journeys</h1>

      <Tours tours={tours} handleRemoveTour={handleRemoveTour} />
    </div>
  );
}

export default App;
