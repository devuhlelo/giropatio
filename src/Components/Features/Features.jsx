import "./Features.css";
import { MessageCircle, MonitorSmartphone, KanbanSquare } from "lucide-react";

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-container">

        <h2>
          Uma máquina de vendas no automático.<br />
          <span>Como resolvemos o seu problema:</span>
        </h2>

        <p className="features-subtitle">
          Nossa IA trabalha 24/7 para que seu vendedor foque apenas em fechar negócios.
        </p>

        <div className="features-grid">

          {/* FEATURE 1 */}
          <div className="features-card">
            <div className="feature-head">
              <div className="icon">
                <MessageCircle size={26} />
              </div>

              <h3>Qualificação Automática (As 3 Gavetas)</h3>
            </div>

            <p>
              A IA atende na hora e descobre: Tem carro na troca? Forma de pagamento? Valor de entrada? O lead só chega ao vendedor quando estiver pronto.
            </p>

            <span className="feature-highlight">
              Atendimento em 3 segundos, 24h por dia
            </span>
          </div>

          {/* FEATURE 2 */}
          <div className="features-card featured">
            <div className="feature-head">
              <div className="icon">
                <MonitorSmartphone size={26} />
              </div>

              <h3>Vitrine Digital Premium</h3>
            </div>

            <p>
              Um catálogo web moderno para a sua agência, com fotos que convertem e precificação integrada automaticamente com a tabela FIPE.
            </p>

            <span className="feature-highlight">
              Seu estoque online de forma profissional
            </span>
          </div>

          {/* FEATURE 3 */}
          <div className="features-card">
            <div className="feature-head">
              <div className="icon">
                <KanbanSquare size={26} />
              </div>

              <h3>Pipeline Kanban Intuitivo</h3>
            </div>

            <p>
              Chega de perder o fio da meada. Acompanhe cada negociação em um funil visual de vendas focado 100% em conversão e fechamento rápido.
            </p>

            <span className="feature-highlight">
              Controle total sobre cada negociação
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}