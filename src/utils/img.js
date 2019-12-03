import React from "react";
const img = (categoria, product) => {
  product.map(produtos => {
    categoria.map(category => {
      if (category.id == produtos.categoria_id) {
        const newLocal = (document.getElementById("minhaImagem").src = [
          `http://painel.supplementstore.com.br/uploads/${category.nomecategoria}/${produtos.arquivo}`
        ]);
        return newLocal;
      } else {
        return false;
      }
    });
  });
  return this;
};

export default img;
