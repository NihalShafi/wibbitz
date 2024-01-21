
import Image from "next/image";
import React from "react";
import { cards } from ".";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardsRendering from "./ui/CardsRendering";

const Cards = () => {
  return (
    <>
      <section className="flex px-14 py-10  flex-col">
        <div className="flex flex-col w-full md:w-1/2 items-center md:items-start md:flex-row mt-4">
          <h1 className="text-2xl  md:text-5xl leading-6 font-bold ">
            Create video like these leading brands
          </h1>
        </div>

        <div className="md:grid w-full mt-5  hidden gap-3  grid-cols-3 px-6 py-3">
          {cards.map((e) => (
            <div
              key={e.id}
              className="flex md:flex-col    bg-white p-6   rounded-xl items-center"
            >
              <div className="bg-gray-200 relative">
                <Image
                  className="rounded-md"
                  src="/images/review1.jpg"
                  width={300}
                  height={300}
                  alt="nohting"
                />
                <div className=" lg:w-28  lg:h-12 md:w-24 md:h-10 px-4 lg:px-0 flex justify-center rounded-lg ml-2 md:ml-4 py-2    bg-white bottom-2  absolute ">
                  <Image src={e.path} width={100} height={50} alt="nothing" />
                </div>
              </div>
              <div className="mt-4 flex  ml-5">
                <h1 className="font-bold text-lg">{e.text}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:hidden flex justify-center items-center">
          <CardsRendering />
        </div>

        {/* <div className="md:grid w-full mt-5  gap-3  grid-cols-3 px-6 py-3">
          
          {
            cards.map((e)=>(
              <div key={e.id} 
              className="flex md:flex-col    bg-white p-6   rounded-xl items-center">
            <div className="bg-gray-200 relative">
              <Image
                className="rounded-md"
                src="/images/review1.jpg"
                width={300}
                height={300}
                alt="nohting"
              />
              <div className=" lg:w-28  lg:h-12 md:w-24 md:h-10 px-4 lg:px-0 flex justify-center rounded-lg ml-2 md:ml-4 py-2    bg-white bottom-2  absolute ">
                <Image
                  src={e.path}
                  width={100}
                  height={50}
                  alt="nothing"
                />
              </div>
            </div>
            <div className="mt-4 flex  ml-5">
              <h1 className="font-bold text-lg">
                {e.text}
              </h1>
            </div>
          </div>
            ))
          }
          
          
        </div> */}
      </section>
    </>
  );
};

export default Cards;
