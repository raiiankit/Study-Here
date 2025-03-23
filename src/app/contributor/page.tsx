"use client";
import { useState } from "react";

export default function Contribute() {
  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const topContributors = [
    { name: "Ankit Rai", contribution: "Web Programming Notes", downloads: 500 },
    { name: "John Doe", contribution: "IOT & Applications Guide", downloads: 1000 },
    { name: "Jane Smith", contribution: "Theory of Computation PDFs", downloads: 750 },
  ];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`File Uploaded: ${file?.name || "No file selected"} for ${subject}`);
    setFile(null);
    setSubject("");
  };

  return (
    <div className="container mx-auto px-6 py-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">📚 Contribute Study Material</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
        Share your knowledge and help students succeed. Upload notes, PDFs, or study guides for different subjects!
      </p>

      {/* Contribution Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Subject:</span>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter Subject Name"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Upload File (PDF, DOC, etc.):</span>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition"
        >
          Upload & Contribute 🚀
        </button>
      </form>

      {/* Top Contributors Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">🏆 Top Contributors</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {topContributors.map((contributor, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md text-center text-black"
            >
              <h3 className="text-xl font-bold">{contributor.name}</h3>
              <p className="text-gray-600">{contributor.contribution}</p>
              <p className="text-blue-500 font-semibold">{contributor.downloads}+ Downloads</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
