import { useContext } from "react";
import { EntryContext } from "../context/EntryContext";

const useEntries = () => {
  const context = useContext(EntryContext)
  if (context === undefined) {
    throw new Error('useUser must be called within an EntryContext Provider!!!')
  }
  return context
}

export { useEntries }