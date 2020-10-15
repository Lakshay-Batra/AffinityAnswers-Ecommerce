import React, { useState } from 'react';
import CartItem from "./CartItem";

function CartPanel(props) {
    if (!props.cartItems.length) {
        return (
            <div id="cart" className="cart-panel">
                <h2>My Cart</h2>
                <div  onClick={() => {props.closeCart();}} className="close-cart">❌</div>
                <hr />
            </div>
        )
    } else {
        return (
            <div id="cart" className="cart-panel">
                <h2>My Cart</h2>
                <div onClick={() => {props.closeCart();}} className="close-cart">❌</div>
                <hr />
                <div className="cart-items-container">
                    {props.cartItems.map(item => {
                        return (<CartItem incDecItem={props.incDecItem} key={item.key} item={item} removeItemFromCart={props.removeItemFromCart} />)
                    })}
                </div>
            </div>
        )
    }
}

export default CartPanel;
