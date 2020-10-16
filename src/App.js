import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Content from "./components/Content";
import CartPanel from "./components/CartPanel";
import "./styles.css";
import * as Category1 from "./category1";
import * as Category2 from "./category2";
import * as Category3 from "./category3";

function App() {
  const [cartItems, setCartItems] = useState([]);
  // states to keep track of categories data whenever added or removed from cart
  const [category1, setCategory1] = useState(Category1);
  const [category2, setCategory2] = useState(Category2);
  const [category3, setCategory3] = useState(Category3);

  // state to render category data on content screen according to the category selected by sidebar
  const [categorySelected, setCategorySelected] = useState(category1);

  // state to conditionally render CartPanel and toggle on Cart button click
  const [showCart, setShowCart] = useState(false);

  // function to render content for screen based on category selected.
  // function below is going to App -> Sidebar -> CategoryButton as a prop.
  // it will be executed on the basis of which category button is pressed.
  function onCategorySelect(category) {
    switch (category) {
      case "category1":
        setCategorySelected(category1);
        break;
      case "category2":
        setCategorySelected(category2);
        break;
      case "category3":
        setCategorySelected(category3);
        break;
      default:
        setCategorySelected(category1);
        break;
    }
  }

  // function to toggle between CartPanel whenever Cart button on navbar is pressed
  function toggleCart() {
    setShowCart(prevValue => {
      return !prevValue;
    });
  }

  // function to mark inCart:true when item is added in cart
  function markStatusInCart(item, status) {
    var tempCategory;
    switch (item.category) {
      case "category1":
        tempCategory = { ...category1 };
        for (var i = 0; i < tempCategory.default.length; i++) {
          if (tempCategory.default[i].key === item.key) {
            tempCategory.default[i].inCart = status;
          }
        }
        setCategory1(tempCategory);
        break;
      case "category2":
        tempCategory = { ...category2 };
        for (var i = 0; i < tempCategory.default.length; i++) {
          if (tempCategory.default[i].key === item.key) {
            tempCategory.default[i].inCart = status;
          }
        }
        setCategory2(tempCategory);
        break;
      case "category3":
        tempCategory = { ...category3 };
        for (var i = 0; i < tempCategory.default.length; i++) {
          if (tempCategory.default[i].key === item.key) {
            tempCategory.default[i].inCart = status;
          }
        }
        setCategory3(tempCategory);
        break;
    }
  }

  // function when an item is added from content cards
  function itemAdded(item) {
    var itemAdded = false;
    var newCart;
    for (var i = 0; i < cartItems.length; i++) {
      if (item.key === cartItems[i].key) {
        newCart = [...cartItems];
        newCart[i].quantity++;
        itemAdded = true;
        break;
      }
    }
    if (itemAdded) {
      setCartItems(newCart);
    }
    if (!itemAdded) {
      item.quantity = 1;
      item.inCart = true;
      setCartItems(prevValue => {
        return ([...prevValue, item]);
      });
      /* mark the item as inCart: true inside that particular category */
      markStatusInCart(item, true);
    }
  }

  // function to remove item from cart
  function removeItemFromCart(item) {
    var newCartItemsAfterDeletion = cartItems.filter(cartItem => {
      return item.key != cartItem.key;
    });
    setCartItems(newCartItemsAfterDeletion);

    /* mark the item as inCart: false inside that particular category */
    markStatusInCart(item, false);
  }

  // function for increment decrement functionality for an item in cart
  function incDecItem(item, operation) {
    var newCart;
    for (var i = 0; i < cartItems.length; i++) {
      if (item.key === cartItems[i].key) {
        newCart = [...cartItems];
        if (operation === "increment") {
          newCart[i].quantity++;
        }
        if (operation === "decrement") {
          if (newCart[i].quantity > 1) {
            newCart[i].quantity--;
          }
        }
        break;
      }
    }
    setCartItems(newCart);
  }

  return (
    <div>
      <Navbar cartItems={cartItems} toggleCart={toggleCart} />
      {showCart && <CartPanel
        incDecItem={incDecItem}
        cartItems={cartItems}
        removeItemFromCart={removeItemFromCart}
        closeCart={() => {setShowCart(false);}}
      />}
      <div className="main">
        <Sidebar activeCategory={categorySelected.name} onCategorySelect={onCategorySelect} />
        <Content itemAdded={itemAdded} category={categorySelected.default} categoryName={categorySelected.name} />
      </div>
    </div>
  );
}

export default App;
