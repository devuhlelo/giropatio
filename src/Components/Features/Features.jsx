import "./Features.css";
import { MessageCircle, Car, BarChart3 } from "lucide-react";

export default function Features() {
  return (
    <section className="features">
      <div className="features-container">

        <h2>
          Você não precisa trabalhar mais.
          <br />
          <span>Precisa de um sistema que venda por você.</span>
        </h2>

        <p className="features-subtitle">
          O GiroPátio elimina o tempo perdido e transforma atendimento em vendas reais.
        </p>

        <div className="features-grid">

          {/* FEATURE 1 */}
          <div className="features-card">
            <div className="icon">
              <MessageCircle size={26} />
            </div>

            <h3>Atenda em 3 segundos — 24h por dia</h3>

            <p>
              Enquanto você dorme, a IA responde seus clientes, mantém o interesse vivo
              e impede que o lead vá embora para o concorrente.
            </p>

            <span className="feature-highlight">
              Nunca mais perca cliente por demora
            </span>
          </div>

          {/* FEATURE 2 */}
          <div className="features-card featured">
            <div className="icon">
              <Car size={26} />
            </div>

            <h3>Pare de perder tempo com curioso</h3>

            <p>
              A IA só entrega o cliente quando ele já informou entrada, forma de pagamento
              e interesse real no veículo.
            </p>

            <span className="feature-highlight">
              Seu vendedor fala só com quem vai comprar
            </span>
          </div>

          {/* FEATURE 3 */}
          <div className="features-card">
            <div className="icon">
              <BarChart3 size={26} />
            </div>

            <h3>Transforme seu pátio em dinheiro</h3>

            <p>
              Organize seu estoque, publique automaticamente e acelere a saída dos carros
              que estão parados.
            </p>

            <span className="feature-highlight">
              Menos estoque parado, mais caixa girando
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}