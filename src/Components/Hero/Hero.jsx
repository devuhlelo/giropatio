import "./Hero.css";
import { MessageCircle, ArrowRight, CheckCircle, Bot } from "lucide-react";

export default function Hero() {
  // Link direto do WhatsApp com mensagem pronta
  const whatsappLink = "https://wa.me/5531987891486?text=Ol%C3%A1%2C%20quero%20vender%20mais%20r%C3%A1pido%20com%20o%20GiroP%C3%A1tio!";

  return (
    <section className="hero">
      <div className="hero-glow-orange" />
      <div className="hero-glow-green" />

      <div className="hero-container">

        {/* TEXTO */}
        <div className="hero-left">

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Mais de 120 agências ativas
          </div>

          <h1>
            Pare de perder tempo com curiosos. Gire seu estoque mais<br />
            <span className="accent"> rápido</span>
          </h1>

          <p>
            O GiroPátio é a plataforma com IA que atende em 3 segundos, qualifica quem tem potencial 24h por dia e entrega o lead quente pro seu vendedor.
          </p>

          <div className="hero-cta">
            {/* BOTÃO ATUALIZADO PARA O WHATSAPP */}
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-main"
              style={{ textDecoration: 'none' }}
            >
              <MessageCircle size={18} />
              Quero Vender Mais Rápido
              <span className="btn-arrow">
                <ArrowRight size={12} />
              </span>
            </a>
          </div>

        </div>

        {/* MOCKUP DO WHATSAPP (MANTIDO) */}
        <div className="hero-right">
          <div className="phone-frame">
            <div className="phone-header">
              <div className="phone-avatar">
                <Bot size={18} color="#0a0c10" />
              </div>
              <div className="phone-info">
                <div className="phone-name">Assistente GiroPátio</div>
                <div className="phone-status">● Online agora</div>
              </div>
            </div>

            <div className="phone-body">
              <div className="msg msg-user">
                Tem esse carro ainda? Qual o valor?
                <div className="msg-time">18:32</div>
              </div>

              <div className="msg msg-bot">
                Temos sim! Excelente escolha. Vai financiar ou dar entrada?<br />
                Tenho ótimas condições pra você 🚗
                <div className="msg-time">18:32</div>
              </div>

              <div className="msg msg-user">
                Tenho um carro pra dar na troca
                <div className="msg-time">18:33</div>
              </div>

              <div className="msg-typing">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>

              <div className="msg-success">
                <CheckCircle size={14} />
                Lead qualificado entregue ao vendedor
              </div>
            </div>

            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-value">3× mais</div>
                <div className="stat-label">leads qualificados</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">24 / 7</div>
                <div className="stat-label">atendimento ativo</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}