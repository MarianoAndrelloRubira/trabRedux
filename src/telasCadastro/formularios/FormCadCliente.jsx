import { useState } from "react";
import { Form, Container, Row, Col, Button, FloatingLabel } from "react-bootstrap";

export default function FormCadClientes(props) {
    //os atributos deste objeto devem estar associados aos imputs do formulario
    const estadoInicialCliente = props.clienteParaEdicao;

    const clienteVazio = {
        cpf: '',
        nome: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        UF: 'SP',
        cep: ''
    };

    const [cliente, setCliente] = useState(estadoInicialCliente);

    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setCliente({ ...cliente, [componente.name]: componente.value });
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            // todos os campos preenchidos
            // mandar os dados para o backend
            if (!props.modoEdicao) {
                props.setListaClientes([...props.listaClientes, cliente]);
                props.setMensagem('Cliente incluido com sucesso');
                props.setTipoMensagem('success');
                props.setMostrarMensagem(true);
                
            }
            else {
                //alterar os dados do cliente (filtra e adiciona)
                props.setListaClientes([...props.listaClientes.filter((itemCliente) => itemCliente.cpf !== cliente.cpf), cliente]);
                props.setModoEdicao(false);
                props.setClienteParaEdicao(clienteVazio);
            }
            setCliente(clienteVazio);//ou sair da tela de formúlario
            setFormValidado(false);
        }
        else {
            setFormValidado(true);
        }



        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CPF"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="000.000.000-00" id="cpf" name="cpf" required value={cliente.cpf} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CPF</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row><Col>
                    <Form.Group>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nome completo"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Informe o nome completo" id="nome" name="nome" required value={cliente.nome} onChange={manipularMudancas} />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">Informe o nome completo</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Endereço"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Avenida/Rua/Alameda/Viela" id="endereco" name="endereco" required value={cliente.endereco} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o endereço</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Numero"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="N" id="numero" name="numero" required value={cliente.numero} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o numero</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>

                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Bairro"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Bairro" id="bairro" name="bairro" required value={cliente.bairro} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Bairro</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Cidade"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Cidade" id="cidade" name="cidade" required value={cliente.cidade} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a Cidade</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
                            <Form.Select aria-label="Unidades federativas" id="UF" name="UF" value={cliente.UF} onChange={manipularMudancas}>
                                <option value="SP" selected>São Paulo</option>
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
                                <Form.Control type="text" placeholder="Bairro/Vila..." id="cep" name="cep" required value={cliente.cep} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a CEP</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className={"flex justify-content-end"}>
                        <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => {

                            props.exibirformulario(false)
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}