import Image from "next/image"
import { itmes } from "./index"


export const NavBar = () => {



    // <div className="flex flex-col bg-white p-6   rounded-xl items-center">
    //         <div className="bg-gray-200 relative">
    //           <Image
    //             className="rounded-md"
    //             src="/images/review1.jpg"
    //             width={300}
    //             height={300}
    //             alt="nohting"
    //           />
    //           <div className=" md:w-28 md:h-12 w-20 h-10  flex justify-center rounded-lg ml-2 md:ml-4 py-2    bg-white bottom-2  absolute ">
    //             <Image
    //               src="/images/logo-nbc.svg"
    //               width={100}
    //               height={50}
    //               alt="nothing"
    //             />
    //           </div>
    //         </div>
    //         <div className="mt-4">
    //           <h1 className="font-semibold textlg">
    //             How NBC enhances their content offering with custom video
    //             automation
    //           </h1>
    //         </div>
    //       </div>
    
    return (
        <div className="flex  z-50 backdrop-blur-md bg-white-500/30 h-16 items-center w-full p-5 justify-between sticky top-0 inset-x-0 ">
            <div className="">
                <Image
                src="/images/logo.svg"
                width={100}
                height={100}
                alt="wibitz"/>
            </div>

            <div className="lg:block hidden">
                {itmes.map((e)=>(
                    <div key={e.id}>{e.name}</div>
                )

                )}
            </div>

            <div className="">
                <Image
                src="/images/logo.svg"
                width={100}
                height={100}
                alt="wibitz"/>
            </div>            
        </div>
    )
}