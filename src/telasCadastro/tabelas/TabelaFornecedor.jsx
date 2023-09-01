import { Button, Container, Table } from "react-bootstrap";

export default function TabelaFornecedor(props) {
    return (
        <Container>
            <Button type="button">Novo Fornecedor</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CNPJ</th>
                        <th>telefone</th>
                        <th>nome</th>
                        <th>email</th>
                        <th>cidade/uf</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00.000.000/0001-00</td>
                        <td>(00) 00000-0000</td>
                        <td>Distribuidora seu paulo</td>
                        <td>Presidente Prudente/SP</td>
                        <td>00000-000</td>
                        <td>19030-000</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}