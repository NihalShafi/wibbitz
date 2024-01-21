
'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import React from 'react'
import { freedom } from '..'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const FreedomCarsoule = () => {
  return (
    <>
    <Carousel

plugins={[
  Autoplay({
    delay: 2500,
  })
  
]}
        opts={{
          align: "center",
          duration: 50,
          loop: true,
        }}
        className="w-[75%] md:hidden mt-2  "
      >
        <CarouselContent className='flex items-center '
         >
        
            
            {
              freedom.map((e)=>(
                <CarouselItem 
                key={e.id}
                className='basis-[65%]'>
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
                <h1 className="font-extrabold text-center text-lg">{e.heading}</h1>
  
                <h3 className="p-1 text-xs mt-3 text-center font-bold">
                  {e.text}
                </h3>
              </div>
  
              <Button className='mt-3'>
              <Link
              
              href="#">Know more</Link>
              </Button>
  
                  
                 
  
            </div>
            </CarouselItem>
            
              ))
            }
          
        </CarouselContent>
        
    </Carousel>
    </>
  )
}

export default FreedomCarsoule