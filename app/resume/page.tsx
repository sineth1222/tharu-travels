"use client";

//import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
//import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
//import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa"
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";


const about = {
  title: "About me",
  description: "Hi, Im Sineth, the founder and guide of sineth travells. As a proud Sri Lankan, I have a deep passion for showcasing the beauty, culture, and hidden gems of my country to travelers from around the world. ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "G.B.Sineth Mashenka",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 705089955",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "sineth mashenka1222@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Srilankan",
    },
    {
      fieldName: "Linkedin",
      fieldValue: "Sineth Mashenka",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
  ]
};


/*const experience ={
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Showcases my professional journey, including internships, freelance projects, and full-time roles. It highlights my responsibilities, achievements, and contributions in various roles, demonstrating my expertise and growth in the industry.",
  items: [
    {
      company: "Gravity Plus Pvt Ltd.",
      position: "Back-End Developer Intern",
      duration: "2025 - Present",
    },
    {
      company: "Silicon Radon Network Pvt Ltd.",
      position: "Front-End Developer Intern",
      duration: "summer 2024",
    },
    {
      company: "PraDha Solution Startup",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
    {
      company: "PraDha Solution Startup",
      position: "Jounior Web Developer",
      duration: "2022 - 2023",
    },
    {
      company: "PraDha Solution Startup",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
    {
      company: "PraDha Solution Startup",
      position: "Jounior Web Developer",
      duration: "2023 - 2024",
    },
  ]
};*/

/*const education ={
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Covers my academic background, including degrees, certifications, and relevant coursework. It reflects my technical foundation, problem-solving abilities, and theoretical knowledge that supports my professional career.",
  items: [
    {
      institution: "Sineth Mashenka ",
      degree: "BSc (Hons) in Software Engineering",
      duration: "Facebook",
      icon: <FaFacebook />,
      path: "/",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2020 - 2021",
    },
    {
      institution: "Great Learning Academy.",
      degree: "UI/UX for Beginners course ",
      duration: "2019 - 2020",
    },
    {
      institution: "Great Learning Academy.",
      degree: "React JS Tutorial course",
      duration: "2019 - 2020",
    },
    {
      institution: "Great Learning Academy.",
      degree: "Front End Development",
      duration: "2019 - 2020",
    },
    {
      institution: "H/Ruhunu Vijayaba National Collage",
      degree: "O/L & A/L",
      duration: "2009 - 2019",
    },
    
  ]
};*/

const skills = {
  title: "Get in Touch",
  description: "Welcome to sineth travells! We are your trusted travel partner in Sri Lanka, offering unforgettable guided tours across this beautiful island. ",
  skillList: [
    {
      icon: <FaFacebook />,
      name: "Facebook",
      path: "https://www.linkedin.com/in/sineth-mashenka-113122241/",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      path: "https://www.linkedin.com/in/sineth-mashenka-113122241/",
    },
    {
      icon: <FaLinkedin />,
      name: "Linkedin",
      path: "https://www.linkedin.com/in/sineth-mashenka-113122241/",
    },
    {
      icon: <FaWhatsapp />,
      name: "Whatsapp",
      path: "https://www.linkedin.com/in/sineth-mashenka-113122241/",
    },
  ]

};

const Resume = () => {
  return (
    <>
    {/* merge two photos */}
    {/* style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), 
        url(https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D), 
        url(https://plus.unsplash.com/premium_photo-1733353295753-c4e396c6c8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsbGluZyUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww)`,
      backgroundBlendMode: "overlay",
    }}> */}
    <section className="bg-cover bg-center min-h-screen relative"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-primary"></div>
            {/*style={{ backgroundImage: `url('https://jetwingtravels.com/wp-content/uploads/2023/11/Jetwing-Travel-slider2-1920x1080-1.jpg')` }}>*/}
            {/*<div className="absolute inset-0 bg-black bg-opacity-50"></div>*/}
            <div className="container mx-auto pt-72 px-4 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Crafting Your Travel Tale
              </h1>
              <p className="text-lg md:text-xl mb-8 text-center px-4">
              Embark on Tailored Adventures.
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
          {/*https://images.unsplash.com/photo-1462290625486-c142817fb94d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D*/}
          <section className="bg-cover bg-center min-h-screen relative"
            style={{ backgroundImage: ` url(https://images.unsplash.com/photo-1487525219605-eadb39ae229c?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
              {/*<div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>*/}
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
            {/* experience */}
            {/*<TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot /}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>*/}

            {/* education */}
            {/*<TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        {/*<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>/}
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                        {/*<div className="flex items-center gap-3">
                          {/* dot /}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>/}
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>*/}

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
    </section>


    {/* border */}
    {/*<div className="border border-white/20"></div>*/}

    {/* Footer */}
        <Footer />
    </>
  )
}

export default Resume
