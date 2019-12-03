import React, { Component } from 'react';
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.min.css'
import '../assets/css/animate.css'
import '../assets/css/price-range.css'
import '../assets/css/responsive.css'
import api from '../services/api';

function value() {
    const array = sessionStorage.getItem('cliente');
    const newArray = JSON.parse(array);
    return newArray.cliente.id
}



function user(cliente) {
    if (cliente) {
        return (
            <button type="submit" className="btn btn-fefault cart" >
                <i className="fa fa-shopping-cart"></i>
                Comprar
            </button>
        )
    } else {
        return (
            <a href={'/createLogin'} className="btn btn-fefault cart" onClick={pagina(window.location.href)}>
                Faça o login ou cadastre-se pra comprar
            </a>
        )
    }

}

function pagina(params) {
    if (params) {

        localStorage.setItem('pagina', params)
    }
}



export default class ProductDetal extends Component {
    state = {
        arquivo: "",
        nomecategoria: "",
        nomeproduto: "",
        produtos_id: "",
        clientes_id: "",
        valor: "",
        tipo_pagamento: "",
        quantidade: "",
    };
    state = {
        product: {},
        category: {},
    };



    hendleOnchangeTipoPagamento = event => {
        this.setState({ tipo_pagamento: event.target.value })
    };

    hendleOnchangeQuantidade = event => {
        this.setState({ quantidade: event.target.value })
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { product } = this.state;
        const preco = () => {
            return product.preco
        }
        const vendas = {
            arquivo: this.state.product.arquivo,
            nomecategoria: this.state.category.nomecategoria,
            nomeproduto: this.state.product.nomeproduto,
            tipo_pagamento: this.state.tipo_pagamento,
            quantidade: this.state.quantidade,
            produtos_id: this.state.product.id,
            clientes_id: this.state = value(),
            valor: this.state = preco(),
        }

        const res = await api.post("/vendas", vendas)
            .then(function (response) {
                console.log(response.data)
                localStorage.setItem('vendas', JSON.stringify(response.data));
                sessionStorage.setItem('produto', JSON.stringify(vendas));
                window.location.href = '/carrinho';
            }).catch(err => {
                console.log(err);
            })
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/productdetal/${id}`);
        this.setState({ category: response.data.categoria });
        this.setState({ product: response.data.produtos });

    };
    render() {
        const { product } = this.state;
        const { category } = this.state;
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="col-sm-9 padding-right">
                        <div className="product-details">
                            <div className="col-sm-5">
                                <div className="view-product">
                                    <img src={`http://painel.supplementstore.com.br/uploads/${category.nomecategoria}/${product.arquivo}`} alt="" />
                                    <h3>ZOOM</h3>
                                </div>


                            </div>
                            <div className="col-sm-7">
                                <div className="product-information">
                                    <img src="images/product-details/new.jpg" className="newarrival" alt="" />
                                    <h2>{product.nomeproduto}</h2>
                                    <p>Web ID: {product.id}</p>
                                    <img src="images/product-details/rating.png" alt="" />
                                    <span>
                                        <span>R$ {product.preco}</span>
                                        <label>Quantity:</label>
                                        <form onSubmit={this.handleSubmit} method="get">
                                            <input type="text" name="quantidade" onChange={this.hendleOnchangeQuantidade} required />

                                            {user(sessionStorage.getItem('cliente'))}
                                            <select name="tipo_pagamento" id="" className="form-control" onChange={this.hendleOnchangeTipoPagamento}>
                                                <option>Selecione a forma de pagamento</option>
                                                <option value="Dinheiro">Boleto</option>
                                                <option value="Cartao">Cartão de Credito</option>
                                            </select>
                                        </form>
                                    </span>
                                    <p><b>Availability:</b> {parseInt(product.quantidade) > 1 ? "Produto em Falta" : "In Stock"}</p>
                                    <p><b>Condition:</b> New</p>
                                    <p><b>Brand:</b> E-SHOPPER</p>
                                    <a href=""><img src="images/product-details/share.png" className="share img-responsive" alt="" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="category-tab shop-details-tab">
                            <div className="col-sm-12">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a href="#details" data-toggle="tab">Details</a></li>

                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade active in" id="details" >
                                    <div className="col-sm-12">
                                        <p>{product.descricao}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}

