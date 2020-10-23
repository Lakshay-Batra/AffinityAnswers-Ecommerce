import React from 'react';
import CartItem from "./CartItem";

function CartPanel(props) {

    var numberOfItems = props.cartItems.length;
    return (
        <div id="cart" className="cart-panel">
            <div className="cart-header">
                <h2>My Cart</h2>
                <h2>Total: {props.cartPrice}</h2>
            </div>
            <div onClick={() => { props.closeCart(); }} className="close-cart">❌</div>
            <hr />
            {(numberOfItems != 0) && <div className="cart-items-container">
                {props.cartItems.map(item => {
                    return (<CartItem incDecItem={props.incDecItem} key={item.key} item={item} removeItemFromCart={props.removeItemFromCart} />)
                })}
            </div>}
        </div>
    )
}

export default CartPanel;
