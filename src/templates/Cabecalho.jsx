//componente que deve receber uma propiedade conteudo
import { Alert } from "react-bootstrap"


export default function Cabecalho(props) {
    return (
        <Alert variant = "danger" className={'text-center'}>
            {props.conteudo || "Sistema"}
        </Alert>
    )
}