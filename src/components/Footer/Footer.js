import "./Footer.css"
import { ReactComponent as FooterHomeBtn } from "../../img/Home.svg";
import { ReactComponent as FooterSearchBtn } from "../../img/Search.svg";
import cart from "../../img/shopping-cart.png"
import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
    <div className="footer">
        <Link to="/home">
            <FooterHomeBtn className="footer__home-icon"/>
        </Link>
        <Link to="/home">
            <img src={cart} alt="cart-logo" />
        </Link>
        <Link to="/home">
            <FooterSearchBtn className="footer__search-icon"/>
        </Link>
    </div> );
}
 
export default Footer;