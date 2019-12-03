import React, { Component } from 'react';
import api from '../services/api';

function clase(params) {
    var message = JSON.parse(params)
    return (
        <div className="alert alert-success">
            {message.message}
        </div>
    )
}

function cliente(params) {
    var cli = JSON.parse(params)
    return cli.cliente.id;
}

export default class Carrinho extends Component {
    state = {
        compr: []
    }

    componentDidMount() {
        this.loadCompras();
    }

    loadCompras = async () => {
        const response = await api.get('/carrinho/' + cliente(sessionStorage.getItem('cliente')));
        this.setState({ compr: response.data.compras });
        sessionStorage.setItem('produtos', JSON.stringify(response.data.produtos));
        sessionStorage.setItem('categoria', JSON.stringify(response.data.categoria));
    }


    render() {
        const produto = JSON.parse(sessionStorage.getItem('produto'));
        console.log(produto);

        return (
            <>


                <section id="cart_items">
                    <div class="container">
                        {clase(localStorage.getItem('vendas'))}
                        <div className="table-responsive cart_info">
                            <table className="table table-condensed">
                                <thead>
                                    <tr className="cart_menu">
                                        <td className="image">Item</td>
                                        <td className="description"></td>
                                        <td className="price">Price</td>
                                        <td className="quantity">Quantity</td>
                                        <td className="total">Total</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.compr.map(compras => (
                                        <tr>
                                            <td className="cart_product">
                                                <a href=""><img src={`http://painel.supplementstore.com.br/uploads/${compras.nomecategoria}/${compras.arquivo}`} alt="" width="100" /></a>
                                            </td>
                                            <td className="cart_description">
                                                <h4><a href="">{compras.nomeproduto}</a></h4>
                                                <p>{compras.nomecategoria}</p>
                                            </td>
                                            <td className="cart_price">
                                                <p>R$ {parseFloat(compras.valor)}</p>
                                            </td>
                                            <td className="cart_quantity">
                                                <div className="cart_quantity_button">

                                                    <input className="cart_quantity_input" type="text" name="quantity" value={compras.quantidade} autocomplete="off" size="2" />

                                                </div>
                                            </td>
                                            <td className="cart_total">
                                                <p className="cart_total_price">R$ {parseFloat(compras.valor)}</p>
                                            </td>
                                            <td className="cart_delete">
                                                <a className="cart_quantity_delete" href=""><i className="fa fa-times"></i></a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}