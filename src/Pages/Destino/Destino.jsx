import React from "react";
import './Destino.css';
import Navbar from "../../Components/Navbar/Navbar";
import Logo from '../../assets/img/Logo.png';
import Footer from "../../Components/Footer/Footer";
import cartoes from "../../assets/img/cartoes.png";
import MainDestino from "../../Components/MainDestino/MainDestino";

export default () => {
  return(
    <>
      <Navbar Logo={Logo}/>
      <MainDestino/>
      <Footer cartoes={cartoes}/>
    </>
  );
}