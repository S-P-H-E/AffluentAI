import Image from "next/image";
import Cover from '@/public/cover.png'
import Footer from '@/public/footer.png'
import { BsStars } from 'react-icons/bs'
import { FaPenNib, FaUser } from 'react-icons/fa'
import Tech from "@/components/Tech";
import Head from "next/head";
import OfferCard from "@/components/OfferCard";
import { Link, Element } from 'react-scroll';
import Script from "next/script";

export default function Home() {
  const email = 'contactaffluentai@gmail.com';

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

      <div className="bg-[var(--bgcover)] h-[650px] md:h-[1000px]">
        {/* Navbar */}
        <div className="p-6 md:p-10 flex justify-between items-center">
          <h1 className="font-medium text-xl cursor-pointer">Affluent AI</h1> 
          <div className="md:flex gap-10 hidden">
            <div className="flex flex-col group">
              <button className="font-medium">About Us</button>
              <div className="bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
            </div>
            

            <div className="flex flex-col group">
              <Link to="servicesRef" spy={true} smooth={true} duration={500} className="font-medium cursor-pointer">
                Our Services
              </Link>
              <div className="bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
            </div>
            <div className="flex flex-col group">
              <button className="font-medium">Get In Touch</button>
              <div className="bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100"/>
            </div>
          </div>
          <button className="bg-[var(--highlight)] text-[--bgcover] px-4 py-1 rounded-full" onClick={emailBTN}>
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
          
          <div className="text-5xl md:text-9xl font-bold mt-[50px] md:mt-[100px] ">
            <h1>Unleash the</h1>
            <h1>Power of AI</h1>
          </div>
          {/* <Image src={Cover} alt="image" className="relative w-full md:w-[730px] bottom-[13px] md:bottom-[23px]"/> */}
          <div className="w-fit h-[500px] relative bottom-[40px] md:bottom-[200px]">
            <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.473/build/spline-viewer.js"></script>
            <spline-viewer url="https://prod.spline.design/c-ys25p8m4Mbr9Gz/scene.splinecode"></spline-viewer>
          </div>
        </div>
      </div>

      <Tech />

      <Element name='services' className="flex flex-col justify-center items-center py-20 md:p-56">
        <h1 className="text-3xl md:text-6xl font-bold">Our Services</h1>
        <div  className="flex flex-col md:flex-row justify-center items-start p-10 gap-3">
          <OfferCard 
            icon={<FaPenNib size={30}/>}
            heading={'AI Development'}
            body={'We will conduct a detailed analysis of your present processes to find areas where automation can improve profitability.'}
          />
          <OfferCard 
            icon={<FaUser size={30}/>}
            heading={'AI Consulting'}
            body={'In order to satisfy your unique business requirements, our team of professionals will design and create customized automation solutions.'}
          />
          <OfferCard 
            icon={<BsStars size={30}/>}
            heading={'Seamless Integration'}
            body={'We guarantee a seamless integration of our automation solutions into your current workflows, causing the fewest disruptions possible.'}
          />
        </div>
      </Element>

      {/* <div suppressHydrationWarning className="calendly-inline-widget" data-url="https://calendly.com/papadopouloschristofis/ai-automation-call" style={{ minWidth: '320px', height: '700px' }}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>  */}

      <div className="w-full h-fit flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-6xl font-bold">Recent Client</h1>
        <div style={{ padding: "30% 0 0 0", position: "relative" }} className="w-full md:w-[700px] my-10">
          <iframe 
            src="https://player.vimeo.com/video/867728375?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
            title="Ryan - Prime Trading Testimonial">
          </iframe>
        </div>
        <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
      </div>

      <Element name="contact" className="flex bg-[var(--highlight)] relative h-[265px]"> 
        <div className="flex flex-col justify-center gap-5 w-full my-16 mx-10 md:ml-20">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--bgcover)]">Contact Us</h1>
          {/* <p className="text-[#505661] md:text-xl">Get in contact with us and book a discovery call.</p> */}
          <button className="bg-[var(--bgcover)] text-[var(--highlight)] px-6 py-2 my-2 rounded-full font-medium w-fit" onClick={emailBTN}>
            Book a Call
          </button>
        </div>
        <div className="w-full hidden md:flex justify-end items-end">
          <Image src={Footer} alt="image" className="w-[500px] relative right-[40px] "/>
        </div>
      </Element>


    </>
  )
}