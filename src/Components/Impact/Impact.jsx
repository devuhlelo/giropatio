import "./Impact.css";
import { UserMinus, ZapOff, MessageSquareX, AlertTriangle } from "lucide-react";
// Importe a imagem da sua pasta de assets (ajuste os "../" dependendo de onde está este arquivo)
import imagemImpacto from "../../assets/impacto.png"; 

export default function Impact() {
  return (
    <section className="impact" id="impact">
      <div className="impact-container">
        
        {/* COLUNA DA ESQUERDA: TEXTO E DOR DO CLIENTE */}
        <div className="impact-left-side">
          <h2>
            Sua loja está perdendo leads 
            <span> para a concorrência agora.</span>
          </h2>

          <p className="impact-sub">
            Sem o SisgenAuto centralizando e automatizando o processo, o custo de não ter o sistema cobra seu preço todos os dias.
          </p>

          <div className="impact-box">
            
            <div className="impact-row">
              <div className="left">
                <MessageSquareX size={20} />
                <div>
                  <strong>Atendimento Demorado</strong>
                  <span>Leads esperando minutos (ou horas) para serem respondidos.</span>
                </div>
              </div>
            </div>

            <div className="impact-row">
              <div className="left">
                <UserMinus size={20} />
                <div>
                  <strong>Leads Esquecidos no WhatsApp</strong>
                  <span>Contatos acumulando na carteira dos vendedores sem nenhum acompanhamento ativo.</span>
                </div>
              </div>
            </div>

            <div className="impact-row total">
              <div className="left">
                <ZapOff size={20} />
                <div>
                  <strong>Zero Captura Contínua</strong>
                  <span>Quando sua equipe para de responder, suas vendas também param de acontecer.</span>
                </div>
              </div>
            </div>

          </div>

          <p className="impact-warning">
            <AlertTriangle size={16} /> O cliente de internet compra de quem responde primeiro. Você tem certeza que é você?
          </p>
        </div>

        {/* COLUNA DA DIREITA: MOCKUP + IMAGEM */}
        <div className="impact-right-side">
          <div className="mockup-wrapper">
            {/* Tag img usando a variável importada */}
            <img 
              src={imagemImpacto} 
              alt="Mockup do sistema SisgenAuto e gestor analisando métricas de leads" 
              className="mockup-img"
            />
            {/* Efeito de luz decorativo atrás do mockup */}
            <div className="mockup-glow"></div>
          </div>
        </div>

      </div>
    </section>
  );
}