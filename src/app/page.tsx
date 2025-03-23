import Link from "next/link";

export default function Pages() {
  return (
    <>
    <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">

          <div className="text-lg font-bold">Study Here</div>
          <ul className="flex gap-6 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">
                 <Link href="/semester">
                      Semester
                       </Link>
             </li>
            <li className="hover:text-yellow-400 cursor-pointer">
            <Link href="/contact">
                      Contact
            </Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
            <Link href="/contributor">
                      Contributor
            </Link>
            </li>
          </ul>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm">
            Join Now
          </button>
        </div>
      </nav>

      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-20 text-center w-screen h-screen pt-40">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4">📚 Study Here</h1>
          <p className="text-lg max-w-2xl mx-auto pt-10">
            Your one-stop destination for study materials, notes, PDFs, and exam resources.Unlock success with well-structured learning materials for every semester! 🚀
          </p>
          <a href="/semester">
            <button className="mt-6  bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg">
              Start Learning Now
            </button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 my-16  w-screen h-screen text-black">
        <h2 className="text-3xl font-bold text-center mb-10">🚀 Why Choose Study Here?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "📖", title: "Semester-Wise Resources", desc: "Find organized notes and study materials for all semesters." },
            { icon: "📂", title: "Download PDFs & Notes", desc: "Easily access PDFs, lecture slides, and reference books." },
            { icon: "📝", title: "Exam Preparation", desc: "Previous year papers and important questions for better revision." },
            
          ].map((feature, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-2xl font-semibold">{feature.icon} {feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
        
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-200 py-16 text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">📌 How It Works?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { step: "1️⃣", title: "Select Your Semester", desc: "Choose from Semester 1 to 8 and explore subjects." },
              { step: "2️⃣", title: "Pick Your Subject", desc: "Find all the necessary materials in one place." },
              { step: "3️⃣", title: "Download & Learn", desc: "Access notes, PDFs, and previous year papers instantly." }
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg w-72">
                <h3 className="text-2xl font-semibold">{item.step} {item.title}</h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16 text-black">
        <h2 className="text-3xl font-bold">🎓 Ready to Start Learning?</h2>
        <p className="text-lg text-gray-700 mt-2">Explore subjects, access notes, and boost your academic performance.</p>
        <a href="/semester">
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-lg">
            Explore Semesters
          </button>
        </a>
      </section>
    </div>

      {/* Footer Section */}
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
    </>
  );
}


