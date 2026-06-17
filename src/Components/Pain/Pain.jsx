import "./Pain.css";
import { MessageCircle, Clock, Car } from "lucide-react";

export default function Pain() {
  return (
    <section className="pain" id="pain">
      <div className="pain-container">

        <h2>
          O que acontece quando <span>você não usa o SisgenCar?</span>
        </h2>

        <p className="pain-subtitle">
          Leads chegam todos os dias — mas sem resposta rápida, eles simplesmente somem.
        </p>

        <div className="pain-grid">

          {/* CARD 1 */}
          <div className="pain-card">
            <div className="icon">
              <MessageCircle size={26} />
            </div>

            <h3>O Vendedor Exausto</h3>

            <p>
              Sua equipe perde horas no WhatsApp respondendo "Qual o valor?" ou "Aceita troca?" para curiosos que somem no minuto seguinte.
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

            <h3>O Cliente no Vácuo</h3>

            <p>
              Aquele lead quente chega de madrugada com dinheiro na mão, mas esfria e vai para o concorrente porque ninguém da agência respondeu na hora.
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

            <h3>O Dinheiro Parado</h3>

            <p>
              Carros perdendo valor de tabela a cada mês no pátio, enquanto você luta para gerenciar negociações espalhadas no papel.
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