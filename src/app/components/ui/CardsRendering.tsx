"use client";
import Autoplay from "embla-carousel-autoplay"
import React from "react";
import { cards } from "@/app/components/index";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardsRendering = () => {
  return (
    <>
      <Carousel

plugins={[
  Autoplay({
    delay: 2500,
    stopOnInteraction:false,
    stopOnFocusIn:false
  })
  
]}
        opts={{
          align: "start",
          duration: 50,
          loop: true,
        }}
        className="w-full mt-2 max-w-sm"
      >
        <CarouselContent>
          {cards.map((e) => (
            <CarouselItem key={e.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="flex px-3 flex-col py-3  items-center gap-4 rounded-md w-full ">
                  <div>
                    <div className="bg-gray-200 relative">
                      <Image
                        className="rounded-md  "
                        src="/images/review1.jpg"
                        width={200}
                        height={300}
                        alt="nohting"
                      />
                      <div className=" lg:w-28  lg:h-12 md:w-24 md:h-10 px-4 lg:px-0 flex justify-center rounded-lg ml-2 md:ml-4 py-2    bg-white bottom-2  absolute ">
                        <Image
                          className={`${e.id === 1 ? "w-10" : undefined}`}
                          src={e.path}
                          width={100}
                          height={50}
                          alt="nothing"
                        />
                      </div>
                    </div>
                  </div>

                  <div className=" flex mt-3 ml-4 ">
                    <h1 className="text-base font-semibold">{e.text}</h1>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default CardsRendering;
