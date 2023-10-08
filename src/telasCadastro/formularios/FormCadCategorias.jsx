import { useState } from "react";
import { Form, Container, Row, Col, Button, FloatingLabel } from "react-bootstrap";

export default function FormCadCategorias(props) {
    const estadoInicialCategoria = props.categoriaParaEdicao;

    const categoriaVazia = {
        codCat: '',
        desCat: ''
    };

    const [categoria, setCategoria] = useState(estadoInicialCategoria);

    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setCategoria({ ...categoria, [componente.name]: componente.value });
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                if (props.listaCategoria.find((cat) => cat.codCat === categoria.codCat) === undefined) {
                    props.setListaCategoria([...props.listaCategoria, categoria]);
                    props.setMensagem('Categoria incluido com sucesso');
                    props.setTipoMensagem('success');
                    props.setMostrarMensagem(true);
                }
                else {
                    props.setMensagem('Categoria ja cadastrada');
                    props.setTipoMensagem('warning');
                    props.setMostrarMensagem(true);
                }

            }
            else {
                props.setListaCategoria([...props.listaCategoria.filter((itemCategoria) => itemCategoria.codCat !== categoria.codCat), categoria]);
                props.setModoEdicao(false);
                props.setCategoriaParaEdicao(categoriaVazia);
            }
            setCategoria(categoriaVazia);
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
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Codigo"
                                className="mb-3"
                            >
                                <Form.Control type="number" min={0} placeholder="34" id="codCat" name="codCat" required value={categoria.codCat} onChange={manipularMudancas} />
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
                            <Form.Control type="text" placeholder="Detergente" id="desCat" name="desCat" required value={categoria.desCat} onChange={manipularMudancas} />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">Informe qual é a categoria/sub-categoria</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className={"flex justify-content-end"}>
                        <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => {props.exibirformulario(false)}}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}