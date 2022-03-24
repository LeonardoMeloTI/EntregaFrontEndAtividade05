import React, { useRef } from "react";
import './MainContatos.css';
import { postContato } from "../../service/ContatoService";

export default () => {
  
  const nome = useRef();
  const email = useRef();
  const assunto = useRef();
  const mensagem = useRef();

  function enviarMensagem(event){
    event.preventDefault()
    const contato = {email: email.current.value,
    nome: nome.current.value,
    assunto: assunto.current.value,
    mensagem: mensagem.current.value}
    postContato(contato).then(() => window.location.reload()).catch((err) => console.log(err))
    alert("Mensagem enviada!")
  }

  return(
      <main className="pb-3">
        <h1 className="font-config text-center texto">Fale conosco</h1>

        <section className="container mt-3 section-contatos">

          <form className="form-contato form" onSubmit={enviarMensagem}>
            <div className="form-group">
              <label for="nome">Seu nome:</label>
              <input type="text" className="form-control texto" id="nome" placeholder="digite seu nome" maxLength={50} required ref={nome}/>
            </div>
            <div className="form-group">
              <label for="email">Endereço de email:</label>
              <input type="email" className="form-control texto" id="email" placeholder="nome@exemplo.com" maxLength={70} required ref={email}/>
            </div>
            <div className="form-group">
              <label for="assunto">Assunto:</label>
              <select className="form-control texto" id="assunto" maxLength={600} required ref={assunto}>
                <option>Escolha uma opção</option>
                <option>Denúncia</option>
                <option>Passagens/Promoções</option>
                <option>Cancelamento</option>
                <option>Reclamações</option>
                <option>Outros assuntos</option>
              </select>
            </div>
            
            <div className="form-group">
              <label for="mensagem">Mensagem:</label>
              <textarea className="form-control texto" id="mensagem" rows="5" ref={mensagem} required></textarea>
            </div>
            <button type="submit" className="btn btn-form-contato">Enviar mensagem</button>
          </form>
        </section>
        
      </main>
  );
}