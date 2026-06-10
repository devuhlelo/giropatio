import "./Footer.css";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* CTA */}
        <div className="footer-cta">
          <h2>
            Cada dia que um carro passa no pátio, seu lucro diminui.<br />
            <span>Não deixe dinheiro parado.</span>
          </h2>

          <p>
            Transforme seu atendimento hoje e veja o giro acontecer.
          </p>

          <button className="footer-btn">
            <MessageCircle size={18} />
            Falar com um Consultor Agora
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