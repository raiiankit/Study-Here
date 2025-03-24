import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          {/* Branding */}
          <div className="text-lg font-bold">Study Here</div>

          {/* Navigation Links */}
          <ul className="flex gap-6 text-sm">
            {["About", "Contact"].map((item, index) => (
              <li key={index} className="hover:text-yellow-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <div className="text-xs text-gray-400 mt-4 md:mt-0">
            © {new Date().getFullYear()} Study Here. All Rights Reserved.
          </div>
        </div>
      </footer>
      
    </div>
  )
}

export default Footer
