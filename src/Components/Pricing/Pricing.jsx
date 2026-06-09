import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing-container">

        <h2>
          Escolha o plano que vai
          <span> acelerar suas vendas</span>
        </h2>

        <p className="pricing-subtitle">
          Você não precisa de mais leads. Precisa fechar mais rápido.
        </p>

        <div className="pricing-grid">

          {/* PLANO 1 */}
          <div className="pricing-card">
            <h3>Motor de Partida</h3>

            <div className="price">
              <span>R$</span>197
              <small>/mês</small>
            </div>

            <p className="desc">
              Comece a vender mais sem aumentar sua equipe.
            </p>

            <ul>
              <li>✔ Atendimento automático no WhatsApp</li>
              <li>✔ Vitrine digital</li>
              <li>✔ Até 30 veículos</li>
            </ul>

            <button>Começar agora</button>
          </div>

          {/* PLANO 2 DESTACADO */}
          <div className="pricing-card featured">
            <div className="badge">MAIS ESCOLHIDO</div>

            <h3>Alta Rotação</h3>

            <div className="price">
              <span>R$</span>347
              <small>/mês</small>
            </div>

            <p className="desc highlight-text">
              O plano que paga sozinho com 1 venda a mais.
            </p>

            <ul>
              <li>✔ Estoque ilimitado</li>
              <li>✔ Integração FIPE automática</li>
              <li>✔ Pipeline Kanban completo</li>
              <li>✔ Prioridade nos atendimentos</li>
            </ul>

            <button className="primary">
              Quero vender mais rápido
            </button>
          </div>

          {/* PLANO 3 */}
          <div className="pricing-card">
            <h3>Máquina de Vendas</h3>

            <div className="price">
              <span>R$</span>597
              <small>/mês</small>
            </div>

            <p className="desc">
              Para quem quer escalar e rodar tráfego.
            </p>

            <ul>
              <li>✔ IA no WhatsApp 24h</li>
              <li>✔ IA no Instagram</li>
              <li>✔ Ideal para tráfego pago</li>
            </ul>

            <button>Escalar agora</button>
          </div>

        </div>

      </div>
    </section>
  );
}