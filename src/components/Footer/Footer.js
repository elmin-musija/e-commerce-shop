import "./Footer.css"
import { ReactComponent as FooterHomeBtn } from "../../img/Home.svg";
import { ReactComponent as FooterSearchBtn } from "../../img/Search.svg";
import cart from "../../img/shopping-cart.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Footer = () => {
const {setSearchButtonToggle} = useContext(AppContext)
const onClickHandler = () => {
    setSearchButtonToggle()
}
    return ( 
    <div className="footer">
        <Link to="/home">
            <FooterHomeBtn className="footer__home-icon"/>
        </Link>
        <Link to="/home">
            <img src={cart} alt="cart-logo" />
        </Link>
        <Link onClick={onClickHandler}>
            <FooterSearchBtn className="footer__search-icon"/>
        </Link>
    </div> );
}
 
export default Footer;