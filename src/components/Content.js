import React from 'react'
import Card from "./Card";

function Content(props) {
    return (
        <div className="content">
            <h2>Products under <span className="category-heading">{props.categoryName}</span></h2>
            <hr />
            <br />
            <div className="cards-container">
                {props.category.map(item => {
                    return (
                        <Card itemAdded={props.itemAdded} key={item.key} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Content
