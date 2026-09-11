import Reveal from "./Reveal";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80", alt: "iPhone screen repair" },
  { src: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=600&q=80", alt: "iPhone repair workspace" },
  { src: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80", alt: "Fixed iPhone display" },
  { src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&q=80", alt: "Water damage repair" },
  { src: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80", alt: "Battery replacement" },
  { src: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&q=80", alt: "Cracked screen before repair" },
];

export default function Gallery() {
  return (
    <section className="section-apple bg-[#f5f5f7]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Our workshop</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">Inside <span className="gradient-text">Red Apple.</span></h2>
          <p className="section-subtitle mx-auto mt-5">A glimpse into our precision repair facility and the care we put into every device.</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {IMAGES.map((img, i) => (
            <Reveal key={img.alt} delay={i * 80}>
              <div className="group overflow-hidden rounded-[20px] shadow-md shadow-black/5 transition-all duration-500 hover:shadow-xl hover:shadow-black/10 hover:scale-[1.03]">
                <img src={img.src} alt={img.alt} className="h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[260px] lg:h-[300px]" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
