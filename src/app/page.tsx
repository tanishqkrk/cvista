"use client";
import Link from "next/link";
import Elements from "~/components/Elements";
import PDF from "~/components/PDF";
import Properties from "~/components/Properties";
import { ElementProvider } from "~/context/ElementContext";
export default function HomePage() {
  return (
    <ElementProvider>
      <div className=" text-blue flex  h-[80vh] w-[90vw]  justify-center gap-6 divide-x-[1px] divide-gray-600 px-3">
        <div className="bg-grey w-1/5 rounded-xl p-5  shadow-2xl">
          <Elements />
        </div>
        <div className="bg-grey w-1/5 rounded-xl p-5 shadow-2xl ">
          <Properties />
        </div>
        <div className="bg-grey w-3/5 rounded-xl p-5 shadow-2xl ">
          <PDF />
        </div>
        {/* <div></div> */}
      </div>
    </ElementProvider>
  );
}
