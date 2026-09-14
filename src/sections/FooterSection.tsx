export default function FooterSection() {
  return (
    <footer className="py-16 px-4 bg-gray-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl text-white font-light mb-4">🍎 Red Apple</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Professional Apple repair since 2014.<br />
              Certified • Honest • Affordable
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <div className="space-y-2 text-gray-500 text-sm">
              {["iPhone Repair", "iPad Repair", "Mac Repair", "Apple Watch", "AirPods"].map((s) => (
                <a key={s} href="#" className="block hover:text-white transition">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <div className="space-y-2 text-gray-500 text-sm">
              {["About Us", "Reviews", "Process", "Contact"].map((s) => (
                <a key={s} href="#" className="block hover:text-white transition">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <div className="space-y-2 text-gray-500 text-sm">
              <p>+91 8660663776</p>
              <p>redapple.repair@gmail.com</p>
              <p>Bengaluru, Karnataka</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
          © 2026 Red Apple Mobile Repair. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
