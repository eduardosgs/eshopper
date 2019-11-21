import React from 'react'
const img = (categoria, product) => {

    product.map(produtos => {
        categoria.map(category => {
            if (category.id == produtos.categoria_id) {
                return document.getElementById("minhaImagem").src = [`http://painel.supplementstore.com.br/uploads/${category.nomecategoria}/${produtos.arquivo}`];
            } else {
                return false;
            }
        })

    })
    return this;
}

export default img