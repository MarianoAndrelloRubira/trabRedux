import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";


import TabelaClientes from "./tabelas/TabelaClientes";


export default function TelaCadastroFornecedor(props) {
    const [exibirformulario, setExibirFormulario] = useState(true);
    return (

        <Pagina>
            {
                //dinamica em que o usuario ira alternar entre o formulario e a visualização do registros ja cadastrados
                exibirformulario ? <FormCadFornecedor /> : <TabelaClientes />
            }
        </Pagina>

    )
}