export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-4 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-500 uppercase tracking-widest">Our Experts</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 text-white">Certified Technicians</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Rehees A.T.", role: "Founder & Lead Technician", exp: "10+ yrs", specialty: "Motherboard Micro-Soldering" },
            { name: "Amit K.", role: "Senior iPhone Engineer", exp: "8+ yrs", specialty: "IC-Level Repair" },
            { name: "Suresh M.", role: "Mac Specialist", exp: "7+ yrs", specialty: "Logic Board Diagnostics" },
          ].map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition">
              <div className="w-20 h-20 rounded-full bg-white/10 mx-auto flex items-center justify-center text-3xl text-white mb-4">👤</div>
              <h3 className="text-xl text-white font-medium">{t.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{t.role}</p>
              <div className="mt-4 flex justify-center gap-4 text-xs">
                <span className="bg-white/5 px-3 py-1 rounded-full text-gray-400">{t.exp} experience</span>
              </div>
              <p className="text-gray-500 text-xs mt-3">{t.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
