import "./FooterSticky.css"
import { ReactComponent as FooterHomeBtn } from "../../img/Home.svg";
import { ReactComponent as FooterSearchBtn } from "../../img/Search.svg";
import cart from "../../img/shopping-cart.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const FooterSticky = () => {
const {setSearchButtonToggle, cartItems} = useContext(AppContext)
const onClickHandler = () => {
    setSearchButtonToggle()
}
    return ( 
    <div className="product-list__footer">
        <Link to="/home">
            <FooterHomeBtn className="footer__home-icon"/>
        </Link>
        <Link to="/cart">
            <div className="footer__cart">
                <img src={cart} alt="cart-logo" />
                <p className="footer__p__cart">{cartItems.length /3}</p>
            </div>
        </Link>
        <Link onClick={onClickHandler}>
            <FooterSearchBtn className="footer__search-icon"/>
        </Link>
    </div> );
}
 
export default FooterSticky;