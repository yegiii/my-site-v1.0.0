import Draggable from "react-draggable";
import WindowTab from "./WindowTab";
import { useTabContext } from "../hooks/useTabContext";
import { AnimatePresence, motion } from "framer-motion";
import { componentMap } from "../utils/utils";

type DraggableWindowProps = {
  className?: string;
};

const DraggableWindow: React.FC<DraggableWindowProps> = ({ className }) => {
  const { activeTabs } = useTabContext();

  return (
    <div className={className}>
      <AnimatePresence>
        {activeTabs.map((tab) => {
          const ContentComponent = componentMap[tab.contentComponent];

          return (
            <motion.div
              initial={{
                opacity: 0,
                "--window-blur": "0px",
                // WebkitBackdropFilter: "blur(0px)",
                scale: 0,
              }}
              animate={{
                opacity: 1,
                "--window-blur": "24px",
                // WebkitBackdropFilter: "blur(18px)",
                scale: 1,
              }}
              exit={{
                opacity: 0,
                "--window-blur": "0px",
                // backdropFilter: "blur(0px)",
                // WebkitBackdropFilter: "blur(0px)",
                scale: 0,
              }}
              transition={{
                opacity: {
                  duration: 0.3,
                },
                scale: {
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                },
                backdropFilter: {
                  duration: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              <Draggable
                defaultPosition={{ x: -900, y: -100 }}
                cancel=".close-btn"
              >
                <div
                  style={{
                    position: "fixed",
                    zIndex: 100 + tab.zIndex,
                  }}
                >
                  <div className="handle cursor-move p-2.5 w-3xl">
                    <WindowTab title={tab.title} tabId={tab.id}>
                      <div className="max-h-80 overflow-y-scroll">
                        {ContentComponent && <ContentComponent />}
                      </div>
                    </WindowTab>
                  </div>
                </div>
              </Draggable>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default DraggableWindow;
