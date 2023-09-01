import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Menu from "./Menu";

export default function Pagina(props) {
    return (
        <>
            <Cabecalho conteudo="Sistema de Gestão Comercial" />
            <Menu />
            <div>
                {
                    // filhos da pagina
                }
                {props.children}
            </div>
            <Rodape conteudo="Rua x,100 - Vila Tal - Presidente Prudente/SP - CNPJ 00.000.000/00" />
        </>
    )
}