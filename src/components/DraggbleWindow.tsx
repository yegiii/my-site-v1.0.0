import Draggable from "react-draggable";
import WindowTab from "./WindowTab";
import { useTabContext } from "../hooks/useTabContext";
import { AnimatePresence, motion } from "framer-motion";
import { componentMap } from "../utils/utils";

type DraggableWindowProps = {
  className?: string;
};

const DraggableWindow: React.FC<DraggableWindowProps> = ({
  className,
}) => {
  const { activeTabs } = useTabContext();

  return (
    <div className={className}>
      <AnimatePresence>
        {activeTabs.map((tab) => {
          const ContentComponent = componentMap[tab.contentComponent];

          return (
            <Draggable
              key={tab.id}
              defaultPosition={{
                x: -900,
                y: -100,
              }}
              cancel=".close-btn"
            >
              <div
                style={{
                  position: "fixed",
                  zIndex: 100 + tab.zIndex,
                }}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                    "--window-blur": "0px",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    "--window-blur": "16px",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    "--window-blur": "0px",
                  }}
                  transition={{
                    opacity: {
                      duration: 0.3,
                    },
                    scale: {
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    "--window-blur": {
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                >
                  <div className="handle cursor-move p-2.5 w-3xl">
                    <WindowTab
                      title={tab.title}
                      tabId={tab.id}
                    >
                      <div className="max-h-80 overflow-y-scroll">
                        {ContentComponent && <ContentComponent />}
                      </div>
                    </WindowTab>
                  </div>
                </motion.div>
              </div>
            </Draggable>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default DraggableWindow;