import Hero from "./Components/Hero/Hero.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Pain from "./Components/Pain/Pain.jsx";
import Features from "./Components/Features/Features.jsx";
import Pricing from "./Components/Pricing/Pricing.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Impact from "./Components/Impact/Impact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pain />
      <Features />
      <Pricing />
      <Impact />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;