import { createContext, useCallback, useMemo, useState } from "react";
import type { SectionDataType } from "../components/Home";

type EnhancedTabType = SectionDataType & { zIndex: number };

// 1. Define the context type
type TabContextType = {
  activeTabs: EnhancedTabType[];
  setActiveTabs: React.Dispatch<React.SetStateAction<EnhancedTabType[]>>;
  isWindowOpen: boolean;
  setIsWindowOpen: (isOpen: boolean) => void;
  onClose: (tabId: number) => void;
  handleTabClick: (clickedTab: SectionDataType) => void;
  bringToFront: (tabId: number) => void; // New function
};

// 2. Create context with proper typing and default values
const TabContext = createContext<TabContextType>({
  activeTabs: [],
  setActiveTabs: () => {},
  isWindowOpen: false,
  setIsWindowOpen: () => {},
  onClose: () => {},
  handleTabClick: () => {},
  bringToFront: () => {}, // Default implementation
});

// 3. Create a provider component
const TabContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTabs, setActiveTabs] = useState<EnhancedTabType[]>([]);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [maxZIndex, setMaxZIndexes] = useState(10);

  const bringToFront = useCallback(
    (tabId: number) => {
      const newZIndex = maxZIndex + 1;
      setActiveTabs((prev) =>
        prev.map((tab) =>
          tab.id === tabId ? { ...tab, zIndex: newZIndex } : tab
        )
      );
      setMaxZIndexes(newZIndex);
    },
    [maxZIndex]
  );

  const onClose = useCallback((tabId: number) => {
    setActiveTabs((prev) => prev.filter((tab) => tab.id !== tabId));
    if (activeTabs.length === 1) {
      setIsWindowOpen(false);
    }
  }, []);

  const handleTabClick = useCallback(
    (clickedTab: SectionDataType) => {
      // If no tabs are open or this is the first click
      if (!isWindowOpen || activeTabs.length === 0) {
        console.log("no tabs open");
        const newZIndex = maxZIndex + 1;
        setActiveTabs([{ ...clickedTab, zIndex: newZIndex }]);
        setIsWindowOpen(true);
        return;
      }

      // User clicked on the already open tab
      if (activeTabs.some((tab) => tab.id === clickedTab.id)) {
        console.log("already open");
        bringToFront(clickedTab.id);
      } else {
        // User clicked on a different tab
        console.log("different tab");
        const newZIndex = maxZIndex + 1;
        setActiveTabs((prev) => [
          { ...clickedTab, zIndex: newZIndex },
          ...prev,
        ]);
        setMaxZIndexes(newZIndex);
      }
    },
    [isWindowOpen, activeTabs, maxZIndex, bringToFront]
  );

  const contextValue = useMemo(
    () => ({
      isWindowOpen,
      setIsWindowOpen,
      activeTabs,
      setActiveTabs,
      onClose,
      handleTabClick,
      bringToFront,
    }),
    [isWindowOpen, activeTabs, onClose, handleTabClick, bringToFront]
  );

  return (
    <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
  );
};

export { TabContextProvider, TabContext };
