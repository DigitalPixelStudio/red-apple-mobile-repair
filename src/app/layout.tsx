import "./globals.css";
export const metadata = { title: "Red Apple Mobile Repair - Bengaluru", description: "Professional Apple repair since 2014. iPhone, iPad, Mac, Apple Watch, AirPods." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
