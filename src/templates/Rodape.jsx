export default function Rodape(props) {
    return (
        <footer>
            <div style={{
                border: '3px solid black',
                borderRadius: '15px',
                padding: '5px',
                margin: '10px',
            }}>
                <p>{props.conteudo || "rodapé do sistema."}</p>
            </div>
        </footer>
    )
}