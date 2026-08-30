// import MultiBlobContainer from "./components/blob/MultiBlobContainer";
// import BlobCanvas from "./components/blob/CanvasBlob";
import Home from "./components/Home";
import { TabContextProvider } from "./store/TabContext";
import CanvasBlobs from "./components/blob/CanvasBlob";

export default function App() {
  return (
    <>
     <CanvasBlobs/>
      <div className="w-ful h-full lg:h-screen flex items-center justify-center z-10 overflow-y-auto">
        <TabContextProvider>
          <Home />
          
        </TabContextProvider>
      </div>
    </>
  );
}
