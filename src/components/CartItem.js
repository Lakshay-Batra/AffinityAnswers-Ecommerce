import React from 'react';

function CartItem(props) {
    function removeItemFromCart() {
        props.removeItemFromCart(props.item);
    }
    function handleIncrement() {
        props.incDecItem(props.item, "increment");
    }
    function handleDecrement() {
        props.incDecItem(props.item, "decrement");
    }
    return (
        <div className="cart-item-card">
            <img src="https://picsum.photos/60/60" alt="Avatar" />
            <div className="cart-item-details">
                <h4>{props.item.name}</h4>
                <div className="inc-dec-div">
                    <button onClick={handleDecrement} className="inc-dec-btn">➖</button>
                    <span><b>Qty:</b>{props.item.quantity}</span>
                    <button onClick={handleIncrement} className="inc-dec-btn">➕</button>
                </div>
            </div>
            <div className="delete-item-div">
                <button onClick={removeItemFromCart} className="delete-item-btn">Remove</button>
            </div>
        </div>
    )
}

export default CartItem;
