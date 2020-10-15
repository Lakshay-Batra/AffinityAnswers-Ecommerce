import React from 'react';

function Navbar(props) {
    function toggleCart() {
        // function received as prop from App.js
        props.toggleCart();
    }
    var itemsInCart = 0;
    props.cartItems.forEach(item => {
        itemsInCart+=item.quantity;
    });
    return (
        <nav>
            <h2>BlablaCart</h2>
            <ul>
                <li onClick={toggleCart} className="cart-button">
                <span className="cart-notification">{itemsInCart}</span>
                Cart
                </li>
                <li>Profile</li>
            </ul>
        </nav>
    );
}

export default Navbar;
