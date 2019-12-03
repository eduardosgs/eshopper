import React, { Component } from "react";
import api from "../services/api";

class Category extends Component {
  state = {
    category: []
  };
  componentDidMount() {
    this.loadCategory();
  }

  loadCategory = async () => {
    const response = await api.get("/categoria");
    this.setState({ category: response.data.categoria });
  };

  render() {
    return (
      <div className="left-sidebar">
        <h2>Category - </h2>
        <div className="panel-group category-products" id="accordian">
          <div className="panel panel-default">
            {this.state.category.map(categoria => (
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="#">{categoria.nomecategoria}</a>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
