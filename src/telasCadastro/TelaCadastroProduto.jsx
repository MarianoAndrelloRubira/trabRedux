import { useState } from "react";
import Pagina from "../templates/Pagina";

import FormCadProdutos from "./formularios/FormCadProdutos";

import TabelaProdutos from "./tabelas/TabelaProdutos";



export default function TelaCadastroProduto(props) {
    const [exibirformulario, setExibirFormulario] = useState(true);
    return (

        <Pagina>
            {
                //dinamica em que o usuario ira alternar entre o formulario e a visualização do registros ja cadastrados
                exibirformulario ? <FormCadProdutos /> : <TabelaProdutos />
            }
        </Pagina>

    )
}