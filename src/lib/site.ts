export const SITE = {
  name: "Red Apple Mobile Repair",
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
}[] = [
  { id: "display", name: "Front Display Replacement", icon: "📱", desc: "Original-grade OLED with True Tone support", price: "₹1,499", time: "45 min" },
  { id: "backglass", name: "Back Glass Repair", icon: "🪞", desc: "Factory-grade back panel, camera lens protected", price: "₹1,799", time: "60 min" },
  { id: "battery", name: "Battery Replacement", icon: "🔋", desc: "High-capacity health battery + diagnostic report", price: "₹1,299", time: "30 min" },
  { id: "charging", name: "Charging Port / Flex", icon: "🔌", desc: "Fast-charging restored with original flex", price: "₹999", time: "40 min" },
  { id: "camera", name: "Camera Repair", icon: "📸", desc: "Front & rear camera modules, focus, OIS fix", price: "₹1,499", time: "60 min" },
  { id: "water", name: "Water Damage Revival", icon: "💧", desc: "Ultrasonic cleaning + corrosion treatment", price: "₹2,499", time: "Same day" },
  { id: "speaker", name: "Speaker / Mic / Taptic", icon: "🔊", desc: "Earpiece, loudspeaker, mic & vibration module", price: "₹999", time: "40 min" },
  { id: "motherboard", name: "Motherboard / IC Repair", icon: "🧠", desc: "Chip-level micro-soldering by senior techs", price: "₹2,999", time: "1–2 days" },
  { id: "software", name: "Software & Unlock Help", icon: "⚙️", desc: "iOS restore, network issues, boot loops, setup", price: "₹499", time: "30 min" },
];

export const TESTIMONIALS = [
  { name: "Rahul S.", area: "Halasuru", text: "Screen replaced in under 45 minutes with genuine feel. Phone is like new — highly recommended!", service: "Front Display" },
  { name: "Priya M.", area: "Indiranagar", text: "They diagnosed my battery health properly instead of pushing a sale. Transparent pricing and fast service.", service: "Battery" },
  { name: "Arjun K.", area: "Ulsoor", text: "Water damaged phone came back to life after ultrasonic cleaning. Very professional team.", service: "Water Damage" },
  { name: "Sneha R.", area: "MG Road", text: "Free doorstep pickup made it so easy. Delivered next morning with 90-day warranty. Superb experience.", service: "Pickup & Drop" },
];

export const FAQS = [
  { q: "How long does a typical iPhone repair take?", a: "Most repairs like display, battery, and charging port are done in 30–60 minutes while you wait. Motherboard and water damage repairs can take 1–2 days depending on the issue." },
  { q: "Do you offer a warranty on repairs?", a: "Yes — every repair includes a 90-day service warranty on parts and workmanship. Battery and display replacements come with a 6-month health guarantee." },
  { q: "Do you use genuine or original-grade parts?", a: "We use original-grade, premium-quality parts with OEM-level quality checks. You get a diagnostic report with every repair showing the health of the replaced part." },
  { q: "Do you provide free pickup and drop?", a: "Yes. Inside Bangalore we offer free doorstep pickup and drop for most repairs. Book through WhatsApp and we'll arrange a pickup slot." },
  { q: "Can you fix water-damaged phones?", a: "Yes — we perform ultrasonic cleaning, corrosion treatment and chip-level repair. Success depends on how quickly the phone reached us, so don't power it on and book pickup immediately." },
  { q: "Where is your store located?", a: "#36, Opposite Halasuru Police Station, Halasuru Metro Road, Bengaluru 560008 — right next to Halasuru Metro station. Open 10:30 AM to 9:00 PM every day." },
  { q: "Do I need an appointment?", a: "Walk-ins are welcome, but booking a slot through WhatsApp means zero waiting time and a reserved technician slot." },
  { q: "Do you repair all iPhone models?", a: "Yes — from iPhone 6 to the latest iPhone 16 Pro Max, including all Pro, Mini, Plus and SE variants." },
];

export const CHAT_ANSWERS: { keys: string[]; reply: string }[] = [
  { keys: ["hi", "hello", "hey"], reply: "Hey there! 👋 Welcome to Red Apple Mobile Repair. Ask me about prices, repairs, pickup or store timings — or tap a quick question below. 🍎" },
  { keys: ["price", "cost", "quote", "rate", "how much"], reply: "Prices start from: 📱 Front display ₹1,499 | 🔋 Battery ₹1,299 | 🔌 Charging port ₹999 | 📸 Camera ₹1,499 | 💧 Water damage ₹2,499. Final quote after free diagnosis. Want an instant quote?" },
  { keys: ["screen", "display", "cracked"], reply: "Front display replacement starts at ₹1,499 and takes ~45 min with original-grade panels + True Tone support. Back glass from ₹1,799. Want me to prepare the WhatsApp quote?" },
  { keys: ["battery", "charging", "drain"], reply: "Battery replacement starts at ₹1,299, done in ~30 min with a free health diagnostic report and 6-month warranty. 🔋" },
  { keys: ["water", "liquid"], reply: "Water damage revival starts at ₹2,499 — ultrasonic cleaning + corrosion treatment. Keep the phone switched OFF and get it to us ASAP. 💧" },
  { keys: ["pickup", "doorstep", "delivery"], reply: "Yes! We offer FREE doorstep pickup & drop inside Bangalore. Just book via WhatsApp and we'll arrange a slot. 🚗" },
  { keys: ["warranty", "guarantee"], reply: "Every repair includes a 90-day service warranty. Displays & batteries carry a 6-month health guarantee. 🛡️" },
  { keys: ["time", "duration", "how long", "fast"], reply: "Most repairs: 30–60 min while you wait. Motherboard/water damage: 1–2 days. We're also open 10:30 AM – 9:00 PM daily! ⏱️" },
  { keys: ["where", "location", "address", "store", "shop"], reply: "We're at #36, Opposite Halasuru Police Station, Halasuru Metro Road, Bengaluru 560008 — 1 min from Halasuru Metro. 📍" },
  { keys: ["open", "timing", "hours", "close"], reply: "We're open every day from 10:30 AM to 9:00 PM — including weekends! 📅" },
  { keys: ["model", "support", "iphone 1", "iphone 2", "13", "14", "15", "16"], reply: "We repair every iPhone from iPhone 6 to iPhone 16 Pro Max — all Pro, Mini, Plus and SE variants. 📱" },
  { keys: ["book", "appointment", "reserve", "slot"], reply: "Tap 'Book on WhatsApp' and I'll hand you over to our team with your details pre-filled. Zero waiting, guaranteed slot! ✅" },
  { keys: ["thank", "thanks", "thx"], reply: "You're most welcome! 🙏 Anything else — prices, pickup, warranty — I'm right here. 🍎" },
  { keys: ["bye", "goodbye"], reply: "Goodbye! 👋 If you need us, we're one WhatsApp tap away. Have a great day!" },
];
