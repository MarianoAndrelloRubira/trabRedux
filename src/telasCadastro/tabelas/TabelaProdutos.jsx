import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProdutos(props) {
    return (
        <Container>
            <Button type="button">Novo Produto</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Marca</th>
                        <th>Nome</th>
                        <th>Preço do lote</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>Coca-Cola</td>
                        <td>Coca Cola0 2L</td>
                        <td>320.34</td>
                        <td>Refrigerante</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}