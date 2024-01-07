"use client";
import { useElement } from "~/context/ElementContext";

export default function Properties() {
  const { selectedElement, setSelectedElement } = useElement();

  return (
    <div>
      <div>
        <div className="flex flex-col gap-0">
          <div className="text-xl font-bold text-white">Properties</div>
          <span className="text-md  text-slate-400">
            Format your selected element
          </span>
        </div>
      </div>
      <div>{selectedElement?.type}</div>
    </div>
  );
}
