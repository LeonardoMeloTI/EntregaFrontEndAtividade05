import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Logo from '../../assets/img/Logo.png'
import './Cadastro.css'
import { Link } from "react-router-dom";


export default () => {

  return(
    <>
      <Navbar Logo={Logo}/>
      <main className="container-cadastro">
        <Link to={"/Cadastro/CadastroDestino"}>
          <button>Destinos</button>
        </Link>

        <Link to={"/Cadastro/CadastroPromocao"}>
          <button>Promoções</button>
        </Link>
        <Link to={"/Cadastro/CadastroMensagem"}>
          <button>Mensagens</button>
        </Link>
      </main>
    </>
  );
}