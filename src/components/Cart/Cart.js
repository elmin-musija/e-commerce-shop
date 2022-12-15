import AppContext from "../../context/AppContext";
import { useContext, useEffect } from "react";
import "./Cart.css"
import Footer from "../Footer/Footer";

const Cart = (props) => {
    const { cartItems } = useContext(AppContext)
    const { setCartItems } = useContext(AppContext)

    const handleClick = (event) => {
        const tmp = [...cartItems]
        event.preventDefault()
        const lastTwoItemsIndex = tmp.length - 3;
        tmp.splice(lastTwoItemsIndex, 3);
        setCartItems(tmp)
    }

  return (
    <section className="cart__grid__section">
        <h2>Cart</h2>
    <div className="cart__grid">
       {cartItems.map((elt, index) => {
					return (
          <div key={index} className="cart__item">
						<p>{elt}</p>
          </div>    
					);
				})}          
    </div>
    <div className="cart__button">                               
        <button onClick={handleClick}>⎯</button>
    </div>
    <Footer/>
    </section>
  );
};
 
export default Cart;