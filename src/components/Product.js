import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        const product = this.props.product;

        return (
            <div className="col-md-3 col-sm-6">
                <div className="product-grid2">
                    <div className="product-image2">
                        <a href="/">
                            <img alt={product.title} className="img-fluid pic-1" src={product.image} />
                        </a>
                        <div style={{ margin: '5px 0' }}>
                            <a className="add-to-cart btn btn-success btn-block" href="/">Add to cart</a>
                        </div>
                    </div>
                    <div className="product-content">
                        <h5 className="title" style={{ textAlign: 'center' }}><Link to={`store/${product.id}`}>{product.title}</Link></h5>
                        <span className="price">${product.price}</span>
                    </div>
                </div>
            </div>
        )
    }
}
