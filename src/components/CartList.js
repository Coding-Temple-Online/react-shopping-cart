import React, { Component } from 'react'
import CartItem from './CartItem'

export default class CartList extends Component {
    constructor() {
        super();
        this.state = {
            dataToChange: ''
        }
    }

    doStuff = () => {
        
    }

    render() {
        const shallowCart = [...new Set(this.props.cart)];

        return (
            <React.Fragment>
                {shallowCart.map((item) => {
                    let matches = this.props.cart.filter((cartItem) => {
                        return cartItem.id === item.id;
                    });
                    let numInCart = matches.length;
                    return <CartItem dataToChange={this.state.dataToChange} item={item} key={item.id} numInCart={numInCart} removeItem={this.props.removeItem} />
                })
                }
            </React.Fragment>
        )
    }
}

