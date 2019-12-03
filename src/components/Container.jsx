import React, { Component } from "react";
import MenuCategoria from "../components/MenuCategoria";
import api from "../services/api";
import img from "../utils/img";
import Banners from "./Banners";
import { Link } from "react-router-dom";

function alert(params) {
  const ms = JSON.parse(params);

  //alert(ms.message);
  //localStorage.removeItem('vendas')
}

alert(localStorage.getItem("vendas"));

class Products extends Component {
  state = {
    category: [],
    product: []
  };
  componentDidMount() {
    this.loadCategory();
    this.loadProduct();
  }

  loadProduct = async () => {
    const response = await api.get("/produtos");
    this.setState({ product: response.data.produtos });
  };

  loadCategory = async () => {
    const response = await api.get("/categoria");
    this.setState({ category: response.data.categoria });
  };

  render() {
    return (
      <div>
        {this.state.product.map(products => (
          <>
            <div className="col-sm-4">
              <div className="product-image-wrapper" key={products.id}>
                <div className="single-products">
                  <div className="productinfo text-center">
                    {this.state.category.map(categoria =>
                      img(
                        categoria.id,
                        products.categoria_id,
                        categoria.nomecategoria,
                        products.arquivo
                      )
                    )}
                    <h2>{"$" + products.preco}</h2>
                    <p>{products.nomeproduto}</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Detalhes do Produto
                    </a>
                  </div>
                  <div className="product-overlay">
                    <div className="overlay-content">
                      <h2>{"$" + products.preco}</h2>
                      <p>{products.nomeproduto}</p>
                      <Link
                        to={`/productdetal/${products.id}`}
                        className="btn btn-default add-to-cart"
                      >
                        <i className="fa fa-shopping-cart"></i>Detalhes do
                        Produto
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    );
  }
}
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      products: null,
      isLoaded: false
    };
  }

  render() {
    // const reptiles = ['alligator', 'snake', 'lizard'];
    // console.log(t)
    // let durationBody = t.map((item, i) => {
    // 	return (
    // 		<span key={i} value={item}>
    // 		{item}
    // 		</span>
    // 	);
    // });

    return (
      <section>
        <div className="container-fluid">
          <div className="container">
            <Banners />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <MenuCategoria />
            </div>

            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Features Items</h2>

                {<Products />}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Container;
