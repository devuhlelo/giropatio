import Hero from "./Components/Hero/Hero.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Pain from "./Components/Pain/Pain.jsx";
import Features from "./Components/Features/Features.jsx";
import Pricing from "./Components/Pricing/Pricing.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Impact from "./Components/Impact/Impact.jsx";

// Importe o novo componente do botão flutuante (Ajuste o caminho da pasta se necessário)
import FloatingWhatsApp from "./Components/FloatingWhatsApp/FloatingWhatsApp.jsx";
import Parallax from "./Components/Parallax/Parallax.jsx";
import Counter from "./Components/Counter/Counter.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Counter />
      <Pain />
      <Features />
      <Impact />
      <Pricing />
      <Parallax />
      <Testimonials />
      <Footer />

      {/* Botão flutuante global da Landing Page */}
      <FloatingWhatsApp />
    </>
  );
}

export default App;