import { useState, useEffect } from "react";
import "./Counter.css";

// Componente auxiliar para animar cada número individualmente com easing
const AnimatedNumber = ({ to, duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const startValue = 0;
    const endValue = parseInt(to, 10);
    if (endValue === startValue) return;

    // easeOutCubic
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    let rafId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const current = Math.round(startValue + (endValue - startValue) * eased);
      setCount(current);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [to, duration]);

  return (
    <span className="number-value" aria-live="polite" aria-atomic="true">{count}</span>
  );
};

export default function Counter() {
  return (
    <section className="counter">
      <div className="counter-container">
        <div className="counter-grid">
          <div className="counter-item">
            <div className="counter-number"><AnimatedNumber to={7} duration={900} /><span className="number-unit">dias</span></div>
            <div className="counter-caption">Prazo médio de follow-up</div>
          </div>

          <div className="counter-item">
            <div className="counter-number"><span className="number-value static">24/7</span></div>
            <div className="counter-caption">Horas e dias</div>
          </div>

          <div className="counter-item">
            <div className="counter-number"><AnimatedNumber to={120} duration={1400} /><span className="number-unit">leads/mês</span></div>
            <div className="counter-caption">Volume médio de leads</div>
          </div>

          <div className="counter-item">
            <div className="counter-number"><AnimatedNumber to={8} duration={1000} /><span className="number-unit">%</span></div>
            <div className="counter-caption">Taxa de conversão estimada</div>
          </div>

       
        </div>

        {/* CTA removido conforme solicitado */}
      </div>

      <p className="counter-text">
        SisgenAuto capturando seus leads <span className="highlight">continuamente</span>
      </p>
    </section>
  );
}