export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm text-gray-500 uppercase tracking-widest">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 text-white">Trusted by <span className="text-white/60">700+</span> Customers</h2>
          <p className="text-gray-400 mt-6 leading-relaxed">
            Red Apple Mobile Repair is a hidden gem near Halasuru Metro, Indiranagar, Bengaluru.
            <br /><br />
            We specialize in <span className="text-white">Motherboard Micro-Soldering</span>, fixing devices other centers declare "dead."
            Our expert technicians have 10+ years of experience repairing complex IC failures, curved displays, and logic board issues.
            <br /><br />
            <span className="text-white">40-50% cheaper</span> than authorized centers, with same-day service and 12-month warranty.
          </p>
          <div className="mt-8 flex gap-8">
            <div><span className="text-3xl text-white">10+</span><span className="text-gray-500 text-sm">Years Experience</span></div>
            <div><span className="text-3xl text-white">700+</span><span className="text-gray-500 text-sm">Reviews</span></div>
            <div><span className="text-3xl text-white">5000+</span><span className="text-gray-500 text-sm">Devices Repaired</span></div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[400px]">
          <div className="text-6xl mb-4">🍎</div>
          <h3 className="text-2xl text-white font-light">Red Apple Mobile Repair</h3>
          <p className="text-gray-400 mt-2 text-center">Since 2014 • Indiranagar, Bengaluru</p>
          <div className="mt-6 space-y-3 text-left">
            <div className="flex items-center gap-3 text-gray-400"><span className="text-green-400">✓</span> 700+ 5-star reviews</div>
            <div className="flex items-center gap-3 text-gray-400"><span className="text-green-400">✓</span> 40-50% cheaper than authorized</div>
            <div className="flex items-center gap-3 text-gray-400"><span className="text-green-400">✓</span> Original-grade parts only</div>
            <div className="flex items-center gap-3 text-gray-400"><span className="text-green-400">✓</span> 12-month warranty</div>
          </div>
        </div>
      </div>
    </section>
  );
}
