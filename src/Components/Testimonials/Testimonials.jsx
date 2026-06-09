import "./Testimonials.css";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Agência em BH",
    text: "Antes eu respondia o dia inteiro e fechava pouco. Agora só falo com cliente que já chega decidido.",
  },
  {
    name: "Rafael Souza",
    role: "Revenda Multimarcas",
    text: "Teve dia que vendi 2 carros só com lead qualificado. Isso nunca acontecia antes.",
  },
  {
    name: "Juliano Costa",
    role: "Loja Automotiva",
    text: "O sistema filtra curioso sozinho. Meu vendedor agora só fecha negócio.",
  },
  {
    name: "Marcos Vinicius",
    role: "Agência Regional",
    text: "Os carros começaram a girar rápido. O dinheiro parou de ficar travado.",
  },
  {
    name: "André Lima",
    role: "Revendedor",
    text: "O cliente já chega perguntando entrada e parcela. É outro nível.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">

      <h2>
        Quem usa, <span>vende mais rápido</span>
      </h2>

      <div className="scroll">
        <div className="scroll-track">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div className="card" key={i}>

              <p className="text">“{t.text}”</p>

              <div className="user">
                <div className="avatar" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}