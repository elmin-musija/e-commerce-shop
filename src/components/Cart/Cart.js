import AppContext from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import "./Cart.css"
import Footer from "../Footer/Footer";

const Cart = (props) => {
    const { cartItems } = useContext(AppContext)
    const { setCartItems } = useContext(AppContext)
   
    const handleClick = (event) => {
        const tmp = [...cartItems]
        event.preventDefault()
        const lastTwoItemsIndex = tmp.length -1 ;
        tmp.splice(lastTwoItemsIndex);
        setCartItems(tmp)
    }

    const totalPrice = cartItems.reduce((sum, item) => {
      if (typeof item.prices === "number") {
        return sum + item.prices * item.stock;
      } else {
        return sum;
      }
    }, 0);

  return (
    <section className="cart__grid__section">
        <h2>Cart</h2>
        <div className="cart__sum">
          <p>Total: {totalPrice}$</p>
        </div>
    <div className="cart__grid">
       {cartItems.map((elt, index) => {
					return (
          <div key={index} className="cart__item">
						<p>{elt.title}</p>
            <p>{elt.stock}x</p>
            <p>{elt.prices * elt.stock}$</p>
            </div>
					);
				})}          
    </div>
    <div className="cart__button">                               
        <button onClick={handleClick}>Delete</button>
    </div>
    <Footer/>
    </section>
  );
};
 
export default Cart;