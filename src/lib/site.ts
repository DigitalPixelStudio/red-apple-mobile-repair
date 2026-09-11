export const SITE = {
  name: "Red Apple Mobile Store",
  tagline: "Precision repair. Premium care.",
  phone: "+918660663776",
  phoneHref: "tel:+918660663776",
  whatsapp: "918660663776",
  address: "#36, Opposite Halasuru Police Station, Halasuru Metro Road, Bengaluru, Karnataka 560008",
  hours: "10:30 AM – 9:00 PM (All days)",
  rating: "4.9",
  ratingCount: "905",
  customers: "10,000+",
  founding: "2015",
  yearsActive: "9+",
  avgRepairTime: "30",
  warrantyDays: "90",
  cities: "Bangalore",
};

export const wa = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const MODELS = [
  "iPhone 16 / 16 Plus",
  "iPhone 16 Pro / Pro Max",
  "iPhone 15 / 15 Plus",
  "iPhone 15 Pro / Pro Max",
  "iPhone 14 / 14 Plus",
  "iPhone 14 Pro / Pro Max",
  "iPhone 13 / 13 Mini",
  "iPhone 13 Pro / Pro Max",
  "iPhone 12 / 12 Mini",
  "iPhone 12 Pro / Pro Max",
  "iPhone 11 / 11 Pro / Pro Max",
  "iPhone X / XS / XR",
  "Older models (8 and below)",
] as const;

export const REPAIRS: {
  id: string;
  name: string;
  icon: string;
  desc: string;
  price: string;
  time: string;
  bento?: boolean;
}[] = [
  { id: "display", name: "Front Display Replacement", icon: "📱", desc: "Original-grade OLED with True Tone. Clear, vibrant, exact-fit.", price: "₹1,499", time: "45 min", bento: true },
  { id: "backglass", name: "Back Glass Repair", icon: "🪞", desc: "Factory-grade panel. Camera lens protected. Seamless finish.", price: "₹1,799", time: "60 min" },
  { id: "battery", name: "Battery Replacement", icon: "🔋", desc: "High-capacity cell + full health diagnostic report. 6-month guarantee.", price: "₹1,299", time: "30 min", bento: true },
  { id: "charging", name: "Charging Port / Flex", icon: "🔌", desc: "Original flex restores fast-charge capability.", price: "₹999", time: "40 min" },
  { id: "camera", name: "Camera Repair", icon: "📸", desc: "Rear & front modules. Focus, OIS, zoom fix.", price: "₹1,499", time: "60 min" },
  { id: "water", name: "Water Damage Revival", icon: "💧", desc: "Ultrasonic cleaning + corrosion treatment. Bring it fast.", price: "₹2,499", time: "Same day", bento: true },
  { id: "speaker", name: "Speaker / Mic / Haptics", icon: "🔊", desc: "Earpiece, loudspeaker, microphone & Taptic Engine.", price: "₹999", time: "40 min" },
  { id: "motherboard", name: "Motherboard / IC Repair", icon: "🧠", desc: "Chip-level micro-soldering by senior engineers.", price: "₹2,999", time: "1–2 days" },
  { id: "software", name: "Software & Unlock", icon: "⚙️", desc: "iOS restore, boot loops, network, setup.", price: "₹499", time: "30 min" },
];

export const TESTIMONIALS = [
  { name: "Rahul S.", area: "Halasuru", text: "Screen replaced in 45 minutes with perfect True Tone. Feels like a brand new phone.", service: "Display", avatar: "RS" },
  { name: "Priya M.", area: "Indiranagar", text: "Transparent pricing, genuine parts, and they actually showed me the battery health before and after. Trustworthy.", service: "Battery", avatar: "PM" },
  { name: "Arjun K.", area: "Ulsoor", text: "Water damaged phone came back to life in one day. Ultrasonic cleaning worked like magic.", service: "Water Damage", avatar: "AK" },
  { name: "Sneha R.", area: "MG Road", text: "Free doorstep pickup, zero waiting. Repaired and returned same evening. Absolutely seamless.", service: "Pickup & Drop", avatar: "SR" },
  { name: "Vikram D.", area: "Koramangala", text: "Motherboard repair no one else could do. Chip-level work saved me from buying a new phone.", service: "Motherboard", avatar: "VD" },
  { name: "Nisha T.", area: "Whitefield", text: "Quick camera fix with original module. Photos are sharp again. Highly recommend Red Apple.", service: "Camera", avatar: "NT" },
];

