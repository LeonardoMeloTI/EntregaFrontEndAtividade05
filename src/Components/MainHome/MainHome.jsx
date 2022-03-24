import React from "react";
import Carousel from "./Carousel/Carousel";
import alemanha from "../../assets/img/alemanha.jpg";
import belize from "../../assets/img/belize.jpg";
import italia from "../../assets/img/italia.jpg";
import lugares from "../../assets/img/lugares.jpg";
import "./MainHome.css";


export default (props) => {
  return(
      <main className="pb-3">
        <Carousel fotoalemanha = {alemanha} fotobelize = {belize} fotoitalia = {italia}/>

        <section>
          <div className="text-center mb-2">
            <br/>
            <h1 className="display-4 word">Seja bem-vindo</h1>
            <img className ="img"src={lugares} alt="lugares no mundo"/>
            <br/>
            <h2 className="text-center word">Sobre a Empresa365</h2>
                    <div>
                        <div className="sobre-description">
                            <p>A Empresa foi criada com o próposito de facilitar a vida das pessoas nas suas viagens nacionais e internacionais com pacotes que cabem no bolso e aproveitando o melhor da vida que é conhecer novos lugares, eu Leonardo Silva de Melo o criador do site, com todo conteúdo passado pelo programa do curso o qual pude colocar em prática todo conhecimento acadêmico e com ajuda dos monitores que desde do começo agregaram em muito e além dos professores com matéria de solfskills e a matéria de hardskills de programação.</p>
                        </div>
                    </div>
                <br/>
            <br/>
            <h2 className="word"> Benefícios de utilizar nossos serviços</h2>
            <br/>
            <br/>
          </div>
          <div className="container text-center">
            <div className="row justify-content-around">
              <div className="info-cards col-12 col-sm-5 mb-4">
                  <h5>Bagagem</h5>
                  <div>
                      <img id="bagagem" src={props.Bagagem} alt="bagagem"/>
                      <ul>
                          <li>Despreocupação com malas e seus itens contidos nela.Qualuer dano causado a empresa irá arcar com os custos.</li>
                      </ul>
                  </div>
              </div>
              <div className="info-cards col-12 col-sm-5 mb-4">
                  <h5>Translado</h5>
                  <div>
                      <img id="transferencia" src={props.Transferencia} alt="transferencia" />
                      <ul>
                          <li>Sem preocupação no seu deslocamento independente do lugar que esteja.A condução a empresa fica responsável conforme a contratação do pacote de viagem.</li>
                      </ul>
                  </div>
              </div>
              <div className="info-cards col-12 col-sm-5 mb-4">
                  <h5>Bilhete da passagem</h5>
                  <div>
                      <img id="bilhete" src={props.Bilhete} alt="bilhete" />
                      <ul>
                          <li>O acessso as datas e o destino podem ser acessados de qualquer lugar do brasil com a maior praticidade e descomplicação comparado as outras empresas.</li>
                      </ul>
                  </div>
              </div>
              <div className="info-cards col-12 col-sm-5 mb-4">
                  <h5>Documentos</h5>
                  <div>
                      <img id="documento" src={props.Documentos} alt="documento" />
                      <ul>

                      <li>Toda questão burocrática de documentos já ficam salvos no sistema e agilizando o processo de checagem das informações.</li>
                      </ul>
                  </div>
              </div>
               <div className="info-cards col-12 col-sm-5 mb-4">
                  <h5>Turismo</h5>
                  <div>
                      <img id="turismo" src={props.Turismo} alt="turismo" />
                      <ul>
                        <li>
                        Pacote completo de viagem com o melhor preço de mercado.</li>
                      </ul>                      
                  </div>  
              </div>
              <div className="info-cards col-12 col-sm-5 mb-4">
                  <h5>Ponto turísticos</h5>
                  <div>
                      <img id="praia" src={props.Praia} alt="praia" />
                      <ul>
                          <li>Temos guias treinados e com a melhor orientação para aproveitar a beleza local visitada.</li>
                      </ul>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}