"use client";

import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
//import { TooltipProvider } from "@radix-ui/react-tooltip";
//import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
//import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
//import { Button } from "@/components/ui/button"
//import { MdOutlineTravelExplore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"


const Home = () => {

  const rooms = [
    { name: "Sigiriya Rock", price: "Day/night", img: "/assets/sigiriya.jpg" },
    { name: "Pidurangala Rock", price: "Day/night", img: "/assets/piduranagala.jpeg" },
    { name: "Udawalawa National Park", price: "Day/night", img: "/assets/udawalawa.jpeg" },
    { name: "Arugam Bay", price: "Day/night", img: "/assets/arugambay.jpeg"},
  ];
  const images = [
    "/assets/inst10.png",
    "/assets/inst12.png",
    "/assets/inst9.png",
    "/assets/inst11.png",
  ];

  const about = {
    title: "About me",
    description: "Hi, Im Tharindu, the founder and guide of Tharu travels. As a proud Sri Lankan, I have a deep passion for showcasing the beauty, culture, and hidden gems of my country to travelers from around the world. ",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Tharindu",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+94) 779149530",
      },
      {
        fieldName: "Experience",
        fieldValue: "10+ Years",
      },
      {
        fieldName: "Email",
        fieldValue: "tharutravells@gmail.com",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Srilankan",
      },
      {
        fieldName: "Linkedin",
        fieldValue: "Tharu Tours Sri Lanka",
      },
      {
        fieldName: "Languages",
        fieldValue: "English, Russian, Spanish, Sinhala",
      },
    ]
  };

  const skills = {
    title: "Contact Me",
    description: "Welcome to Tharu travels! We are your trusted travel partner in Sri Lanka, offering unforgettable guided tours across this beautiful island. ",
    skillList: [
      {
        icon: <FaFacebook />,
        name: "Facebook",
        path: "https://web.facebook.com/profile.php?id=61574528433221",
      },
      {
        icon: <FaInstagram />,
        name: "Instagram",
        path: "https://www.instagram.com/tharu_tours_srilanka/",
      },
      {
        icon: <FaLinkedin />,
        name: "Linkedin",
        path: "https://www.linkedin.com/in/tharu-tours-sri-lanka-980176358/",
      },
      {
        icon: <FaWhatsapp />,
        name: "Whatsapp",
        path: "/contact",
      },
      {
        icon: <FaMapMarkerAlt />,
        name: "Adderess",
        path: "/contact",
      },
      {
        icon: <FaPhoneAlt />,
        name: "Phone",
        path: "/contact",
      },
    ]
  
  };

  return (
                <><section className="bg-cover bg-center min-h-screen relative"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)` }}>
        {/*<div className="absolute inset-0 bg-black bg-opacity-50"></div>*/}
        <div className="container mx-auto pt-72 px-4 h-full flex flex-col justify-center items-center text-black">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Explore the Ceylon with Us
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center px-4">
            Find our perfect holiday packages.
          </p>
              

          <div className="mb-8 xl:mb-20">
            <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-black rounded-full flex justify-center items-center text-black text-base hover:bg-primary hover:text-accent hover:trasition-all duration-500" />
          </div>

          {/*<div className="flex flex-col xl:flex-row items-center gap-8">
          <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 border border-white rounded-ful justify-center text-white text-base hover:bg-white hover:text-primary hover:trasition-all duration-500">
              <MdOutlineTravelExplore href="/contact" className="text-xl" />
              <span>See More ...</span>
          </Button>
          </div>*/}

        </div>

      </section>
      
      {/*<section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img
                src={`https://picsum.photos/400/300?random=${i}`}
                alt="Destination"
                className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Destination {i + 1}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="text-green-600 hover:text-green-700 font-semibold text-sm md:text-base">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>*/}
      
      <section id="rooms" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">FEATURED DESTINATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={room.img} alt={room.name} width={400} height={300} className="w-full h-48 object-cover" />
              {/*<img src={room.img} alt={room.name} className="w-full h-48 object-cover" />*/}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
                <p className="text-gray-600">{room.price}</p>
                <a href="/contact">
                <button className="mt-4 bg-accent text-white px-4 py-2 rounded hover:bg-yellow-600">Book Now</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative bg-gray-100 py-16 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 bg-white opacity-90">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f7f7f7"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,117.3C672,96,768,96,864,106.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
        {/* Title and Subtitle */}
        <h2 className="text-2xl md:text-3xl text-primary font-bold text-center mb-4 md:mb-4">ELLA SRI LANKA</h2>
        <p className="text-lg text-gray-600 mb-8">WHERE THE MOUNTAIN MEETS THE INDIAN OCEAN</p>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Image
                    src="https://destinationlesstravel.com/wp-content/uploads/2020/04/Ella-train-960x641.jpg.webp"
                    alt="nine arch bright"
                    width={800}
                    height={500}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="https://destinationlesstravel.com/wp-content/uploads/2019/05/DSC_9675-2-1024x684.jpg.webp"
                    alt="ella"
                    width={800}
                    height={500}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="https://destinationlesstravel.com/wp-content/uploads/2020/04/Ella-rock-960x640.jpg.webp"
                    alt="ella rock"
                    width={800}
                    height={500}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
          {/*<img
            src="https://via.placeholder.com/400x300?text=Leopard+1"
            alt="Leopard"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://via.placeholder.com/400x300?text=Elephant"
            alt="Elephant"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://via.placeholder.com/400x300?text=Leopard+2"
            alt="Leopard"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />*/}
        </div>{/* Description */}
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          {"Located in the vast tea plantations of Sri Lanka’s cultural center, Ella is one of the most popular places to visit in Sri Lanka. Because of this, Ella was at the top of our Sri Lanka bucket list, and even with such high expectations, we weren’t disappointed! So you can not only see the famous bridge but also experience everything else this town has to offer. our time in Ella was fun and memorable."}
        </p>

        {/* Button */}
        <a
          href="/contact"
          className="inline-block bg-accent text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300"
        >
          TRAVEL EXCURSIONS
        </a>
      </div>
    </section>

    {/* about me and contact us */}
    
          {/*https://images.unsplash.com/photo-1462290625486-c142817fb94d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D*/}
          <section className="bg-cover bg-center min-h-screen relative py-16"
            style={{ backgroundImage: ` url(https://images.unsplash.com/photo-1487525219605-eadb39ae229c?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
              {/*<div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>*/}
              <div className="max-w-7xl mx-auto px-4">
              {/* Title and Subtitle */}
        <h2 className="text-2xl md:text-3xl text-white font-bold text-center mb-4 md:mb-4">GET IN TOUCH</h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
            }} className="min-h-[80vh] flex items-center justify-center py-1 xl:py-0">
            <div className="container mx-auto px-4 py-12">
              <Tabs defaultValue="skills" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                  {/*<TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>*/}
                  <TabsTrigger value="skills">Contact Me</TabsTrigger>
                  <TabsTrigger value="about">About Me</TabsTrigger>
                </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  </div>
                  <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return <Link key={index} href={skill.path}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[184px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group">
                            <span className="text-accent py-4">{skill.name}</span>
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 pb-6">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    })}
                  </ul>
                  </ScrollArea>
                </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
                    <div className="flex flex-col gap-[30px]">
                      <h3 className="text-4xl font-bold">{about.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                        {about.info.map((item, index) => {
                          return (
                            <li key={index}
                            className="flex items-center justify-center xl:justify-start gap-4">
                              <span className="text-white/60">{item.fieldName}</span>
                              <span className="text-xl">{item.fieldValue}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
    </div>
    </section>

    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6 md:mb-8">INSTAGRAM</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/*{images.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index}`} className="w-full h-48 object-cover rounded-lg" />
          ))}*/}
          {images.map((img, index) => (
            <Image key={index} src={img} alt={`Gallery ${index}`} width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
          ))}

        </div>
      </div>
    </section>
    
    
    {/* Footer */}
    <Footer />
    </>
  )
}

export default Home;

