import { createContext, useContext, useEffect, useState } from "react";
import { Element } from "~/interfaces/ELementInterface";

const ElementContext = createContext(null);

function ElementProvider({ children }: { children: React.ReactNode }) {
  const [selectedElement, setSelectedElement] = useState<string>("");
  const [list, setList] = useState<Element[]>([]);

  useEffect(() => {
    console.table(list);
  }, [list]);

  return (
    <ElementContext.Provider
      value={{ selectedElement, setSelectedElement, list, setList }}
    >
      {children}
    </ElementContext.Provider>
  );
}

export function useElement() {
  return useContext(ElementContext);
}
export { ElementProvider };
