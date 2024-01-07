import { createContext, useContext, useEffect, useState } from "react";
import { Element } from "~/interfaces/ELementInterface";

const ElementContext = createContext<{
  selectedElement: Element | null;
  setSelectedElement: React.Dispatch<React.SetStateAction<Element | null>>;
} | null>(null);

function ElementProvider({ children }: { children: React.ReactNode }) {
  const [selectedElement, setSelectedElement] = useState<Element | null>();

  // useEffect(() => {
  //   console.log(selectedElement);
  // }, [selectedElement]);

  return (
    <ElementContext.Provider value={{ selectedElement, setSelectedElement }}>
      {children}
    </ElementContext.Provider>
  );
}

export function useElement() {
  return useContext(ElementContext);
}
export { ElementProvider };
