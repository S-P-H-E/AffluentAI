import Image from "next/image";
import Cover from '@/public/cover.png'
import {BsArrowRightShort} from 'react-icons/bs'
import Tech from "@/components/Tech";

export default function Home() {
  return (
    <>
      <div className="bg-[var(--bgcover)] h-screen">
        <div className="p-10 flex justify-between items-center">
          <h1 className="font-medium text-xl">AffluentAI</h1>
          <div className="flex gap-10">
            <div className="flex flex-col group">
              <button className="font-medium">About Us</button>
              <div className="bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
            </div>
            <div className="flex flex-col group">
              <button className="font-medium">Our Services</button>
              <div className="bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
            </div>
            <div className="flex flex-col group">
              <button className="font-medium">Get In Touch</button>
              <div className="bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
            </div>
          </div>
          <button className="bg-[#616161] text-[--bgcover] px-3 py-1 rounded-full">
            Contact Us
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="bottom-0 absolute z-10 p-12 bg-gradient-to-t from-[var(--bgcover)] from-15% to-transparent w-full flex justify-center items-end h-[100px]">
            <button className="bg-[--highlight] text-[var(--bgcover)] font-medium py-3 px-6 rounded-full flex justify-center items-center gap-2">
              Contact Us
              <BsArrowRightShort size={25}/>
            </button>
          </div>
          <Image src={Cover} className="absolute w-[1600px] top-[280px]"/>
          <div className="mt-[100px]">
            <h1 className="text-9xl font-sans font-bold">Unleash the</h1>
            <h1 className="text-9xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#3a3a3a] from-10% to-[var(--highlight)] to-90%">Power of AI</h1>
          </div>
        </div>
      </div>
      <Tech />
      <div className="h-screen bg-black">

      </div>
    </>
  )
}