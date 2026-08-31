// import MultiBlobContainer from "./components/blob/MultiBlobContainer";
// import BlobCanvas from "./components/blob/CanvasBlob";
import Home from "./components/Home";
import { TabContextProvider } from "./store/TabContext";
import CanvasBlobs from "./components/blob/CanvasBlob";
import DraggableWindow from "./components/DraggbleWindow";
import MobileBottomSheet from "./components/MobileBottomSheet";

export default function App() {
  return (
    <>
      <CanvasBlobs />
      <div className="w-full h-full lg:h-screen flex items-center justify-center z-10 overflow-y-auto">
        <TabContextProvider>
          <Home />
          <DraggableWindow className={"hidden lg:block "} />
          <MobileBottomSheet className={"lg:hidden "} />
        </TabContextProvider>
      </div>
    </>
  );
}
