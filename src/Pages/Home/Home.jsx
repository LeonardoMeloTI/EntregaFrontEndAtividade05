import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Logo from '../../assets/img/Logo.png';
import Praia from '../../assets/img/Praia.png';
import Turismo from '../../assets/img/Turismo.png';
import Documentos from '../../assets/img/Documentos.png';
import Bagagem from '../../assets/img/Bagagem.png';
import Bilhete from '../../assets/img/Bilhete.png';
import Transferencia from '../../assets/img/Transferencia.png';
import MainHome from "../../Components/MainHome/MainHome";
import Footer from "../../Components/Footer/Footer";
import cartoes from "../../assets/img/cartoes.png";

export default () => {
  return(
    <>
      <Navbar Logo={Logo}/>
      <MainHome  Praia={Praia} Turismo={Turismo} Documentos={Documentos} Bagagem={Bagagem} Bilhete={Bilhete} Transferencia={Transferencia} />
      <Footer cartoes={cartoes}/> 
    </>
  )
}