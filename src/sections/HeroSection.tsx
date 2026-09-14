export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(180,180,180,0.08),transparent_60%)]" />
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 text-sm text-gray-400">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Same-Day Repair • 30 Min Turnaround • Free Diagnostics
        </div>
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
          <span className="text-white">Apple</span>{" "}
          <span className="text-gray-500 font-light">Repair</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400">
            Experts Since 2014
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          Professional repair for iPhone, iPad, Mac, Apple Watch &amp; AirPods.<br />
          Certified technicians • Original-grade parts • 12-month warranty
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#book" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition text-lg">
            Book Repair →
          </a>
          <a href="#services" className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/5 transition text-lg">
            View Services
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div><div className="text-3xl text-white">700+</div><div className="text-sm text-gray-500 mt-1">5-Star Reviews</div></div>
          <div><div className="text-3xl text-white">30 min</div><div className="text-sm text-gray-500 mt-1">Avg. Repair</div></div>
          <div><div className="text-3xl text-white">12 mo</div><div className="text-sm text-gray-500 mt-1">Warranty</div></div>
        </div>
      </div>
    </section>
  );
}
