import Nav from "../components/section/Nav";
import Hero from "../components/section/Hero";
import About from "../components/section/About";
import Services from "../components/section/Services";
import Why from "../components/section/Why";
import Products from "../components/section/Products";
import Testimonials from "../components/section/Testimonials";
import FAQ from "../components/section/FAQ";
import FinalCTA from "../components/section/FinalCTA";
import Footer from "../components/section/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Services />
        <Why />
        <Products />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
