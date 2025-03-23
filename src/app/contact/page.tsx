export default function ContactUs() {
    return (
      <main className="min-h-screen bg-gray-100 text-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-16 px-6">
          <h1 className="text-5xl font-extrabold mb-4">📩 Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Have questions or need assistance? Get in touch with us, and we’ll be happy to help!
          </p>
        </section>
  
        {/* Contact Details & Form Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">📞 Get in Touch</h2>
              <p className="text-gray-700 mb-4">
                Reach out to us via email, phone, or by filling out the contact form.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  📧 <span className="text-gray-800 font-medium">support@studyhere.com</span>
                </li>
                <li className="flex items-center gap-3">
                  📞 <span className="text-gray-800 font-medium">+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  📍 <span className="text-gray-800 font-medium">123, Study Street, Knowledge City</span>
                </li>
              </ul>
            </div>
  
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">✍️ Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium">Your Name</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-lg mt-1" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Your Email</label>
                  <input type="email" className="w-full p-2 border border-gray-300 rounded-lg mt-1" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Your Message</label>
                  <textarea className="w-full p-2 border border-gray-300 rounded-lg mt-1" rows="4" placeholder="Write your message..."></textarea>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }
  