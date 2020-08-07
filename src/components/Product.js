import React from 'react';

const Product = ({ match, data }) => {

    const product = data.find(el => el.id === Number(match.params.productId))
    let productData;


    if (product)

        productData = (
            <div>
                <h3>{product.Title}</h3>
                <img  src={product.Image}/>
                <p>{product.Descr}</p>
                <hr />
                <h6>{product.Rating}</h6>
            </div>
        )

    else productData = <span>Product missing</span>


    return (<div>{productData}</div>);
}

export default Product;