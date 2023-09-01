import { Button, Container, Table } from "react-bootstrap";

export default function TabelaCategorias(props) {
    return (
        <Container>
            <Button type="button">Nova Categoria</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123</td>
                        <td>limpeza</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}