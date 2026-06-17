import React from "react";
import { Check, Zap, Rocket, Shield, Flame, Percent } from "lucide-react";
import "./Pricing.css";

export default function Pricing() {
  const WHATSAPP_NUMBER = "5531987891486";

  // Função auxiliar para gerar os links personalizados do WhatsApp de forma limpa
  const generateWhatsAppLink = (planName, price) => {
    const baseText = `Olá! Gostaria de contratar o plano *${planName}* (R$ ${price}/mês) do SisgenCar. Como posso começar?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <section className="pricing-section" id="pricing">
      {/* Luzes Estéticas de Fundo */}
      <div className="pricing-blur-glow orange-glow"></div>
      <div className="pricing-blur-glow green-glow"></div>

      <div className="pricing-container">
        <div className="pricing-meta-header">
          <div className="tech-badge">
            <Percent size={12} />
            <span>Retorno de Investimento Garantido</span>
          </div>
          <h2 className="pricing-main-title">
            Planos que se pagam com <br />
            <span className="text-gradient-orange">apenas 1 venda no mês</span>
          </h2>
          <p className="pricing-main-subtitle">
            Escolha a velocidade de giro da sua agência. Sem contratos de fidelidade abusivos.
          </p>
        </div>

        <div className="pricing-cards-matrix">
          
          {/* PLANO 1 */}
          <div className="pricing-cyber-card">
            <div className="cyber-card-inner">
              <div className="plan-icon-box">
                <Rocket size={20} className="icon-orange" />
              </div>
              <h4 className="cyber-plan-name">Motor de Partida</h4>
              <div className="cyber-price-wrapper">
                <span className="cyber-currency">R$</span>
                <span className="cyber-amount">197</span>
                <span className="cyber-period">/mês</span>
              </div>
              <p className="cyber-plan-summary">
                Mais barato que um panfleteiro. Ideal para começar a filtrar curiosos do estoque.
              </p>
              
              <div className="cyber-divider"></div>
              
              <ul className="cyber-features-list">
                <li><Check size={16} className="cyber-check" /> <span>Agente de IA no WhatsApp</span></li>
                <li><Check size={16} className="cyber-cyber-check" /> <span>Vitrine Digital Premium</span></li>
                <li><Check size={16} className="cyber-check" /> <span>Estoque de até 30 veículos</span></li>
                <li><Check size={16} className="cyber-check" /> <span>Suporte em dias úteis</span></li>
              </ul>
              
              {/* Link personalizado para o Plano 1 */}
              <a 
                href={generateWhatsAppLink("Motor de Partida", "197")}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn-outline"
                style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
              >
                Contratar Starter
              </a>
            </div>
          </div>

          {/* PLANO 2 - ULTRA DESTACADO */}
          <div className="pricing-cyber-card prominent">
            <div className="cyber-premium-border"></div>
            <div className="cyber-card-inner">
              <div className="cyber-tag-highlight">
                <Flame size={12} />
                <span>O mais vendido</span>
              </div>
              <div className="plan-icon-box internal-gradient">
                <Zap size={20} className="icon-white" />
              </div>
              <h4 className="cyber-plan-name">Alta Rotação</h4>
              <div className="cyber-price-wrapper">
                <span className="cyber-currency">R$</span>
                <span className="cyber-amount">347</span>
                <span className="cyber-period">/mês</span>
              </div>
              <p className="cyber-plan-summary yellow-tint">
                Garante o melhor custo-benefício. Destrava ferramentas completas de gestão.
              </p>
              
              <div className="cyber-divider"></div>
              
              <ul className="cyber-features-list">
                <li><Check size={16} className="cyber-check orange" /> <strong>Estoque 100% Ilimitado</strong></li>
                <li><Check size={16} className="cyber-check orange" /> <span>Integração Inteligente FIPE</span></li>
                <li><Check size={16} className="cyber-check orange" /> <span>Pipeline Kanban de Vendas</span></li>
                <li><Check size={16} className="cyber-check orange" /> <span>Atendimento IA Omnichannel</span></li>
                <li><Check size={16} className="cyber-check orange" /> <span>Suporte Prioritário</span></li>
              </ul>
              
              {/* Link personalizado para o Plano 2 */}
              <a 
                href={generateWhatsAppLink("Alta Rotação", "347")}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn-action-green"
                style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
              >
                Acelerar Meu Pátio
              </a>
            </div>
          </div>

          {/* PLANO 3 */}
          <div className="pricing-cyber-card">
            <div className="cyber-card-inner">
              <div className="plan-icon-box">
                <Shield size={20} className="icon-orange" />
              </div>
              <h4 className="cyber-plan-name">Máquina de Vendas</h4>
              <div className="cyber-price-wrapper">
                <span className="cyber-currency">R$</span>
                <span className="cyber-amount">597</span>
                <span className="cyber-period">/mês</span>
              </div>
              <p className="cyber-plan-summary">
                Desenvolvido sob medida para lojas que investem forte em anúncios de tráfego pago.
              </p>
              
              <div className="cyber-divider"></div>
              
              <ul className="cyber-features-list">
                <li><Check size={16} className="cyber-check" /> <span>Tudo do Plano Alta Rotação</span></li>
                <li><Check size={16} className="cyber-check" /> <strong>IA integrada ao Instagram Direct</strong></li>
                <li><Check size={16} className="cyber-check" /> <span>Qualificação ativa de leads de anúncios</span></li>
                <li><Check size={16} className="cyber-check" /> <span>Gerente de conta exclusivo</span></li>
              </ul>
              
              {/* Link personalizado para o Plano 3 */}
              <a 
                href={generateWhatsAppLink("Máquina de Vendas", "597")}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn-outline"
                style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
              >
                Escalar Escopo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}