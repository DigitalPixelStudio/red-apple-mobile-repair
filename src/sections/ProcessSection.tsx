const steps = [
  { num: "01", title: "Free Diagnostics", desc: "Bring your device. We diagnose the issue at zero cost." },
  { num: "02", title: "Price Quote", desc: "We tell you exactly what's wrong and the cost upfront." },
  { num: "03", title: "Repair", desc: "Our technicians fix your device with original-grade parts." },
  { num: "04", title: "Test & Return", desc: "Full testing, 12-month warranty, same-day delivery." },
];
export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-4 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-500 uppercase tracking-widest">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 text-white">4 Simple Steps</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-2xl text-white font-light">{s.num}</div>
                {i < steps.length - 1 && <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-white/20 -translate-x-1/2" />}
              </div>
              <h3 className="text-lg text-white mt-6 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
