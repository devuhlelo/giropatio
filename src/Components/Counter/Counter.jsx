import { useState, useEffect } from "react";
import "./Counter.css";

// Componente auxiliar para animar cada número individualmente
const AnimatedNumber = ({ to, duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(to, 10);
    if (start === end) return;

    const totalMiliseconds = duration;
    const stepTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [to, duration]);

  return <span className="number-value">{count}</span>;
};

export default function Counter() {
  return (
    <section className="counter">
      <div className="counter-container">
      
        
        <div className="counter-item">
          <div className="counter-number">
            <AnimatedNumber to={7} />
            <span className="number-unit">dias</span>
          </div>
        </div>

        <div className="counter-item">
          <div className="counter-number">
            <AnimatedNumber to={24} />
            <span className="number-unit">horas</span>
          </div>
        </div>
      </div>

      <p className="counter-text">
        SisgenCar capturando seus leads <span className="highlight">continuamente</span>
      </p>
    </section>
  );
}