import { useState } from "react";
import { Form, Container, Row, Col, Button, FloatingLabel } from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";
import {adicionar,atualizar} from "../../redux/produtoReducer"

export default function FormCadProdutos(props) {
    const estadoInicialPorduto = props.produtoParaEdicao;
    const produtoVazio = {
        cod: '',
        marca: '',
        nomeProd: '',
        precInd: '',
        qtd: '',
        precLot: '',
        cate: ''
    }
    const [produto, setProduto] = useState(estadoInicialPorduto);
    const [formValidado, setFormValidado] = useState(false);
    const {status,msgProduto,listaProdutos}=useSelector(state=>state.produto);
    const dispatch = useDispatch();

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setProduto({ ...produto, [componente.name]: componente.value });
    }



    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                if (produto.precLot == produto.qtd * produto.precInd) {
                    if (listaProdutos.find((prod) => prod.cod === produto.cod) === undefined) {
                       // props.setListaProdutos([...props.listaProdutos, produto]);
                       dispatch(adicionar(produto));
                        props.setMensagem('Produto incluido com sucesso');
                        props.setTipoMensagem('success');
                        props.setMostrarMensagem(true);
                    }
                    else {
                        props.setMensagem('Produto ja cadastrado');
                        props.setTipoMensagem('warning');
                        props.setMostrarMensagem(true);
                        props.setProdutoParaEdicao(produto);
                    }
                }
                else
                {
                    props.setMensagem('Valor do lote está incoreto');
                    props.setTipoMensagem('warning');
                    props.setMostrarMensagem(true);
                    props.setProdutoParaEdicao(produto);
                }

            }
            else {
                //props.setListaProdutos([...props.listaProdutos.filter((itemProduto) => itemProduto.cod !== produto.cod), produto]);
                dispatch(atualizar(produto));
                props.setModoEdicao(false);
                props.setProdutoParaEdicao(produtoVazio);
                props.setMensagem('Produto atualizado com sucesso');
                props.setTipoMensagem('success');
                props.setMostrarMensagem(true);
            }
            setProduto(produtoVazio);
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
                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Codigo"
                                className="mb-3"
                            >
                                <Form.Control type="number" min="0" placeholder="2" id="cod" name="cod" required value={produto.cod} onChange={manipularMudancas} />
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
                                <Form.Control type="text" placeholder="Coca-Cola" id="marca" name="marca" required value={produto.marca} onChange={manipularMudancas} />
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
                                <Form.Control type="text" placeholder="Coca-Cola 0" id="nomeProd" name="nomeProd" required value={produto.nomeProd} onChange={manipularMudancas} />
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
                                <Form.Control type="number" step=".01" placeholder="32.50" id="precInd" name="precInd" required value={produto.precInd} onChange={manipularMudancas} />
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
                                <Form.Control type="number" placeholder="12" id="qtd" name="qtd" required value={produto.qtd} onChange={manipularMudancas} />
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
                                <Form.Control type="number" step=".01" placeholder="32.50" id="precLot" name="precLot" required value={produto.precLot} onChange={manipularMudancas} />
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
                                <Form.Control type="text" placeholder="Refrigerante" id="cate" name="cate" required value={produto.cate} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a categoria do produto</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className={"flex justify-content-end"}>
                        <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => { props.exibirformulario(false) }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}