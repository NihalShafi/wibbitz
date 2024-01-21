import Image from "next/image";
import Button from "./ui/Button";

export const Branding = () => {
  return (
    <>
      <section className="mt-5 md:px-14 py-8 gap-5 md:gap-12 flex justify-center   items-center md:flex-row flex-col ">
        <div className="  flex md:w-[500px] bg-white items-center justify-center ">
          <Image
            className=" md:w-[400px] drop-shadow-2xl  "
            src="/images/HS.png"
            alt="Branding"
            width={300}
            height={300}
          />
        </div>

        <div className="flex mt-4 md:w-[50%]  md:px-10 py-5 w-full px-10  flex-col  ">
          <div className="flex p-5   ml-5 md:mt-6 flex-col  gap-y-4">
            <div className="flex flex-col  ">
              <div className="w-1/4 flex justify-center md:justify-start h-14">
                <div className="rounded-full shadow-lg flex justify-center  items-center bg-gradient-to-t from-orange-400   to-orange-500 w-14 h-14">
                  <Image
                    src="/images/edit-white.svg"
                    width={26}
                    height={35}
                    alt="white logo"
                  />
                </div>
              </div>
              <div className="flex flex-col  items-center gap-6">
                <h1 className="font-bold md:mt-3 mt-4 ml-4 md:ml-0 text-2xl md:text-4xl">
                  Match everything to your brand and style
                </h1>
              </div>
              <div className="w-full px-10 md:px-0">
                <h4 className="font-semibold mt-6 text-center md:text-start text-lg">
                  Add logo watermarks, custom video intros, text overlay styles,
                  a full-spectrum color palette, and upload your brand fonts.
                </h4>
              </div>
            </div>

            <div className="mt-3 flex flex-col items-center md:items-start md:flex-row w-full ">
              <Button />
            </div>
          </div>

          <div className="w-full flex flex-col  mt-6 items-center md:items-start ">
            <hr className="border-gray-300 w-[50%] border-dashed" />
            <q className="italic text-gray-400 mt-6 font-medium">
              Being able to crank out videos consistently, localize them for
              different regions, and still save resources, time, and energy has
              been a game changer.
            </q>
            <cite className="text-gray-400 mt-3 ">
              <strong>Charlie Reiff,</strong> Social Video Editor & Animator
            </cite>
            <Image
              className="mt-3"
              src="images/logo-hubspot.svg"
              width={65}
              height={65}
              alt="Usa logo"
            />
          </div>
        </div>
      </section>

      <section className="mt-5 md:px-14 py-8 bg-gray-200 gap-5 md:gap-12 flex md:flex-row-reverse justify-center   items-center  flex-col ">
        <div className="  flex md:w-[500px] items-center justify-center ">
          <Image
            className=" md:w-[400px] drop-shadow-2xl  "
            src="/images/HS.png"
            alt="Branding"
            width={300}
            height={300}
          />
        </div>

        <div className="flex mt-4 md:w-[50%]  md:px-10 py-5 w-full px-10  flex-col  ">
          <div className="flex p-5   ml-5 md:mt-6 flex-col  gap-y-4">
            <div className="flex flex-col  ">
              <div className="w-1/4 flex justify-center md:justify-start h-14">
                <div className="rounded-full shadow-lg flex justify-center  items-center bg-gradient-to-t from-yellow-400   to-yellow-300 w-14 h-14">
                  <Image
                    src="/images/lightning-white.svg"
                    width={26}
                    height={35}
                    alt="white logo"
                  />
                </div>
              </div>
              <div className="flex flex-col  items-center gap-6">
                <h1 className="font-bold md:mt-3 mt-4 ml-4 md:ml-0 text-2xl md:text-4xl">
                  Match everything to your brand and style
                </h1>
              </div>
              <div className="w-full px-10 md:px-0">
                <h4 className="font-semibold mt-6 text-center md:text-start text-lg">
                  Add logo watermarks, custom video intros, text overlay styles,
                  a full-spectrum color palette, and upload your brand fonts.
                </h4>
              </div>
            </div>

            <div className="mt-3 flex flex-col items-center md:items-start md:flex-row w-full ">
              <Button />
            </div>
          </div>

          <div className="w-full flex flex-col  mt-6 items-center md:items-start ">
            <hr className="border-gray-300 w-[50%] border-dashed" />
            <q className="italic text-gray-400 mt-6 font-medium">
              Being able to crank out videos consistently, localize them for
              different regions, and still save resources, time, and energy has
              been a game changer.
            </q>
            <cite className="text-gray-400 mt-3 ">
              <strong>Charlie Reiff,</strong> Social Video Editor & Animator
            </cite>
            <Image
              className="mt-3"
              src="images/USA-Today-logo_24.svg"
              width={65}
              height={65}
              alt="Usa logo"
            />
          </div>
        </div>
      </section>

      <section className="mt-5 md:px-14 py-8  gap-5 md:gap-12 flex justify-center   items-center md:flex-row flex-col ">
        <div className="  flex md:w-[500px] bg-white items-center justify-center ">
          <Image
            className=" md:w-[400px] drop-shadow-2xl  "
            src="/images/HS.png"
            alt="Branding"
            width={300}
            height={300}
          />
        </div>

        <div className="flex mt-4 md:w-[50%]  md:px-10 py-5 w-full px-10  flex-col  ">
          <div className="flex p-5   ml-5 md:mt-6 flex-col  gap-y-4">
            <div className="flex flex-col  ">
              <div className="w-1/4 flex justify-center md:justify-start h-14">
                <div className="rounded-full shadow-lg flex justify-center  items-center bg-gradient-to-t from-green-400   to-green-500 w-14 h-14">
                  <Image
                    src="/images/film-white.svg"
                    width={26}
                    height={35}
                    alt="white logo"
                  />
                </div>
              </div>
              <div className="flex flex-col  items-center gap-6">
                <h1 className="font-bold md:mt-3 mt-4 ml-4 md:ml-0 text-2xl md:text-4xl">
                  Speed up video production time
                </h1>
              </div>
              <div className="w-full px-10 md:px-0">
                <h4 className="font-semibold mt-6 text-center md:text-start text-lg">
                  React to breaking news and trending topics on every platform
                  with one-click resizing to landscape, square, and vertical
                  format
                </h4>
              </div>
            </div>

            <div className="mt-3 flex flex-col items-center md:items-start md:flex-row w-full ">
              <Button />
            </div>
          </div>

          <div className="w-full flex flex-col  mt-6 items-center md:items-start ">
            <hr className="border-gray-300 w-[50%] border-dashed" />
            <q className="italic text-gray-400 mt-6 font-medium">
              Wibbitz allows us to quickly create templates to share similar
              videos across multiple sites. A team of three people created
              videos analyzing several hundred NFL draft pick in just a few
              hours
            </q>
            <cite className="text-gray-400 mt-3 ">
              <strong>Charlie Pirrone,</strong> General Manager, Sport Media Group
            </cite>
            <Image
              className="mt-3"
              src="images/IHMe55.svg"
              width={105}
              height={65}
              alt="Usa logo"
            />
          </div>
        </div>
      </section>


      
    </>
  );
};
