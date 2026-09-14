const services = [
  { icon: "📱", title: "iPhone Repair", desc: "Screen, battery, camera, charging port, water damage. All models.", time: "30 min" },
  { icon: "💻", title: "iPad Repair", desc: "Display replacement, home button, charging, logic board. All models.", time: "Same day" },
  { icon: "🍎", title: "Mac Repair", desc: "MacBook, iMac, Mac mini — screen, battery, keyboard, logic board.", time: "2-5 days" },
  { icon: "⌚", title: "Apple Watch Repair", desc: "Screen, battery, band, charging, water damage repair.", time: "24 hours" },
  { icon: "🎧", title: "AirPods Repair", desc: "Battery, speaker, case, connectivity, firmware issues.", time: "Same day" },
  { icon: "🔧", title: "Motherboard Repair", desc: "Micro-soldering, IC replacement, logic board diagnostics.", time: "3-7 days" },
];
export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-500 uppercase tracking-widest">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 text-white">Everything Apple</h2>
          <p className="text-gray-500 mt-4">Expert repair for the entire Apple ecosystem</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-300">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl text-white font-medium mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{s.desc}</p>
              <span className="text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full">{s.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
