import React from "react";
import './FormCadastroPromocao.css';
import { useRef, useEffect, useState } from "react";
import { getDestinos } from "../../service/DestinoServices";
import { postPromocao } from "../../service/PromocaoService";


export default (props) => {

  const [destinoViagem, setDestinoViagem] = useState([])
  
  

  useEffect(() => {getDestinos()
  .then((res) => setDestinoViagem(res)).catch((erro) => console.log(erro))},[])

  const destino = useRef();
  const localEmbarque = useRef();
  const preco = useRef();
  const tempoViagem = useRef();
  const data = useRef();

  function postarPromocao(event) {
    event.preventDefault()
    const promocao = {
      localPartida: localEmbarque.current.value,
      precoPromocao: preco.current.value,
      tempoDeViagem: tempoViagem.current.value,
      data: data.current.value,
      destino: {idDestino: destino.current.value}
    }
    postPromocao(promocao).then(() => window.location.reload()).catch((erro) => console.log(erro))
  }

  return(
    <section className="container-fluid mb-2">
          <h1 className="font-config text">{props.titulo}</h1>

          <form onSubmit={postarPromocao}>
            <div className="form-group form">
              <label for="Form">Nome do destino:</label>
              <select className="form-control" id="Form" ref={destino}>
                {destinoViagem.map((destino) => (
                  <option key={destino.idDestino} value={destino.idDestino}>{destino.nomeDestino}</option>
                ))}
              </select>
             
            </div>
            <div className="form-group form">
              <label for="Form">Local de embarque:</label>
              <input type="text" className="form-control" id="Form" ref={localEmbarque}/>
            </div>
            <div className="form-group form">
              <label for="Form">Valor promocional:</label>
              <input type="number" className="form-control" id="Form" step={0.05} ref={preco}/>
            </div>
            <div className="form-group form">
              <label for="Form">Horário da viagem:</label>
              <input type="number" className="form-control" id="Form" ref={tempoViagem}/>
            </div>
            <div className="form-group form">
              <label for="Form">Data do embarque:</label>
              <input type="datetime-local" className="form-control" id="Form" ref={data}/>
            </div>
            <button type="submit" className="btn btn-cadastro">Cadastrar promoção</button>
          </form>
          
          
    </section>
  );
}