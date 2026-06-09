import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">

        <a className="brand" href="/">
          <img src={logo} alt="GiroPátio" />
        </a>

        <button
          className="hamburger"
          aria-label="Abrir menu"
          onClick={() => setOpen((s) => !s)}
        >
          ☰
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#features">Funcionalidades</a>
          <a href="#bot">Bot IA</a>
          <a href="#how">Como funciona</a>
          <a href="#pricing">Planos</a>
          <button className="btn btn-primary nav-cta">Começar grátis</button>
        </div>

      </div>
    </nav>
  );
}