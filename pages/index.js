import Image from "next/image";
import Cover from '@/public/cover.png'
import {BsArrowRightShort} from 'react-icons/bs'
import Tech from "@/components/Tech";
import Head from "next/head";

export default function Home() {
  const email = 'sphe.g.personal@gmail.com';

  const emailBTN = () => {
      window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <Head>
        <title>Affluent AI</title>
        <meta name="description" content="AI Automation Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[var(--bgcover)] h-[500px] md:h-fit">
        {/* Navbar */}
        <div className="p-6 md:p-10 flex justify-between items-center">
          <h1 className="font-medium text-xl cursor-pointer">AffluentAI</h1>
          <div className="md:flex gap-10 hidden">
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
          <button className="bg-[var(--highlight)] text-[--bgcover] px-3 py-1 rounded-full" onClick={emailBTN}>
            Contact Us
          </button>
        </div>

        {/* Home */}
        <div className="flex flex-col justify-center items-center">
          {/* <div className="bottom-0 absolute z-10 p-12 bg-gradient-to-t from-[var(--bgcover)] from-15% to-transparent w-full flex justify-center items-end h-[100px]">
            <button className="bg-[--highlight] text-[var(--bgcover)] font-medium py-3 px-6 rounded-full flex justify-center items-center gap-2">
              Contact Us
              <BsArrowRightShort size={25}/>
            </button>
          </div> */}
          
          <div className="text-5xl md:text-9xl font-sans font-bold mt-[50px] md:mt-[100px]">
            <h1>Unleash the</h1>
            <h1>Power of AI</h1>
          </div>
          <Image src={Cover} className="relative w-full md:w-[700px] bottom-[30px]"/>
        </div>
      </div>
      <Tech />
      <div className="h-screen">

      </div>
    </>
  )
}