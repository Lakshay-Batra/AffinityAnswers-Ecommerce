import React from 'react'
import Card from "./Card";

function Content(props) {
    return (
        <div className="content">
            <h2>Products under {props.categoryName}</h2>
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
