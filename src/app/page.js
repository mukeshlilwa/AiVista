import Image from "next/image";
import Slider from "./Components/cardSlider";
import Footer from "./Components/footer";
import QuoteForm from "./Components/contactForm";
import ServicesSection from "./Components/ServiceCards";
import HeroSection from "./Components/HeroSection";
import ClientLogos from "./Components/logos";
import AboutUs from "./Components/aboutUs";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <ClientLogos/>
    <ServicesSection/>
    <AboutUs/>
    <Slider/>
    <QuoteForm/>
    <Footer/>

    </>
  );
}
