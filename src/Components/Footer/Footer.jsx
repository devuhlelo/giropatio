import "./Footer.css";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  const whatsappLink = "https://wa.me/5531987891486?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20SisgenAuto!";

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* CTA */}
        <div className="footer-cta">
          <h2>
            Cada dia que um carro passa no pátio, seu lucro diminui.<br />
            <span>Não deixe dinheiro parado.</span>
          </h2>

          <p>Transforme seu atendimento hoje e veja o giro acontecer.</p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-btn">
            <MessageCircle size={18} />
            Falar com um Consultor Agora
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="footer-divider" />

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <strong>SisgenAuto</strong>
            <span>© 2026 Todos os direitos reservados</span>
          </div>

          <div className="footer-credits">
            Desenvolvido por <a href="https://uhlelo.com.br/" target="_blank" rel="noopener noreferrer">uHLelo</a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}