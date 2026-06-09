import "./Footer.css";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* CTA */}
        <div className="footer-cta">
          <h2>
            Seu pátio não pode esperar.
            <span> Comece a vender hoje.</span>
          </h2>

          <p>
            Enquanto você pensa, seu concorrente já está fechando o cliente.
          </p>

          <button className="footer-btn">
            <MessageCircle size={18} />
            Falar com consultor
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="footer-divider" />

        {/* BOTTOM */}
        <div className="footer-bottom">

          <div className="footer-brand">
            <strong>GiroPátio</strong>
            <span>© 2026 Todos os direitos reservados</span>
          </div>

          <div className="footer-links">
            <a href="#">Termos</a>
            <a href="#">Privacidade</a>
            <a href="#">Suporte</a>
          </div>

        </div>

      </div>
    </footer>
  );
}