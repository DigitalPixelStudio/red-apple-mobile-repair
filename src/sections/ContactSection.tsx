export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <span className="text-sm text-gray-500 uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 text-white">Visit Or Call Us</h2>
          <p className="text-gray-400 mt-6">Free diagnostics. Honest pricing. Same-day service.</p>
          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <span className="text-2xl">📍</span>
              <div>
                <div className="text-white font-medium">Halasuru Metro Road, Near Indiranagar</div>
                <div className="text-gray-500 text-sm">Bengaluru, Karnataka 560008, Ulsoor</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="text-2xl">📞</span>
              <div>
                <div className="text-white font-medium">+91 8660663776</div>
                <div className="text-gray-500 text-sm">Mon-Sun: 10am - 8pm</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="text-2xl">✉️</span>
              <div>
                <div className="text-white font-medium">redapple.repair@gmail.com</div>
                <div className="text-gray-500 text-sm">Response within 2 hours</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl text-white font-medium mb-6">Book an Appointment</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/30" />
            <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/30" />
            <select className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-gray-400 text-sm focus:outline-none focus:border-white/30">
              <option value="">Select Device</option>
              <option value="iphone">iPhone</option>
              <option value="ipad">iPad</option>
              <option value="mac">Mac / Mac mini</option>
              <option value="watch">Apple Watch</option>
              <option value="airpods">AirPods</option>
            </select>
            <textarea placeholder="Describe the issue..." rows={4} className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/30 resize-none" />
            <button className="w-full bg-white text-black py-4 rounded-lg font-medium hover:bg-gray-200 transition">
              Book Now →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
