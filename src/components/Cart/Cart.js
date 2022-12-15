import AppContext from "../../context/AppContext";
import { useContext, useEffect } from "react";
import "./Cart.css"
import Footer from "../Footer/Footer";

const Cart = (props) => {
    const { cartItems } = useContext(AppContext)

    useEffect(() => {
        console.log(cartItems);
      }, [cartItems]);

    const handleClick = (event) => {
        event.preventDefault()
        const lastTwoItemsIndex = cartItems.length - 2;
        cartItems.splice(lastTwoItemsIndex, 2);
    }

  return (
    <section>
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
    <Footer />
    </section>
  );
};
 
export default Cart;