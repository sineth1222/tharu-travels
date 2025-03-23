import React from 'react'
import Link from "next/link";


const Footer = () => {
  return (
    <div>
      {/* Footer */}
    <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4">Tharu Travels</h4>
            <p className="text-xs md:text-sm">A part of the Tharu family, our journey began in 2010 to show visitors from near and far, the wonders of the paradise we call home. Today, we are a leading destination management company renowned for our legendary hospitality.</p>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="/" className="hover:text-green-300">Home</Link></li>
              <li><Link href="/services" className="hover:text-green-300">Destinations</Link></li>
              <li><Link href="/resume" className="hover:text-green-300">Packages</Link></li>
              <li><Link href="/contact" className="hover:text-green-300">Contact</Link></li>
            {/*<li><a href="/" className="hover:text-green-300">home</a></li>
                <li><a href="/services" className="hover:text-green-300">destinations</a></li>
              <li><a href="/resume" className="hover:text-green-300">packages</a></li>
              <li><a href="/contact" className="hover:text-green-300">Contact</a></li>*/}             
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4">Newsletter</h4>
            <div className="flex space-x-2">
              <input 
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-white rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-xs md:text-sm"
              />
              <button className="bg-accent text-primary px-4 py-2 rounded hover:bg-green-800 transition text-xs md:text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs md:text-sm">
         Copy Right &copy; 2025 PraDha Solutions.
        </div>
      </footer>
    </div>
  )
}

export default Footer;
