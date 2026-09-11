import Reveal from "./Reveal";

const SOCIALS = [
  { icon: "📸", label: "Instagram", href: "https://instagram.com/redapplerepair" },
  { icon: "📘", label: "Facebook", href: "https://facebook.com/redapplerepair" },
  { icon: "🐦", label: "X (Twitter)", href: "https://x.com/redapplerepair" },
  { icon: "🎥", label: "YouTube", href: "https://youtube.com/@redapplerepair" },
  { icon: "📍", label: "Google Business", href: "https://g.page/redapplerepair" },
];

export default function SocialBar() {
  return (
    <section className="py-16 bg-white border-t border-black/[0.04]">
      <div className="mx-auto max-w-[800px] px-6 text-center lg:px-8">
        <Reveal>
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Follow us</p>
          <h2 className="mt-3 font-apple text-[28px] font-bold text-[#1d1d1f]">Stay connected.</h2>
          <p className="mt-2 text-[14px] text-[#86868b]">Follow us for repair tips, offers, and behind-the-scenes content.</p>
          <div className="mt-8 flex justify-center gap-3">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.06] bg-[#f5f5f7] text-xl transition-all hover:bg-[#ff2d55]/10 hover:border-[#ff2d55]/20 hover:scale-110" title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
