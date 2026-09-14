const reviews = [
  { name: "Rajesh K.", rating: "★★★★★", text: "My iPhone 14 screen was replaced in 30 minutes! Perfect finish. Highly recommended.", device: "iPhone 14" },
  { name: "Priya M.", rating: "★★★★★", text: "Water damage repair on my iPad Pro. They saved it when other centers said it was dead. Amazing!", device: "iPad Pro" },
  { name: "Vikram S.", rating: "★★★★★", text: "Motherboard repair on my Mac mini. Expert-level micro-soldering. 40% cheaper than Apple.", device: "Mac mini" },
  { name: "Meera J.", rating: "★★★★★", text: "Apple Watch Ultra battery replacement done same day. Super professional service.", device: "Apple Watch Ultra" },
  { name: "Arun P.", rating: "★★★★★", text: "AirPods Pro 2 battery replacement. Works like new. Great price and quality.", device: "AirPods Pro" },
];
export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-500 uppercase tracking-widest">What Our Customers Say</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 text-white">700+ 5-Star Reviews</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="text-yellow-400 mb-2">{r.rating}</div>
              <p className="text-gray-300 text-sm mb-6 italic">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-medium text-sm">{r.name[0]}</div>
                <div>
                  <div className="text-white text-sm font-medium">{r.name}</div>
                  <div className="text-gray-500 text-xs">{r.device}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
