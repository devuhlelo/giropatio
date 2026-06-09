import "./Hero.css";
import { MessageCircle, ArrowRight, CheckCircle, Bot } from "lucide-react";

export default function Hero() {
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
            Sua agência vende<br />
            <span className="accent">24h por dia</span>
            <span className="soft"> —</span><br />
            <span className="soft">sem ninguém online</span>
          </h1>

          <p>
            Atendimento automático que filtra curiosos e entrega só cliente
            pronto para fechar negócio. Direto no WhatsApp.
          </p>

          <div className="hero-cta">
            <button className="btn-main">
              <MessageCircle size={18} />
              Falar com consultor
              <span className="btn-arrow">
                <ArrowRight size={12} />
              </span>
            </button>

          
          </div>

        </div>

        {/* MOCKUP */}
        <div className="hero-right">
          <div className="phone-frame">

            <div className="phone-header">
              <div className="phone-avatar">
                <Bot size={18} color="#0a0c10" />
              </div>
              <div className="phone-info">
                <div className="phone-name">Assistente Virtual</div>
                <div className="phone-status">● Online agora</div>
              </div>
            </div>

            <div className="phone-body">
              <div className="msg msg-user">
                Tem esse carro ainda?
                <div className="msg-time">18:32</div>
              </div>

              <div className="msg msg-bot">
                Sim! Vai financiar ou dar entrada?<br />
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
                Lead qualificado enviado ao consultor
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