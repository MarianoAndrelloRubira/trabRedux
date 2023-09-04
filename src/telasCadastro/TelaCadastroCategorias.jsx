import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadCategorias from "./formularios/FormCadCategorias";


import TabelaCategorias from "./tabelas/TabelaCategorias";


export default function TelaCadastroCategorias(props) {
    const [exibirformulario, setExibirFormulario] = useState(true);
    return (

        <Pagina>
            {
                //dinamica em que o usuario ira alternar entre o formulario e a visualização do registros ja cadastrados
                exibirformulario ? <FormCadCategorias /> : <TabelaCategorias />
            }
        </Pagina>

    )
}