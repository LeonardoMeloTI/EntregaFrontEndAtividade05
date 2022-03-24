import React, { useEffect, useState } from "react";
import './CadastroMensagens.css';
import Navbar from "../../../Components/Navbar/Navbar";
import Logo from "../../../assets/img/Logo.png"
import { getContatos, deletarContato} from "../../../service/ContatoService";

export default () => {

  const [mensagem, setMensagem] = useState([]);

  useEffect(() => {getContatos().then((res) => setMensagem(res
    )).catch((erro) => console.log(erro))},[])

  function apagarMensagem(id){
    deletarContato(id).then(getContatos().then((res) => setMensagem(res)).then(() => window.location.reload())).catch((erro) => console.log(erro))
  }
  return(
    <>
      <Navbar Logo={Logo}/>
      <main>
        <h1 className="text-center texto">Mensagens</h1>
      </main>

      <section className="mensagem Mensagem">
        {mensagem.map((mensagem) => (
          <div className="mt-5 mb-5 container-mensagem" key={mensagem.id}>
            <div className="div-button-delete mb-1 Mensagem">
              <button className="button-delete Mensagem" onClick={() => apagarMensagem(mensagem.id)}><i className="bi bi-trash"></i></button>
            </div>
            
            <h3 className="text-center Mensagem"></h3>
            <span className="mb-1 Mensagem">Nome: {mensagem.nome}</span>
            <span className="mb-1 Mensagem">Email: {mensagem.email}</span>
            <span>Assunto:</span>
            <span className="mb-1 Mensagem">{mensagem.assunto}</span>
            <span className="text-center Mensagem">Mensagem:</span>
            <p>{mensagem.mensagem}</p>
          </div>
        ))}
        
      </section>
      

    </>
  );
}