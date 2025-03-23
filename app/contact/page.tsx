"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";



const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 779 149 530"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tharutravells @gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "kaluthara srilanka"
  }
];


const Contact = () => {
  return (
    <>
    <section className="bg-cover bg-center min-h-screen relative"
            style={{ backgroundImage: `url('https://jetwingtravels.com/wp-content/uploads/2023/10/Contact-us-1920x1080-1.jpg')` }}>
            {/*<div className="absolute inset-0 bg-black bg-opacity-50"></div>*/}
            <div className="container mx-auto pt-72 px-4 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Connect with Heartfelt Hospitality
              </h1>
              <p className="text-lg md:text-xl mb-8 text-center px-4">
              Where Conversations Spark Journeys.
              </p>
                  
    
              <div className="mb-8 xl:mb-20">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-white rounded-full flex justify-center items-center text-white text-base hover:bg-primary hover:text-accent hover:trasition-all duration-500" />
              </div>
    
              {/*<div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 border border-white rounded-ful justify-center text-white hover:bg-black hover:text-white hover:trasition-all duration-500">
                  <span>See More ...</span>
                  <MdOutlineTravelExplore href=" " className="text-xl" />
              </Button>
              </div>*/}
    
            </div>
    
          </section>
          
    <motion.section 
      initial={{ opacity:0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"} 
        }}
      className="py-6"    
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">{"Let's travel together"}</h3>
              <p className="text-white/60">{"A part of the Tharu family, our journey began in 2010 to show visitors from near and far, the wonders of the paradise we call home. Today, we are a leading destination management company renowned for our legendary hospitality."}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname"/>
                <Input type="lastname" placeholder="Lastname"/>
                <Input type="email" placeholder="Email address"/>
                <Input type="phone" placeholder="Phone number"/>
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a package"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a package</SelectLabel>
                    <SelectItem value="est">Honeymoon</SelectItem>
                    <SelectItem value="cst">Ella Tour</SelectItem>
                    <SelectItem value="mst">Beach Side</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-[200px]" placeholder="Type your message here."/>

              <Button size="md" className="max-w-40">Send message</Button>

            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=> {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>

    {/* border */}
    <div className="border border-white/20"></div>

    {/* Footer */}
        <Footer />

        </>
  )
}

export default Contact;
