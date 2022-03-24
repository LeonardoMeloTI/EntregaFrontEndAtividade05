import React from "react";
import './Contatos.css'
import Navbar from "../../Components/Navbar/Navbar";
import Logo from '../../assets/img/Logo.png';
import Footer from "../../Components/Footer/Footer";
import cartoes from "../../assets/img/cartoes.png";
import MainContatos from "../../Components/MainContatos/MainContatos";

export default () => {
  return(
    <>
      <Navbar Logo={Logo}/>
      <main className="bg-contatos">
        <MainContatos/>
        <Footer cartoes={cartoes}/>
      </main>
    </>
  );
}