import React from "react";
import './TabelaDestinos.css';

export default () => {
  return(
      <div className="tabela-cadastro mt-4 mb-4 table-responsive">

        <table className="table table-sm table-borderless table-hover">
            <thead>
                <tr>
                    <th>
                        Destino
                    </th>
                    <th>
                        Preço da passagem
                    </th>
                    <th>
                        Data de embarque
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
      
              <tr>
                  <td>
                      Guatemala
                  </td>
                  <td>
                      R$2200,00
                  </td>
                  <td>
                      29/02/2022 11:00
                  </td>
                  <td>
                    <a className="btn btn-cadastro" role="button" asp-action="Edit" href="#">Editar</a>
                    <a className="btn btn-cadastro" role="button" href="#">Detalhes</a>
                    <a className="btn btn-cadastro" role="button" href="#">Apagar</a>
                  </td>
                
              </tr>

              <tr>
                  <td>
                      Guatemala
                  </td>
                  <td>
                      R$2200,00
                  </td>
                  <td>
                      11/02/2022 14:00
                  </td>
                  <td>
                      <a className="btn btn-cadastro" role="button" asp-action="Edit" href="#">Editar</a>
                      <a className="btn btn-cadastro" role="button" href="#">Detalhes</a>
                      <a className="btn btn-cadastro" role="button" href="#">Apagar</a>
                  </td>
                
              </tr>

              <tr>
                <td>
                   Egito
                </td>
                <td>
                    R$3000,00
                </td>
                <td>
                    28/02/2022 10:30
                </td>
                <td>
                    <a className="btn btn-cadastro" role="button" asp-action="Edit" href="#">Editar</a>
                    <a className="btn btn-cadastro" role="button" href="#">Detalhes</a>
                    <a className="btn btn-cadastro" role="button" href="#">Apagar</a>
                </td>
            
              </tr>

              <tr>
                <td>
                    Egito
                </td>
                <td>
                    R$3000,00
                </td>
                <td>
                    29/04/2022 09:30
                </td>
                <td>
                    <a className="btn btn-cadastro" role="button" asp-action="Edit" href="#">Editar</a>
                    <a className="btn btn-cadastro" role="button" href="#">Detalhes</a>
                    <a className="btn btn-cadastro" role="button" href="#">Apagar</a>
                </td>
              
              </tr>

            </tbody>
        </table>
    
      </div>
  );
}