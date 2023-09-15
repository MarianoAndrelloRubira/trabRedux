import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadClientes from "./formularios/FormCadCliente";


import TabelaClientes from "./tabelas/TabelaClientes";


export default function TelaCadastroCliente(props) {
    const [exibirformulario, setExibirFormulario] = useState(false);
    const [listaClientes, setListaClientes] = useState([]);
    const [clienteParaEdicao, setClienteParaEdicao] = useState({
        cpf: '',
        nome: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        UF: 'SP',
        cep: ''
    });
    const [modoEdicao, setModoEdicao] = useState(false);

    return (

        <Pagina>
            {

                //dinamica em que o usuario ira alternar entre o formulario e a visualização do registros ja cadastrados
                exibirformulario ? <FormCadClientes exibirformulario={setExibirFormulario}
                    listaClientes={listaClientes}
                    setListaClientes={setListaClientes}
                    clienteParaEdicao={clienteParaEdicao}
                    setClienteParaEdicao={setClienteParaEdicao}
                    modoEdicao={modoEdicao}
                    setModoEdicao={setModoEdicao} /> :
                    <TabelaClientes exibirformulario={setExibirFormulario}
                        listaClientes={listaClientes}
                        setListaClientes={setListaClientes}
                        clienteParaEdicao={clienteParaEdicao}
                        setClienteParaEdicao={setClienteParaEdicao}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao} />
            }
        </Pagina>
    )
}