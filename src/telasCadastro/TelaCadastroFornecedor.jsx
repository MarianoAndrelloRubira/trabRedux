import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";


import TabelaFornecedor from "./tabelas/TabelaFornecedor";
import TelaMensagem from "./TelaMensagem";


export default function TelaCadastroFornecedor(props) {
    const [exibirformulario, setExibirFormulario] = useState(true);
    //const [listaFornecedor, setListaFornecedor] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
    const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({
        cnpj: '',
        telefone: '',
        nomeForn: '',
        email: '',
        cidadeForn: '',
        UF: 'SP',
        cepForn: ''
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    if (mostrarMensagem) {
        return <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}/>
    }
    else {
        return (
            <>
                <Pagina>
                    {
                        //dinamica em que o usuario ira alternar entre o formulario e a visualização do registros ja cadastrados
                        exibirformulario ? <FormCadFornecedor exibirformulario={setExibirFormulario}
                            fornecedorParaEdicao={fornecedorParaEdicao}
                            setFornecedorParaEdicao={setFornecedorParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setMostrarMensagem={setMostrarMensagem}
                            setMensagem={setMensagem}
                            setTipoMensage={setTipoMensagem} /> :
                            <TabelaFornecedor exibirformulario={setExibirFormulario}
                                fornecedorParaEdicao={fornecedorParaEdicao}
                                setFornecedorParaEdicao={setFornecedorParaEdicao}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao} />
                    }
                </Pagina>
            </>
        )
    }
}