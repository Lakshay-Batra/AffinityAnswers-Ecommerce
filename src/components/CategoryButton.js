import React from 'react';

function CategoryButton(props) {
    const selectedStyle = {
        backgroundColor: "#f1dab2"
    }
    function selectCategory() {
        // console.log(props.name.toLowerCase().split(" ").join(""));
        props.onCategorySelect(props.name.toLowerCase().split(" ").join(""));
    }
    return (
        <div className="category-button">
            <button style={props.active ? selectedStyle : {}} onClick={selectCategory}> {props.name} </button>
        </div>
    )
}

export default CategoryButton;
