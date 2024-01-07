"use client";
import { useElement } from "~/context/ElementContext";
export default function Elements() {
  const { selectedElement, setSelectedElement } = useElement();

  interface NewElement {
    title: string;
    type: string;
    icon: string;
  }

  const elements: NewElement[] = [
    {
      title: "Heading",
      type: "heading",
      icon: "heading.svg",
    },
    {
      title: "Text",
      type: "text",
      icon: "text.svg",
    },
    {
      title: "Image",
      type: "img",
      icon: "img.svg",
    },
    {
      title: "Table",
      type: "table",
      icon: "table.svg",
    },
    {
      title: "U. List",
      type: "ulist",
      icon: "ul.svg",
    },
    {
      title: "O. List",
      type: "olist",
      icon: "ol.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-8 text-white">
      <div className="flex flex-col gap-0">
        <div className="text-xl font-bold text-white">Elements</div>
        <span className="text-md  text-slate-400">
          Click on an element to add it to your PDF.
        </span>
      </div>
      <div className="elements my-3 grid  w-full  grid-cols-2 justify-items-center gap-6 align-middle">
        {elements?.map((item: NewElement) => {
          return (
            <button
              onClick={() => {
                setSelectedElement({
                  id: "0",
                  order: 1,
                  type: item.type,
                });
              }}
              className="border-blue pz-3 bg-blue  flex w-full flex-col items-center gap-3 rounded-lg border-2 p-2 "
            >
              <div>
                <img className="w-6" src={`/${item.icon}`} alt="" />
              </div>
              <div className="text-sm font-bold text-black">{item.title}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
