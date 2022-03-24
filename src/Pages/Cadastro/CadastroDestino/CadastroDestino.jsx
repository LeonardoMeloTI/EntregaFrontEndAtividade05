import React from "react";
import Navbar from '../../../Components/Navbar/Navbar'
import Logo from '../../../assets/img/Logo.png'
import './CadastroDestino.css'
import TabelaCadastro from "../../../Components/TabelaCadastro/TabelaCadastro";
import FormCadastroDestino from "../../../Components/FormCadastroDestino/FormCadastroDestino";


export default () => {

  return(
    <>
      <Navbar Logo={Logo}/>
      <main className="container-cadastro-destino text">
        <FormCadastroDestino titulo="Cadastro de destinos"/>
        <TabelaCadastro/>
      </main>
    </>
  );
}