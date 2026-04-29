import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import CtaBanner from "@/components/CtaBanner";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import config from "../business.config.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
        <CtaBanner />
        <Reviews />
        <Contact />
      </main>

      <footer className="bg-gray-950 text-gray-500 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-gray-400 font-medium">{config.name}</p>
          <p>© {new Date().getFullYear()} · All rights reserved</p>
          <p>
            Website by{" "}
            <a
              href="https://jakeforcier.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors underline underline-offset-2"
            >
              Jake Forcier
            </a>
          </p>
        </div>
      </footer>

      {/* Floating call button — mobile only */}
      <a
        href={`tel:${config.phone}`}
        className="fixed bottom-5 right-5 z-50 sm:hidden flex items-center gap-2 px-5 py-3.5 rounded-full text-white font-bold text-sm shadow-2xl"
        style={{ backgroundColor: config.primaryColor }}
      >
        <span>📞</span> Call Now
      </a>
    </>
  );
}
