import Image from "next/image";
import Slider from "./Components/cardSlider";
import Footer from "./Components/footer";
import QuoteForm from "./Components/contactForm";
import Partners from "./Components/partners";
import ServicesSection from "./Components/ServiceCards";
import HeroSection from "./Components/HeroSection";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <Partners/>
    <ServicesSection/>
    <Slider/>
    <QuoteForm/>
    <Footer/>

    </>
  );
}
