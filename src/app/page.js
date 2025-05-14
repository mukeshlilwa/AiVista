import Image from "next/image";
import Slider from "./Components/cardSlider";
import Footer from "./Components/footer";
import QuoteForm from "./Components/contactForm";

export default function Home() {
  return (
    <>
    <Slider/>
    <QuoteForm/>
    <Footer/>

    </>
  );
}
