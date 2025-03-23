"use client" ;
import { useState } from "react";
import Link from "next/link";

export default function Semester() {
  const [selectedSemester, setSelectedSemester] = useState(1);

  // Sample content for each semester
  const semesterContent = {
    1: "Content for Semester 1: Basic Programming, Mathematics, and Introduction to Computers.",
    2: "Content for Semester 2: Data Structures, OOP Concepts, and Discrete Mathematics.",
    3: "Content for Semester 3: Database Management Systems, Operating Systems, and Software Engineering.",
    4: "Content for Semester 4: Computer Networks, Web Development, and Algorithms.",
    5: "Content for Semester 5: Machine Learning, Cloud Computing, and Advanced JavaScript.",
    6: "Content for Semester 6: Cybersecurity, Mobile App Development, and Big Data.",
    7: "Content for Semester 7: AI, Blockchain, and Research-Based Projects.",
    8: "Content for Semester 8: Final Year Projects, Internships, and Industry Training."
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-lg font-bold">Study Here</div>
          <ul className="flex gap-6 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">Semester</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contributor</li>
          </ul>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm">
            Join Now
          </button>
        </div>
      </nav>

      {/* Semester Selection */}
      <div className="container mx-auto text-center my-10">
        <h1 className="text-3xl font-bold mb-6">Select Your Semester</h1>

        <div className="flex justify-center gap-4 flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
            <Link key={sem} href={`/semester/${sem}`}>
            <button className="px-4 py-2 rounded-lg font-semibold text-sm bg-gray-300 text-gray-700 hover:bg-gray-400">
              Semester {sem}
            </button>
          </Link>
          ))}
        </div>

        {/* Display Semester Content */}
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Semester {selectedSemester}</h2>
          <p className="text-gray-700">{semesterContent[selectedSemester]}</p>
        </div>
      </div>

    
    </>
  );
}
