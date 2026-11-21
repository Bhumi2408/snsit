import { Public_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "SNS IT - Best IT Solutions & Services Provider",
  description:
    "Welcome to SNS IT Solutions! We are a dynamic, forward-thinking company specializing in the design, Importer, manufacturing, and sale of cutting-edge telecom equipment, along with providing comprehensive IT solutions tailored to meet the diverse needs of both individuals and businesses.",
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={publicSans.variable}>
      <body>
        <div className="site">
          <Header />
          {children}
          <Footer />
        </div>
        <ChatWidget />
        <AnimateOnScroll />
      </body>
    </html>
  );
}
