import { AnimatePresence, motion } from "framer-motion";

import { useTabContext } from "../hooks/useTabContext";
import { componentMap } from "../utils/utils";
import WindowTab from "./WindowTab";
import { useEffect } from "react";

type MobileBottomSheetProps = {
  className?: string;
};

const MobileBottomSheet = ({ className }: MobileBottomSheetProps) => {
  const { activeTabs, onClose } = useTabContext();

  const tab = activeTabs[0];


  // Lock background scrolling while sheet is open
  useEffect(() => {
    if (!tab) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [tab]);

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {tab && (
          <motion.div
            key={tab.id}
            className="fixed inset-0 z-50"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-[5px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => onClose(tab.id)}
            />

            {/* Bottom Sheet */}
            <motion.div
              className="absolute bottom-0 left-0 w-full"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <WindowTab
                title={tab.title}
                tabId={tab.id}
                className="rounded-b-none"
              >
                <div className="max-h-[calc(100dvh-120px)] overflow-y-auto">
                  {(() => {
                    const ContentComponent =
                      componentMap[tab.contentComponent];

                    return ContentComponent ? <ContentComponent /> : null;
                  })()}
                </div>
              </WindowTab>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileBottomSheet;