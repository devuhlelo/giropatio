import "./Impact.css";
import { Car, Clock, DollarSign } from "lucide-react";

export default function Impact() {
  return (
    <section className="impact">

      <div className="impact-container">

        <h2>
          Seu dinheiro não está no banco.
          <span> Está parado no pátio.</span>
        </h2>

        <p className="impact-sub">
          E quanto mais tempo passa, mais valor você perde.
        </p>

        {/* BOX */}
        <div className="impact-box">

          <div className="impact-row">
            <div className="left">
              <Car size={18} />
              <span>12 veículos parados</span>
            </div>
            <span className="muted">—</span>
          </div>

          <div className="impact-row">
            <div className="left">
              <Clock size={18} />
              <span>+45 dias no pátio</span>
            </div>
            <span className="muted">—</span>
          </div>

          <div className="impact-row total">
            <div className="left">
              <DollarSign size={18} />
              <span>Capital travado</span>
            </div>
            <strong>R$ 96.000+</strong>
          </div>

        </div>

        <p className="impact-warning">
          Enquanto isso, clientes estão comprando de quem responde primeiro.
        </p>

      </div>

    </section>
  );
}