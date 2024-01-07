"use client";
import { useElement } from "~/context/ElementContext";
export default function Elements() {
  const { selectedElement, setSelectedElement, list, setList } = useElement();

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
                const newElement = {
                  id: crypto.randomUUID(),
                  order: Date.now(),
                  type: item.type,
                  heading: item.type === "heading" ? "Heading" : "",
                  text: "",
                  img:
                    item.type === "img"
                      ? {
                          url: "",
                          width: 100,
                          height: 100,
                        }
                      : {},
                  table:
                    item.type === "table"
                      ? {
                          width: [],
                          height: [],
                          body: [[{ text: "", id: crypto.randomUUID() }]],
                        }
                      : {},
                  uList:
                    item.type === "ulist"
                      ? {
                          items: [],
                        }
                      : {},
                  oList:
                    item.type === "olist"
                      ? {
                          items: [],
                        }
                      : {},
                };
                setList((org: Element[]) => {
                  return [...org, newElement];
                });
                setSelectedElement(newElement.id);
              }}
              className="pz-3 flex w-full  flex-col items-center gap-3 rounded-lg border-2 border-blue bg-blue p-2 "
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
