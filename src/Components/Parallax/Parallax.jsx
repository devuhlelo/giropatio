import './Parallax.css'
import patio from '../../assets/patio.jpg'

const Parallax = ({ height = "30vh" }) => {
    return (
        <section
            className="parallax-container"
            style={{
                backgroundImage: `url(${patio})`,
                height: height
            }}
        >
            {/* overlay */}
            <div className="parallax-overlay"></div>

            {/* TEXTO DIRETO NO COMPONENTE */}
            <div className="parallax-content">
                <h1>
                    Transforme visitas em vendas automáticas
                </h1>

                <p>
                    O GiroPátio usa IA para capturar e responder leads 24h por dia
                </p>
            </div>
        </section>
    )
}

export default Parallax