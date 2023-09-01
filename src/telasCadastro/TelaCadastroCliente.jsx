import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadClientes from "./formularios/FormCadCliente";
import FormCadProdutos from "./formularios/FormCadProdutos";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import FormCadCategorias from "./formularios/FormCadCategorias";

import TabelaCategorias from "./tabelas/TabelaCategorias";
import TabelaClientes from "./tabelas/TabelaClientes";
import TabelaFornecedor from "./tabelas/TabelaFornecedor";
import TabelaProdutos from "./tabelas/TabelaProdutos";


export default function TelaCadastroCliente(props) {
    const [exibirformulario, setExibirFormulario] = useState(true);
    return (
        <Pagina>
            {
                //dinamica em que o usuario ira alternar entre o formulario e a visualização do registros ja cadastrados
                //exibirformulario?<FormCadCleintes/>:<TabelaClientes/>
                <>
                    <FormCadCategorias />
                    <hr></hr>
                    <br></br>
                    <FormCadClientes />
                    <hr></hr>
                    <br></br>
                    <FormCadFornecedor/>
                    <hr></hr>
                    <br></br>
                    <FormCadProdutos/>
                    <hr></hr>
                    <br></br>
                    <TabelaCategorias />
                    <hr></hr>
                    <br></br>
                    <TabelaClientes />
                    <hr></hr>
                    <br></br>
                    <TabelaFornecedor/>
                    <hr></hr>
                    <br></br>
                    <TabelaProdutos/>
                </>

            }
        </Pagina>
    )
}