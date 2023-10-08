import { useState } from "react";
import Pagina from "../templates/Pagina";

import FormCadProdutos from "./formularios/FormCadProdutos";

import TabelaProdutos from "./tabelas/TabelaProdutos";
import TelaMensagem from "./TelaMensagem";



export default function TelaCadastroProduto(props) {
    const [exibirformulario, setExibirFormulario] = useState(true);
    const [listaProdutos, setListaProdutos] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
    const [produtoParaEdicao, setProdutoParaEdicao] = useState({
        cod: '',
        marca: '',
        nomeProd: '',
        precInd: '',
        qtd: '',
        precLot: '',
        cate: ''
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    if (mostrarMensagem) { 
        return <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}/>
    }
    else {
        return (

            <Pagina>
                {
                    //dinamica em que o usuario ira alternar entre o formulario e a visualização do registros ja cadastrados
                    exibirformulario ? <FormCadProdutos exibirformulario={setExibirFormulario}
                        listaProdutos={listaProdutos}
                        setListaProdutos={setListaProdutos}
                        produtoParaEdicao={produtoParaEdicao}
                        setProdutoParaEdicao={setProdutoParaEdicao}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        setMostrarMensagem={setMostrarMensagem}
                        setMensagem={setMensagem}
                        setTipoMensagem={setTipoMensagem} /> :
                        <TabelaProdutos exibirformulario={setExibirFormulario}
                            listaProdutos={listaProdutos}
                            setListaProdutos={setListaProdutos}
                            produtoParaEdicao={produtoParaEdicao}
                            setProdutoParaEdicao={setProdutoParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao} />
                }
            </Pagina>

        )
    }
}