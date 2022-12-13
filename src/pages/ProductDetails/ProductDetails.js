import "./ProductDetails.css";
import "../../components/CustomButton/CustomButton.css"
import CustomButton from "../../components/CustomButton/CustomButton";
import Footer from "../../components/Footer/Footer"

const ProductDetails = (props) => {
	return (
		<div className="product-details">
			<div className="product-details__article">
				<div 			className="product-details__img-container">
					<img className="product-details__img" src="https://i.dummyjson.com/data/products/12/2.jpg" alt="" />
				</div>
				<div className="product-details__title-btns-container">
					<div className="product-details__rating-container">
						<h4 className="product-details__headline">Formal Shirt</h4>
						<p className="product-details__rating">⭐️ 4.5</p>
					</div>
					<div className="product-details__buttons">
						<button className="product-details__button-minus">-</button>
						<p>5</p>
						<button className="product-details__button-plus">+</button>
					</div>
				</div>
				<div className="product-details__price-space-container">
					<p className="product-details__space">
						5 pieces in stock
					</p>
					<p className="product-details__price">$49.00</p>
				</div>
				<div className="product-details__container-description">
					<h4 className="product-details__head-description">Description</h4>
					<p className="product-details__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur itaque voluptatum mollitia ex quaerat aspernatur vel dolorem consequatur, ducimus cupiditate.</p>
					<CustomButton children="Add to Cart" pr_class="custom-button__product-details"/>
				</div>
				
			</div>
			<Footer/>
		</div>
	);
};

export default ProductDetails;
