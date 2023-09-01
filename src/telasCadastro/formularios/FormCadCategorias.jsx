import { Form, Container, Row, Col, Button, FloatingLabel } from "react-bootstrap";

export default function FormCadCategorias(props) {
    return (
        <Container>
            <Form>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Codigo"
                                className="mb-3"
                            >
                                <Form.Control type="number" min={0} placeholder="34" id="codCat" name="codCat" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o codigo da categoria</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row md={5}><Col>
                    <Form.Group>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Descrição"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Detergente" id="desCat" name="desCat" required />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">Informe qual é a categoria/sub-categoria</Form.Control.Feedback>
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