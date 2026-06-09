import "./Pain.css";
import { MessageCircle, Clock, Car } from "lucide-react";

export default function Pain() {
  return (
    <section className="pain">
      <div className="pain-container">

        <h2>
          Todo dia que um carro fica parado,
          <span> você está perdendo dinheiro.</span>
        </h2>

        <p className="pain-subtitle">
          E o pior: você nem percebe quanto está deixando na mesa.
        </p>

        <div className="pain-grid">

          {/* CARD 1 */}
          <div className="pain-card">
            <div className="icon">
              <MessageCircle size={26} />
            </div>

            <h3>Você responde… e não vende</h3>

            <p>
              80% das conversas no WhatsApp são perda de tempo.
              Seu vendedor vira atendente de curioso.
            </p>

            <span className="pain-impact">
              Tempo jogado fora todos os dias
            </span>
          </div>

          {/* CARD 2 - DESTACADO */}
          <div className="pain-card featured">
            <div className="icon">
              <Clock size={26} />
            </div>

            <h3>Seu cliente compra do concorrente</h3>

            <p>
              Ele chama, espera… e vai embora.
              Quem responde primeiro, vende.
            </p>

            <span className="pain-impact strong">
              Você perde vendas todos os dias
            </span>
          </div>

          {/* CARD 3 */}
          <div className="pain-card">
            <div className="icon">
              <Car size={26} />
            </div>

            <h3>Seu estoque está parado</h3>

            <p>
              Cada dia no pátio é dinheiro evaporando.
              E ninguém está acelerando a saída.
            </p>

            <span className="pain-impact">
              Seu capital está travado
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}