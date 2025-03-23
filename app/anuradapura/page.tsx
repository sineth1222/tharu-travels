//import React from 'react'
"use client"
import Image from "next/image";
import Footer from "@/components/Footer";
//import { useState } from "react";

{/*const destinations = [
  {
    slug: "anuradhapura",
    title: "Anuradhapura",
    description:
      "The epicenter of Sinhalese civilization dating back to 4th century BC. Anuradhapura was the first historical capital of Sri Lanka, and its marvels still radiate greatness...",
    image: "/assets/service/anuradapura.jpg",
    highlights: [
      "The first historical capital of ancient Lanka",
      "The Sacred City of Glory",
    ],
  },
  {
    slug: "negombo",
    title: "Negombo",
    description: "A coastal city famous for its beaches and fishing industry...",
    image: "/images/negombo.jpg",
    highlights: ["Golden beaches", "Fishing industry", "Cultural heritage"],
  },
  {
    slug: "nuwara-eliya",
    title: "Nuwara Eliya",
    description: "Known as 'Little England', a scenic hill station in Sri Lanka...",
    image: "/images/nuwara-eliya.jpg",
    highlights: ["Tea plantations", "Cool climate", "Waterfalls"],
  },
];*/}


const page = () => {

  {/*const [selectedDestination, setSelectedDestination] = useState<{
    slug: string;
    title: string;
    description: string;
    image: string;
    highlights: string[];
  } | null>(null);*/}

  return (
    <>
      <section className="bg-cover bg-center min-h-screen relative"
                  style={{ backgroundImage: `url('https://jetwingtravels.com/wp-content/uploads/2023/07/Mihinthale-1920-x-1080.jpg')` }}>
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
        <h2 className="text-2xl md:text-3xl text-primary font-bold text-center mb-4 md:mb-4">ANURADHAPURA</h2>
        <p className="text-lg text-gray-600 mb-8 uppercase">The first historical capital of ancient Lanka.</p>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Image
          src="https://jetwingtravels.com/wp-content/uploads/2023/08/jaya-sri-maha-bodhi-800-x-500.jpg"
          alt="Leopard"
          width={800}
          height={500}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <Image
          src="https://jetwingtravels.com/wp-content/uploads/2023/08/Ruwanwelisaya-Stupa-Anuradhapura-golden-triangle-sri-lanka-800-x-500.jpg"
          alt="Leopard"
          width={800}
          height={500}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <Image
          src="https://jetwingtravels.com/wp-content/uploads/2023/08/Mihintale-Anuradhapura-sri-lanka-800-x-500.jpg"
          alt="Leopard"
          width={800}
          height={500}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
          {/*<img
            src="https://jetwingtravels.com/wp-content/uploads/2023/08/jaya-sri-maha-bodhi-800-x-500.jpg"
            alt="Leopard"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://jetwingtravels.com/wp-content/uploads/2023/08/Ruwanwelisaya-Stupa-Anuradhapura-golden-triangle-sri-lanka-800-x-500.jpg"
            alt="Elephant"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://jetwingtravels.com/wp-content/uploads/2023/08/Mihintale-Anuradhapura-sri-lanka-800-x-500.jpg"
            alt="Leopard"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />*/}
        </div>{/* Description */}
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          {"The epicentre of Sinhalese civilization dating back to 4th century BC, Anuradhapura was the first historical capital of Sri Lanka, and its marvels still radiate greatness. Reigning for over a millennium, the kingdom had 117 rulers who built magnificent palaces, great reservoirs and irrigation systems, pleasure gardens, and Buddhist temples - some, amongst the biggest architectural creations of the ancient world, smaller in size only to the pyramids of Giza."}
        </p>

        {/* Button */}
        <a
          href="/contact"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition duration-300"
        >
          TRAVALLING EXCURSIONS
        </a>
      </div>
    </section>

                {/*<div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 ">FEATURED EXPERIENCES</h1>

      {/* If no destination is selected, show the list /}
      {!selectedDestination ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.slug}
              className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedDestination(dest)}
            >
              <img src={dest.image} alt={dest.title} className="rounded-lg" />
              <h2 className="text-xl font-bold mt-2">{dest.title}</h2>
              <p className="text-gray-600">{dest.description.substring(0, 80)}...</p>
            </div>
          ))}
        </div>
      ) : (
        // If a destination is selected, show details
        <div className="p-6 border rounded-lg shadow-lg">
          <button
            className="mb-4 text-blue-500 underline"
            onClick={() => setSelectedDestination(null)}
          >
            ← Back to list
          </button>
          <h1 className="text-5xl font-bold">{selectedDestination.title}</h1>
          {selectedDestination.highlights.map((highlight, index) => (
            <p key={index} className="text-lg text-red-500">{highlight}</p>
          ))}
          <p className="mt-4 text-gray-700">{selectedDestination.description}</p>
          <img
            src={selectedDestination.image}
            alt={selectedDestination.title}
            className="w-full max-h-[400px] object-cover rounded-lg shadow-lg mt-6"
          />
        </div>
      )}
    </div>*/}

    {/* border */}
    <div className="border border-white/20"></div>

    {/* Footer */}
        <Footer />
    </>
  )
}

export default page;
