import React from "react";
import './TabelaContatos.css';

export default () => {
  return(
        <div className="tabela-cadastro mt-4 mb-4 table-responsive">
          <table className="table table-sm table-borderless table-hover">
            <thead>
              <tr>
                <th>Nome do cliente</th>
                <th>CPF</th>
                <th>Nº do cartão de crédito</th>
                <th>Telefone</th>
                <th>E-mail</th>
                <th>Destino</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Leonardo Melo</td>
                <td>14070896732</td>
                <td>1111111111111111</td>
                <td>21 993067602</td>
                <td>Leko@gmail.com</td>
                <td>Guatemala</td>
                <td>
                  <a className="btn btn-cadastro" role="button" href="#">Editar</a>
                  <a className="btn btn-cadastro" role="button" href="#">Detalhes</a>
                  <a className="btn btn-cadastro" role="button" href="#">Apagar</a>
                </td>
              </tr>

              <tr>
                <td>Leonardo Melo</td>
                <td>14070896732</td>
                <td>1111111111111111</td>
                <td>21 9993067602</td>
                <td>Leko@gmail.com</td>
                <td>Guatemala</td>
                <td>
                  <a className="btn btn-cadastro" role="button" href="#">Editar</a>
                  <a className="btn btn-cadastro" role="button" href="#">Detalhes</a>
                  <a className="btn btn-cadastro" role="button" href="#">Apagar</a>
                </td>
              </tr>
              <tr>
                <td>Lucas</td>
                <td>14070896732</td>
                <td>1111111111111111</td>
                <td>21 993067602</td>
                <td>Leko@gmail.com</td>
                <td>Guatemala</td>
                <td>
                  <a className="btn btn-cadastro" role="button" href="#">Editar</a>
                  <a className="btn btn-cadastro" role="button" href="#">Detalhes</a>
                  <a className="btn btn-cadastro" role="button" href="#">Apagar</a>
                </td>
              </tr>
              <tr>
                <td>Leonardo Melo</td>
                <td>14070896732</td>
                <td>1111111111111111</td>
                <td>21 9993067602</td>
                <td>Leko@gmail.com</td>
                <td>Guatemala</td>
                <td>
                  <a className="btn btn-cadastro" role="button" href="#">Editar</a>
                  <a className="btn btn-cadastro" role="button" href="#">Detalhes</a>
                  <a className="btn btn-cadastro" role="button" href="#">Apagar</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  );
}