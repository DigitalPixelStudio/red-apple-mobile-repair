import Reveal from "./Reveal";

const DEVICES = [
  { model: "iPhone 16 Pro Max", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80", tag: "Latest" },
  { model: "iPhone 15 Pro", img: "https://images.unsplash.com/photo-1697656670891-b4be1d4a90b7?w=600&q=80", tag: "Popular" },
  { model: "iPhone 14", img: "https://images.unsplash.com/photo-1663079080774-560a683e5b09?w=600&q=80", tag: "" },
  { model: "iPhone 13", img: "https://images.unsplash.com/photo-1632882765546-8ee7566b1f03?w=600&q=80", tag: "" },
  { model: "iPhone 12", img: "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&q=80", tag: "" },
  { model: "iPhone 11", img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80", tag: "" },
];

export default function DeviceGallery() {
  return (
    <section className="section-apple bg-[#f5f5f7]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Supported devices</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">We repair <span className="gradient-text">every iPhone.</span></h2>
          <p className="section-subtitle mx-auto mt-5">From the latest iPhone 16 Pro Max to older models — we have the parts and expertise for all.</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {DEVICES.map((d, i) => (
            <Reveal key={d.model} delay={i * 60}>
              <div className="card-3d group relative overflow-hidden rounded-[24px] bg-white shadow-sm transition-shadow hover:shadow-lg">
                <div className="card-3d-inner">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-[#f5f5f7] to-white p-4">
                    <img src={d.img} alt={d.model} className="h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" loading="lazy"/>
                    {d.tag && <span className="absolute right-3 top-3 rounded-full bg-[#ff2d55] px-2.5 py-1 text-[10px] font-bold text-white">{d.tag}</span>}
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-[13px] font-bold text-[#1d1d1f]">{d.model}</div>
                    <div className="text-[11px] text-[#86868b]">All repairs available</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
