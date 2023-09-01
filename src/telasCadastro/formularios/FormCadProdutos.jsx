import { Form, Container, Row, Col, Button, FloatingLabel } from "react-bootstrap";

export default function FormCadProdutos(props) {
    return (
        <Container>
            <Form>
                <Row>
                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Codigo"
                                className="mb-3"
                            >
                                <Form.Control type="number" min="0" placeholder="2" id="cod" name="cod" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o código</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Marca"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Coca-Cola" id="marca" name="marca" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a marca</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Coca-Cola 0" id="nomeProd" name="nomeProd" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome completo</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Preço individual"
                                className="mb-3"
                            >
                                <Form.Control type="number" step=".01" placeholder="32.50" id="precInd" name="precInd" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o preço individual</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Quantidade"
                                className="mb-3"
                            >
                                <Form.Control type="number" placeholder="12" id="qtd" name="qtd" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a quantidade individual</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Preço do lote"
                                className="mb-3"
                            >
                                <Form.Control type="number" step=".01" placeholder="32.50" id="precLot" name="precLot" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o preço do lote</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Categoria"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Refrigerante" id="cate" name="cate" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a categoria do produto</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className={"flex justify-content-end"}>
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}