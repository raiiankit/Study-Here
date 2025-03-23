"use client ";
import Link from "next/link";
import { subjectsData } from "@/app/data/subject";

export default function SemesterDetail({  params  }) {
  const { sem } = params;
  const subjects = subjectsData[sem] || [];

  return (

    <div>
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








      <div className="container mx-auto text-center my-10">

      <h1 className="text-3xl font-bold mb-6">Semester {sem}</h1>
      <p className="text-lg text-gray-700 text-white">
                    Here you will find all the study materials for Semester {sem}.
      </p>
     </div>

     <div className="mt-6 flex justify-center">
  {subjects.length > 0 ? (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg">
      <h2 className="text-xl font-semibold text-center mb-4">Subjects for Semester {sem}</h2>
      <ul className="space-y-2">
        {subjects.map((subject, index) => (
        <li key={index}>
         <Link href={`/semester/${sem}/${encodeURIComponent(subject.name)}`}>
          <div className="text-lg text-gray-800 flex items-center gap-2 bg-white p-3 rounded-lg shadow hover:bg-gray-200 cursor-pointer">
            📘 <span className="font-medium">{subject.code} - {subject.name}</span>
          </div>
        </Link>
      </li>
        ))}
      </ul>
    </div>
  ) : (
    <p className="text-lg text-red-500 font-medium">No subjects found for Semester {sem}.</p>
  )}
</div>

     </div>

    




    
  );
}
