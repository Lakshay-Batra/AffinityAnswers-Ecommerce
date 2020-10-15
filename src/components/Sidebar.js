import React from 'react';
import CategoryButton from "./CategoryButton";
import categories from "../categories";

function Sidebar(props) {
    return (
        <div className="sidebar">
            {categories.map(category => {
                return <CategoryButton key={category.key} name={category.name} onCategorySelect={props.onCategorySelect}  />
            })}
        </div>
    )
}

export default Sidebar
