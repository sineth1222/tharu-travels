"use client";

import Socials from "@/components/Socials";
import DestinationCard from "@/components/DestinationCard";
import { useState } from "react";
import Footer from "@/components/Footer";


const destinations = [
  {
    image: "/assets/service/anuradapura.jpg",
    title: "Anuradhapura",
    description: "The epicentre of Sinhalese civilization dating back to the 4th century BC.",
    link: "/anuradapura",
  },
  {
    image: "/assets/service/arugmbay.jpg",
    title: "Arugam Bay",
    description: "Unspoilt beaches and magnificent waves: the ultimate ‘hangout’ for surfers.",
    link: "#",
  },
  {
    image: "/assets/service/bentota.jpg",
    title: "Bentota",
    description: "With a mix of beautiful beaches, watersports, and buzzing streets that attract...",
    link: "#",
  },
  {
    image: "/assets/service/colombo.jpg",
    title: "Colombo",
    description: "A hotspot full of diverse attractions from upscale shopping malls to busy...",
    link: "#",
  },
  {
    image: "/assets/service/dabulla.jpg",
    title: "Dabulla",
    description: "One of the main tourist attractions in Dambulla is the sacred cave..",
    link: "#",
  },
  {
    image: "/assets/service/ella.jpg",
    title: "Ella",
    description: "Majestic waterfalls, hidden caves, breathtaking vistas across the mountains: Ella is a...",
    link: "#",
  },
  {
    image: "/assets/service/galle.jpg",
    title: "Galle",
    description: "In this Southern capital natural and cultural diversity thrives, and history lives...",
    link: "#",
  },
  {
    image: "/assets/service/habarana.jpg",
    title: "Habarana",
    description: "Strategically placed on the primary route to the North and East of...",
    link: "#",
  },
  {
    image: "/assets/service/hatton.jpg",
    title: "Hatton",
    description: "The legacy of colonial plantations, traditions and lifestyles live on here, in...",
    link: "#",
  },
  {
    image: "/assets/service/mirissa.jpg",
    title: "Hikkaduwa",
    description: "A popular beach destination for both locals and visitors, Hikkaduwa or ‘Hikka’...",
    link: "#",
  },
  {
    image: "/assets/service/jaffna.jpg",
    title: "Jaffna",
    description: "Unique in landscape and identity, and steeped in complex history both ancient...",
    link: "#",
  },
  {
    image: "/assets/service/kalpitiya.jpg",
    title: "Kalpitiya",
    description: "Paradise for nature lovers and watersports enthusiasts, Kalpitiya sits between the lagoon...",
    link: "#",
  },
  {
    image: "/assets/service/kandy.jpg",
    title: "Kandy",
    description: "With history, heritage and tradition melding with modernity, there are many remarkable...",
    link: "#",
  },
  {
    image: "/assets/service/kithulgala.jpg",
    title: "Kithulgala",
    description: "White-water rafting, jungle trekking, outbound training, cave explorations: it’s all about action...",
    link: "#",
  },
  {
    image: "/assets/service/mirissa.jpg",
    title: "Mirissa",
    description: "A small town on the South coast of Sri Lanka, Mirissa is...",
    link: "#",
  },
  {
    image: "/assets/service/negombo.jpg",
    title: "Negombo",
    description: "Although renowned for its golden beaches, in Negombo, sightseeing opportunities are also...",
    link: "#",
  },
  {
    image: "/assets/service/nuwaraeliya.jpg",
    title: "Nuwara Eliya",
    description: "Renowned as ‘Little England’, here in the tea country, traditions, breathtaking views...",
    link: "#",
  },
  {
    image: "/assets/service/pasikuda.jpg",
    title: "Pasikuda",
    description: "The pristine shore of Passikudah is much sought after by those who...",
    link: "#",
  },
];

const ITEMS_PER_PAGE = 6;

const Services = () => {


  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(destinations.length / ITEMS_PER_PAGE);

  // Slice destinations to show only 3 per page
  const paginatedDestinations = destinations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
    <section className="bg-cover bg-center min-h-screen relative"
            style={{ backgroundImage: `url('https://jetwingtravels.com/wp-content/uploads/2023/11/Tour-1920x1080-1.jpg')` }}>
            {/*<div className="absolute inset-0 bg-black bg-opacity-50"></div>*/}
            <div className="container mx-auto pt-72 px-4 h-full flex flex-col justify-center items-center text-black">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              An Island Of Wonder
              </h1>
              <p className="text-lg md:text-xl mb-8 text-center px-4">
              Come Explore With Us.
              </p>
                  
    
              <div className="mb-8 xl:mb-20">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-black rounded-full flex justify-center items-center text-black text-base hover:bg-primary hover:text-accent hover:trasition-all duration-500" />
              </div>
    
              {/*<div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 border border-white rounded-ful justify-center text-white text-base hover:bg-white hover:text-primary hover:trasition-all duration-500">
                  <span>See More ...</span>
                  <MdOutlineTravelExplore href=" " className="text-xl" />
              </Button>
              </div>*/}
    
            </div>
    
          </section>

          {/*<section className="container mx-auto px-4 py-12">*/}
          <section className="container relative max-w-7xl mx-auto px-4 py-12 text-center z-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">POPULAR DESTINATIONS</h2>
      <p className="text-lg  mb-8">YOUR ‘MUST-SEE’ PLACES</p>
      <p className=" max-w-2xl mx-auto mb-8">
          {"With myriad places to visit, Sri Lanka is a little paradise isle full of surprising variety. You can swap the chaos of a city for a tranquil beach in an hour or less, or switch from tropical heat to cool heights and cloud forests for a few more. There are mountains to climb, waves to surf, whales to watch, history to revisit, jungles to explore, even elephants to meet. The destinations in Sri Lanka are wide and varied and we’ll gladly share them with you in the very best way."}
        </p>
      {/*<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>*/}

<div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paginatedDestinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          
          className={`px-4 py-2 border rounded  ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          ⬅️
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 border rounded ${currentPage === i + 1 ? "bg-green-500 text-white" : ""}`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          ➡️
        </button>
      </div>
    </div>
    </section>

    {/* border */}
    <div className="border border-white/20"></div>

    {/* Footer */}
        <Footer />
    </>
    
  )
}

export default Services;
