import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.products.map(product => <Product product={product} key={product.id} />)}
            </React.Fragment>
        )
    }
}
