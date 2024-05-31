import { TypewriterEffectSmooth } from "@/components/typewriter-effect";
import { Button } from "@/components/ui/button";
import UndrawIcon from "@/public/undraw";
import Image from "next/image";


const Home =  () => {
  

    const words = [
      {
        text: "Your",
      },
      {
        text: "Happiness,",
      },
      {
        text: "Our",
      },
      {
        text: "Mission",
      },
      {
        text: "Shopy.",
        className: "text-blue-500 dark:text-blue-500 -skew-x-4",
      },
    ];
    return (
      <div className="flex flex-col w-full  items-center justify-center h-[40rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Button>Shop Now</Button>
           <Button variant="outline">Learn More</Button>
        </div>

        <Image 
        className="absolute bottom-32 right-32 rotate-[20deg]"
        src="/skirt.png" 
        alt="skirt"
        width={100} 
        height={300}></Image>

        <Image 
        className="absolute bottom-52 left-40  -rotate-[20deg] "
        src="/tshirt.png" 
        alt="tshirt"
        width={100} 
        height={300}></Image>

        <Image 
        className="absolute top-32 left-32  rotate-[20deg] "
        src="/tie.png" 
        alt="tie"
        width={100} 
        height={300}></Image>

        <Image 
        className="absolute top-32 right-32  -rotate-[20deg]"
        src="/dress.png" 
        alt="dress"
        width={100} 
        height={300}></Image>

        <Image 
        className="absolute top-32 left-[42rem]  animate-slide-up-down"
        src="/binoculars.png" 
        alt="bino"
        width={80} 
        height={300}></Image>
        
        <div className="absolute bottom-3 left-[24rem]">
          <UndrawIcon/>
        </div>


      </div>
    
  )
}

export default Home