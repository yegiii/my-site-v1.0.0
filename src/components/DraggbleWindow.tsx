import Draggable from "react-draggable";
import WindowTab from "./WindowTab";
import { useTabContext } from "../hooks/useTabContext";

const DraggableWindow: React.FC = () => {
  const { activeTabs } = useTabContext();

  console.log("activeTabs", activeTabs);
  return (
    <>
      {activeTabs.map((tab) => (
        <Draggable key={tab.id} defaultPosition={{ x: 600, y: -250  }}>
          <div style={{ position: "fixed" , zIndex: tab.zIndex }}>
            <div className={`handle cursor-move p-2.5 w-96`}>
              <WindowTab title={tab.title} tabId={tab.id}>{tab.content}</WindowTab>
              {/* WindowTab is now draggable via the outer handle */}
            </div>
          </div>
        </Draggable>
      ))}
    </>
  );
};

export default DraggableWindow;
