import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadCategorias from "./formularios/FormCadCategorias";


import TabelaCategorias from "./tabelas/TabelaCategorias";
import TelaMensagem from "./TelaMensagem";


export default function TelaCadastroCategorias(props) {
    const [exibirformulario, setExibirFormulario] = useState(true);
    const [listaCategoria, setListaCategoria] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
    const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({
        codCat: '',
        desCat: ''
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    if (mostrarMensagem) {
        return <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}/>
    }
    else {
        return (
            <Pagina>
                {
                    exibirformulario ? <FormCadCategorias exibirformulario={setExibirFormulario}
                        listaCategoria={listaCategoria}
                        setListaCategoria={setListaCategoria}
                        categoriaParaEdicao={categoriaParaEdicao}
                        setCategoriaParaEdicao={setCategoriaParaEdicao}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        setMostrarMensagem={setMostrarMensagem}
                        setMensagem={setMensagem}
                        setTipoMensagem={setTipoMensagem} />
                        :
                        <TabelaCategorias exibirformulario={setExibirFormulario}
                            listaCategoria={listaCategoria}
                            setListaCategoria={setListaCategoria}
                            categoriaParaEdicao={categoriaParaEdicao}
                            setCategoriaParaEdicao={setCategoriaParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao} />
                }
            </Pagina>
        )
    }
}