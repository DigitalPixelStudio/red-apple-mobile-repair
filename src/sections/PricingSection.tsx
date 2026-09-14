const plans = [
  { name: "Screen Repair", price: "₹999", desc: "LCD/OLED replacement, original grade", time: "30 min" },
  { name: "Battery Replacement", price: "₹799", desc: "Genuine battery, 12-month warranty", time: "20 min" },
  { name: "Charging Port", price: "₹1299", desc: "Lightning/USB-C port repair", time: "1 hour" },
  { name: "Water Damage", price: "₹2499", desc: "Full diagnostic + component repair", time: "24-48 hrs" },
  { name: "Motherboard", price: "₹3999", desc: "Micro-soldering, IC replacement", time: "3-7 days" },
  { name: "Full Service", price: "₹4999", desc: "Complete health check + cleanup + warranty", time: "2-3 days" },
];
export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-500 uppercase tracking-widest">Transparent Pricing</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 text-white">No Hidden Charges</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="text-sm text-gray-400 mb-2">{p.name}</div>
              <div className="text-5xl text-white font-light mb-1">{p.price}</div>
              <p className="text-gray-400 text-sm mb-3">{p.desc}</p>
              <span className="text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full">{p.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
