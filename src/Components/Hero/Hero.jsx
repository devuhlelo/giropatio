import "./Hero.css";
import { MessageCircle, ArrowRight, CheckCircle, Bot, Zap } from "lucide-react";

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
         

          <h1>
            Transforme cliques em <br />
            <span className="accent text-gradient-orange">vendas de veículos reais.</span>
          </h1>

          <p>
            Chega de curiosos sugando seu tempo. A IA do GiroPátio atende 24h, 
            qualifica o lead no WhatsApp e entrega o cliente pronto para fechar negócio.
          </p>

          <div className="hero-cta-wrapper">
            <div className="hero-cta">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-main pulse-btn"
                style={{ textDecoration: 'none' }}
              >
                <MessageCircle size={20} />
                Quero Leads Quentes Agora
                <span className="btn-arrow">
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>

            {/* PROVA SOCIAL INSERIDA */}
            <div className="hero-proof">
             
              <div className="proof-text">
                Junte-se a <strong>+120 lojistas</strong> faturando mais.
              </div>
            </div>
          </div>

          <div className="hero-microcopy">
            <Zap size={14} color="#ff8a33" style={{ marginRight: '6px', verticalAlign: 'middle' }} />
            Sem espera. Instalação em minutos.
          </div>
        </div>

        {/* MOCKUP DO WHATSAPP */}
        <div className="hero-right">
          <div className="phone-frame floating-phone">
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