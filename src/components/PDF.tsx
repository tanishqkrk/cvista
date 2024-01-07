"use client";
import { useState } from "react";
import { useElement } from "~/context/ElementContext";

export default function PDF() {
  const { selectedElement, setSelectedElement, setList, list } = useElement();

  return (
    <div className="pdf rounded-lg bg-white">
      {list && (
        <div>
          {list?.map((item: Element) => {
            if (item.type === "heading") {
              return (
                <div
                  className="m-3 cursor-pointer text-3xl font-bold text-black"
                  onClick={() => setSelectedElement(item.id)}
                >
                  {item.heading}
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
