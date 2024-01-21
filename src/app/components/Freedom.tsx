import Image from "next/image";
import React from "react";
import { freedom } from ".";
import Link from "next/link";
import FreedomCarsoule from "./ui/FreedomCarsoule";

const Freedom = () => {
  return (
    <>
      <section className="bg-gray-200  md:flex   py-10 px-7 flex-col">
        <div className="flex justify-center">
          <div className="flex w-1/2 justify-center ">
            <h1 className="  text-center text-2xl md:text-5xl font-bold ">
              Wibbitz gives every team the freedom to create
            </h1>
          </div>
        </div>
        <div className="mt-4 px-4 py-6 hidden md:grid divide-x-2 divide-gray-300 divide-dashed  gap-2 grid-cols-3 ">
            
          {
            freedom.map((e)=>(
                <div 
                key={e.id}
                className="bg-gray-200  group rounded-md  hover:shadow-xl transition-all duration-200 flex  items-center flex-col py-5 px-2">
            <div className="">
              <Image
                className="w-"
                src={`${e.path}`}
                width={300}
                height={100}
                alt="hello"
              />
            </div>
            <div className="flex flex-col mt-9 items-center ">
              <h1 className="font-extrabold text-center text-xl">{e.heading}</h1>

              <h3 className="p-1 text-base mt-3 text-center font-bold">
                {e.text}
              </h3>
            </div>

            <Link
            className="invisible text-blue-700 underline group-hover:visible transition-all duration-100"
            href="#">Know more</Link>

                
               

          </div>

          
            ))
          }
        </div>


<div className="w-full justify-center flex" >
<FreedomCarsoule/>
</div>

      </section>
    </>
  );
};

export default Freedom;
