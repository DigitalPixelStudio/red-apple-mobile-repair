const devices = [
  { name: "iPhone", models: "16 Pro, 16, 15 Pro, 15, 14, 13, 12, SE", icon: "📱" },
  { name: "iPad", models: "Pro, Air, Mini, Air, 10th Gen", icon: "📋" },
  { name: "Mac mini", models: "M4, M3, M2, M1 — All Models", icon: "🖥️" },
  { name: "Apple Watch", models: "Ultra 2, Ultra, Series 10, 9, SE", icon: "⌚" },
  { name: "AirPods", models: "Pro 2, Pro, Max, 3, 2, SE", icon: "🎧" },
];
export default function DevicesSection() {
  return (
    <section id="devices" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-500 uppercase tracking-widest">Apple Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 text-white">Every Device Covered</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {devices.map((d, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition">
              <div className="text-5xl mb-4">{d.icon}</div>
              <h3 className="text-xl text-white mb-2">{d.name}</h3>
              <p className="text-gray-400 text-xs">{d.models}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
