
import React from "react";
import { images } from "./index";
import Image from "next/image";
const Trusted = () => {
  return (
    <section className="flex flex-col p-10 ">
      <h1 className="text-lg text-center font-extrabold ">
        Trusted by content creators across the world
      </h1>
      <div className="grid grid-cols-2 justify-items-center lg:justify-center w-full md:grid-cols-4 box-border gap-4  lg:flex mt-4 ">
        {images.map((e, ) => (
          <div key={e.id} 
          className="w-20 flex  justify-center">
            <Image
            
              className={`md:w-20  md:h-20 h-16 w-16  ${e.id === 4 ? "w-8 lg:w-10" : null}`}
              src={`${e.link}`}
              width={100}
              height={100}
              alt={`${e.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trusted;
