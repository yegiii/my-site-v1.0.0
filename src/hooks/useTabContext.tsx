import { useContext } from "react";
import { TabContext } from "../store/TabContext";

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabContextProvider");
  }
  return context;
};