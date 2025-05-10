import BlobMover0 from "./components/BlobMover0";
import BlobMover from "./components/BlobMover0";
import BlobMover1 from "./components/BlobMover1";
import BlobMover3 from "./components/BlobMover3";
import BlobMover2 from "./components/BlobMover3";
import BlobShape from "./components/BlobShape";

export default function App() {
  return (
    // <div className="relative w-full min-h-screen overflow-hidden">
    //   {/* Bubbles - Now with guaranteed colors */}
    //   {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
    //     <Bubble key={i} index={i} speedMultiplier={speed} />
    //   ))}

    //   {/* Content */}
    //   <div className="relative z-10">
    //     <Home />
    //   </div>

    //   {/* Speed Controls */}
    //   <div className="fixed bottom-4 right-4 z-50 flex gap-2 bg-black/70 p-3 rounded-lg backdrop-blur-sm">
    //     <button
    //       onClick={() => setSpeed(0.5)}
    //       className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
    //     >
    //       Faster
    //     </button>
    //     <button
    //       onClick={() => setSpeed(1)}
    //       className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
    //     >
    //       Normal
    //     </button>
    //     <button
    //       onClick={() => setSpeed(2)}
    //       className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
    //     >
    //       Slower
    //     </button>
    //   </div>
    // </div>

    <div className="flex items-center justify-center w-screen h-screen filter blur-xl">
      <BlobMover0 />
      <BlobMover1 />
      <BlobMover2 />
      <BlobMover3 />
    </div>
  );
}
