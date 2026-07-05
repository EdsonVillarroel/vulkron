import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { MissionVision } from "./components/MissionVision";
import { Services } from "./components/Services";
import { EquipmentRepair } from "./components/EquipmentRepair";
import { Sectors } from "./components/Sectors";
import { Benefits } from "./components/Benefits";
import { Commitment } from "./components/Commitment";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { IconWhatsApp } from "./components/Icons";
import { CONTACT } from "./data/content";
import { useReveal } from "./hooks/useReveal";
import "./App.css";

function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <EquipmentRepair />
        <Sectors />
        <Benefits />
        <Commitment />
        <Contact />
      </main>
      <Footer />

      <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Contactar por WhatsApp"
      >
        <IconWhatsApp width={28} height={28} />
      </a>
    </>
  );
}

export default App;
