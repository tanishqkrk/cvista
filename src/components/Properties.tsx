"use client";
import { useState } from "react";
import { useElement } from "~/context/ElementContext";

export default function Properties() {
  const { selectedElement, setSelectedElement, setList, list } = useElement();

  const element = list.filter((i: Element) => i.id === selectedElement)[0];

  // const [element, setElement] = useState<Element>(
  //   list.filter((i: Element) => i.id === selectedElement)[0],
  // );
  // console.log(list.filter((i: Element) => i.id === selectedElement)[0] || {});

  // console.log(list.filter((i: Element) => i.id === selectedElement)[0]);

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
      {element && (
        <div>
          {element.type === "heading" ? (
            <div>
              <label className="text-lg font-semibold" htmlFor="heading">
                Heading
              </label>
              <input
                id="heading"
                value={
                  list.filter((i: Element) => i.id === selectedElement)[0]
                    .heading
                }
                onChange={(e) => {
                  setList((org: Element[]) => {
                    return [
                      ...org.filter((i: Element) => i.id !== selectedElement),
                      {
                        ...element,
                        heading: e.target.value,
                      },
                    ];
                  });
                }}
                type="text"
              />
            </div>
          ) : selectedElement?.type === "text" ? (
            <div>Text</div>
          ) : selectedElement?.type === "img" ? (
            <div>Image</div>
          ) : selectedElement?.type === "table" ? (
            <div>Table</div>
          ) : selectedElement?.type === "ulist" ? (
            <div>U List</div>
          ) : selectedElement?.type === "olist" ? (
            <div>O List</div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}
