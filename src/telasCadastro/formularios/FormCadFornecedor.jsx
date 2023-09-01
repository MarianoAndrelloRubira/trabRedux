import { Form, Container, Row, Col, Button, FloatingLabel } from "react-bootstrap";

export default function FormCadFornecedor(props) {
    return (
        <Container>
            <Form>
                <Row>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CNPJ"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="XX. XXX. XXX/0001-XX" id="cnpj" name="cnpj" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CNPJ</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Telefone"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="(XX) XXXXX-XXXX" id="telefone" name="telefone" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CNPJ</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome do Fornecdor"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Informe o nome completo" id="nomeForn" name="nomeForn" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome do fornecedor</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="informe o email do fornecedor" id="email" name="email" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o email do fornecedor</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Cidade"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Cidade" id="cidadeForn" name="cidadeForn" />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a Cidade</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
                            <Form.Select aria-label="Unidades federativas">
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP" selected>São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                                <option value="EX">Estrangeiro</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CEP:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Bairro/Vila..." id="cepForn" name="cepForn" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CEP</Form.Control.Feedback>
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