import Image from "next/image";
import Slider from "./Components/cardSlider";
import Footer from "./Components/footer";
import QuoteForm from "./Components/contactForm";
import HeroSection from "./Components/HeroSection";
import ClientLogos from "./Components/logos";
import AboutUs from "./Components/aboutUs";
import SuccessStories from "./Components/successStories";
import TestimonialSection from "./Components/testaminials";
import Faqs from "./Components/Faqs";
import ServicesSection from "./Components/ServiceCradU";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <ClientLogos/>
    {/* <ServicesSection/> */}
    <ServicesSection/>
    <AboutUs/>
    <Slider/>
    <SuccessStories/>
    <TestimonialSection/>
    <Faqs/>
    <QuoteForm/>
    <Footer/>

    </>
  );
}