export const FAQS = [
  { q: "How long does a typical iPhone repair take?", a: "Most repairs — screen, battery, charging port — are completed in 30–60 minutes while you wait. Motherboard and water damage repairs take 1–2 days depending on severity." },
  { q: "Do you use genuine Apple parts?", a: "We use original-grade, OEM-quality parts with full quality checks. Every replacement comes with a written diagnostic report so you know exactly what was done and the health of your device." },
  { q: "What warranty do you offer?", a: "Every repair includes a 90-day service warranty on parts and labour. Display and battery replacements carry a 6-month health guarantee." },
  { q: "Do you provide free pickup and drop?", a: "Yes. For customers inside Bangalore, we offer free doorstep pickup and drop. Book via WhatsApp and we'll arrange a convenient time slot." },
  { q: "Can you fix water-damaged phones?", a: "Yes. We perform ultrasonic cleaning, corrosion treatment, and chip-level repair. The key is speed — don't power the phone on, and get it to us as soon as possible." },
  { q: "Where is your store?", a: "#36, Opposite Halasuru Police Station, Halasuru Metro Road, Bengaluru 560008 — one minute from Halasuru Metro station. Open 10:30 AM to 9:00 PM every day." },
  { q: "Do I need an appointment?", a: "Walk-ins are welcome, but booking via WhatsApp reserves a technician slot so there's zero waiting time when you arrive." },
  { q: "Which iPhone models do you support?", a: "All models from iPhone 6 to the latest iPhone 16 Pro Max — including Pro, Mini, Plus, and SE variants." },
];

export const CHAT_ANSWERS: { keys: string[]; reply: string }[] = [
  { keys: ["hi", "hello", "hey"], reply: "Hi! 👋 Welcome to Red Apple. Ask me about prices, repairs, pickup or timings — or tap a quick question below." },
  { keys: ["price", "cost", "quote", "rate", "how much"], reply: "Starting prices: 📱 Display ₹1,499 · 🔋 Battery ₹1,299 · 🔌 Charging ₹999 · 📸 Camera ₹1,499 · 💧 Water ₹2,499. Final quote after free diagnosis." },
  { keys: ["screen", "display", "cracked"], reply: "Display replacement from ₹1,499, ~45 min. Original-grade panels with True Tone support. Back glass from ₹1,799." },
  { keys: ["battery", "charging", "drain"], reply: "Battery from ₹1,299 — 30 min, free health report, 6-month guarantee. 🔋" },
  { keys: ["water", "liquid"], reply: "Water damage from ₹2,499 — ultrasonic cleaning + corrosion treatment. Don't power on. Get it to us fast. 💧" },
  { keys: ["pickup", "doorstep", "delivery"], reply: "Free doorstep pickup & drop across Bangalore. Book via WhatsApp — zero hassle. 🚗" },
  { keys: ["warranty", "guarantee"], reply: "90-day warranty on every repair. Displays & batteries carry 6-month health guarantees. 🛡️" },
  { keys: ["time", "duration", "how long", "fast"], reply: "Most repairs: 30–60 min. We're open 10:30 AM – 9:00 PM daily. ⏱️" },
  { keys: ["where", "location", "address", "store", "shop"], reply: "#36, Opp. Halasuru Police Station, Halasuru Metro Road, Bengaluru 560008. 📍" },
  { keys: ["open", "timing", "hours", "close"], reply: "Open every day 10:30 AM – 9:00 PM including weekends. 📅" },
  { keys: ["model", "support", "iphone"], reply: "We repair every iPhone from iPhone 6 to iPhone 16 Pro Max. 📱" },
  { keys: ["book", "appointment", "reserve", "slot"], reply: "Tap 'Book on WhatsApp' — your details are pre-filled, zero waiting. ✅" },
  { keys: ["thank", "thanks"], reply: "You're welcome! 🙏 Anything else? I'm right here." },
  { keys: ["bye"], reply: "Goodbye! 👋 One WhatsApp tap away anytime." },
];

export const STATS = [
  { value: "10000", suffix: "+", label: "Devices Repaired", icon: "📱" },
  { value: "905", suffix: "+", label: "Verified Reviews", icon: "⭐" },
  { value: "9", suffix: "+", label: "Years of Trust", icon: "🗓️" },
  { value: "4.9", suffix: "/5", label: "Average Rating", icon: "💎" },
];

export const TIPS = [
  { title: "Never charge overnight", desc: "Unplug when full to protect battery health and reduce heat damage.", icon: "🔋" },
  { title: "Use a tempered glass protector", desc: "First line of defence against drops. Saves you ₹1,499+ easily.", icon: "🛡️" },
  { title: "Restart weekly", desc: "Clears RAM and prevents background process buildup that slows your phone.", icon: "🔄" },
  { title: "Avoid extreme temperatures", desc: "Don't leave your iPhone in direct sun or a freezing car — battery degrades fast.", icon: "🌡️" },
  { title: "Backup before any repair", desc: "We recommend iCloud backup before any hardware service as a precaution.", icon: "☁️" },
  { title: "Water damage? Don't charge it", desc: "Power off immediately and bring it to us. Charging = corrosion. Time = survival.", icon: "💧" },
];
