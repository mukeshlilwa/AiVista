import Image from "next/image";
import Slider from "./Components/cardSlider";
import Footer from "./Components/footer";
import QuoteForm from "./Components/contactForm";
import ServicesSection from "./Components/ServiceCards";
import HeroSection from "./Components/HeroSection";
import ClientLogos from "./Components/logos";
import AboutUs from "./Components/aboutUs";
import SuccessStories from "./Components/successStories";
import TestimonialSection from "./Components/testaminials";
import Faqs from "./Components/Faqs";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <ClientLogos/>
    <ServicesSection/>

    <AboutUs/>
    <SuccessStories/>
    <TestimonialSection/>
    <Faqs/>
    <Slider/>
    <QuoteForm/>
    
   
    <Footer/>

    </>
  );
}
