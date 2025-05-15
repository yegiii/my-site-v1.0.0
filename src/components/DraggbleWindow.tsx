import Draggable from "react-draggable";
import WindowTab from "./WindowTab";
import { useTabContext } from "../hooks/useTabContext";
import { AnimatePresence, motion } from "framer-motion";

const DraggableWindow: React.FC = () => {
  const { activeTabs } = useTabContext();

  console.log("activeTabs", activeTabs);
  return (
    <>
      <AnimatePresence>
        {activeTabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ scale: 0, opacity: 0, y: -100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <Draggable key={tab.id} defaultPosition={{ x: 600, y: -250 }}>
              <div style={{ position: "fixed", zIndex: tab.zIndex }}>
                <div className={`handle cursor-move p-2.5 w-96`}>
                  <WindowTab title={tab.title} tabId={tab.id}>
                    {tab.content}
                  </WindowTab>
                </div>
              </div>
            </Draggable>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default DraggableWindow;
