import React from 'react'
const img = (categoria, product, nomecategoria, arquivoproduto) => {

    if (categoria == product) {
        return <img src={`http://painel.supplementstore.com.br/uploads/${nomecategoria}/${arquivoproduto}`} />;
    } else {
        return false;
    }

}

export default img