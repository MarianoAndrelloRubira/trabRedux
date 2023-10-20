import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remover } from "../../redux/produtoReducer";

export default function TabelaProdutos(props) {
    const { status, mensagem, listaProdutos} = useSelector(state => state.produto);
    const dispatch = useDispatch();
    function excluirProduto(produto) {
        if (window.confirm('Deseja realmente excluir esse produto?')) {
            dispatch(remover(produto));
            //props.setListaProdutos(
            //    listaProdutos.filter((itemLista => itemLista.cod !== produto.cod))
            //);
        }
    }
    function editarProduto(produto) {
        props.setProdutoParaEdicao(produto);
        props.setModoEdicao(true);
        props.exibirformulario(true);
    }
    return (
        <Container>
            <Button type="button"onClick={() => {
                props.exibirformulario(true);
            }}>Novo Produto</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Marca</th>
                        <th>Nome</th>
                        <th>Preço do lote</th>
                        <th>Quantidade</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                {//props.listaProdutos.map((produto) => {
                    listaProdutos.map((produto) => {
                        return (<tr key={produto.cod}>
                            <td>{produto.cod}</td>
                            <td>{produto.marca}</td>
                            <td>{produto.nomeProd}</td>
                            <td>{produto.precLot}</td>
                            <td>{produto.qtd}</td>
                            <td>{produto.cate}</td>
                            <td><Button variant="danger" onClick={() => {
                                excluirProduto(produto);
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg>
                            </Button>{''}
                                <Button variant="warning" onClick={()=>{editarProduto(produto)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                    </svg>
                                </Button></td>
                        </tr>)
                    })
                    }
                </tbody>
            </Table>
        </Container>
    );
}