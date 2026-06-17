import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Link direto do WhatsApp com mensagem pronta
  const whatsappLink = "https://wa.me/5531987891486?text=Ol%C3%A1%2C%20gostaria%20de%20come%C3%A7ar%20gr%C3%A1tis%20no%20GiroP%C3%A1tio!";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">

        <a className="brand" href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src={logo} alt="SisgenCar" />
        </a>

        <button
          className={`hamburger ${open ? 'active' : ''}`}
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#pain" onClick={(e) => scrollToSection(e, 'pain')}>Dores</a>
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Funcionalidades</a>
          <a href="#impact" onClick={(e) => scrollToSection(e, 'impact')}>Impacto</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Planos</a>


          {/* BOTÃO ATUALIZADO PARA O WHATSAPP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary nav-cta"
            style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
          >
            Conhecer mais
          </a>
        </div>

      </div>
    </nav>
  );
}