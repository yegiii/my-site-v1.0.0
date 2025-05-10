import BlobMover0 from "./components/BlobMover0";
import BlobMover1 from "./components/BlobMover1";
import BlobMover3 from "./components/BlobMover3";
import BlobMover2 from "./components/BlobMover3";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <BlobMover0 />
      <BlobMover1 />
      <BlobMover2 />
      <BlobMover3 />
      <div className="w-full h-screen flex items-center justify-center z-10">
        <Home />
      </div>
    </>
  );
}
