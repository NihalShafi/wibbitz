import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex min-w-44 justify-center   p-6">
      {/* <div className=" flex lg:hidden  rounded-lg p-5  gap-5 items-center flex-col  bg-blue-300 ">
        <Image
          className="mt-3"
          width={150}
          height={150}
          alt="hero"
          src="/images/home-hero.svg"
        />
        <h2 
          className="font-bold  text-center font-sans
          text-3xl"
        >
          The quickest and easiest online video editor for every team
        </h2>
      </div> */}

      <div
        className="  flex rounded-lg p-9 w-full gap-5
      items-center 
      flex-col md:flex-row-reverse  md:justify-between "
      >
        <Image
          className="mt-3  w-full md:w-1/2"
          width={500}
          height={500}
          alt="hero"
          src="/images/home-hero.svg"
        />
        <div className="md:w-1/2 w-full">
          <h2 className="font-bold font-sans text-4xl md:text-6xl">
            The quickest and easiest online video editor for every team
          </h2>
          <div className="w-full mt-6 h-auto flex-col  flex ">
            <h3 className="md:text-xl text-lg font-bold">
              Wibbitz gives you the freedom to create short form video online in
              minutes – no experience necessary.
            </h3>
            
          </div>
          <div className="flex mt-4 h w-full max-w-[500px] ">
              <form>
                <input
                  type="text"
                  className="md:max-w-48 
                  w-36
                  rounded-md text-xs h-10 md:h-12 ps-2 ring-1 ring-blue-400 transition-transform duration-300 outline-offset-0 outline-1 focus:outline-blue-500 "
                  placeholder="Enter Your work email"
                />
                <Button className="ml-3 h-12" type='submit'  variant={"default"}>Get a demo</Button>
                {/* <input
                  value="Get a Demo"
                  type="submit"
                  className="md:w-28
                  w-20
                  h-10
                  text-xs
                  md:text-[15px]
                   md:h-12 text-white ml-2 rounded-lg transition-all duration-300 hover:cursor-pointer hover:bg-blue-600 active:bg-blue-700 bg-blue-500"
                /> */}
              </form>
            </div>
        </div>
      </div>
    </section>
  );
};
