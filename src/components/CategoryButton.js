import React from 'react';

function CategoryButton(props) {
    function selectCategory() {
        // console.log(props.name.toLowerCase().split(" ").join(""));
        props.onCategorySelect(props.name.toLowerCase().split(" ").join(""));
    }
    return (
        <div className="category-button">
            <button onClick={selectCategory}> {props.name} </button>
        </div>
    )
}

export default CategoryButton;
