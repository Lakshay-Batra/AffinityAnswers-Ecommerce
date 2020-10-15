import React from 'react';

function Card(props) {
    function itemAdded() {
        props.itemAdded(props.item);
    }
    return (
        <div className="card">
            <img src="https://picsum.photos/150/180" alt="Avatar" />
            <div className="container">
                <h4><b>{props.item.name}</b></h4>
            </div>
            <button onClick={itemAdded}
                style={props.item.inCart ? { backgroundColor: "green", color: "white" } : {}}
                className="category-button"
                value={props.item.key}>{props.item.inCart ? "Add More" : "Add to Cart"}
            </button>
        </div>
    )
}

export default Card;
