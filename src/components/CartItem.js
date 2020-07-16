import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const product = this.props.item;
        this.props.dataToChange = 'it has been changed';
        return (
            <tr>
                <td><img src={product.image} className="img-fluid" style={{maxWidth: '50px'}} /> </td>
                <td>{product.title}</td>
                <td>In stock</td>
                <td>{this.props.numInCart}</td>
                {/* <td><input className="form-control" type="text" defaultValue="1" /></td> */}
                <td className="text-right">{product.price.toFixed(2)}</td>
                <td className="text-right"><button className="btn btn-sm btn-danger" onClick={() => this.props.removeItem(product)}><i className="fa fa-trash"></i> </button> </td>
            </tr>
        )
    }
}
