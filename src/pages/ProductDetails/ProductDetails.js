import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "./ProductDetails.css";
import "../../components/CustomButton/CustomButton.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import Footer from "../../components/Footer/Footer";
import FilterHeader from "../../components/FilterHeader/FilterHeader";
import AppContext from "../../context/AppContext";
import Cart from "../../components/Cart/Cart";

const ProductDetails = (props) => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [count, setCount] = useState(1);
	const [stock, setStock] = useState("");

	const { handleAddToCart } = useContext(AppContext);
	

	useEffect(() => {
		setLoading(true);
		fetch(`https://dummyjson.com/products/${id}`)
			.then((response) => response.json())
			.then((json) => {
				setData(json);
				setLoading(false);
				setStock(json.stock);
			});
	}, [id]);

	if (loading) {
		return (
			<div className="loader-container">
				<div className="loader"></div>
			</div>
		);
	}

	const handleClick = (event) => {
		event.preventDefault();
		handleAddToCart(data.title, `${count} pieces`)
	};

	const handlePlusClick = () => {
		if (count >= stock) {
		return
	  } else 
	  setCount(count + 1);
	};

	const handleMinusClick = () => {	
		if (count <=1) {
			return
		} else
		setCount(count - 1);
	};

	return (
		<section className="product-details__section">
			<FilterHeader name={data.title} />
			<div className="product-details">
				<div className="product-details__article">
					<div className="product-details__img-container">
						<img
							className="product-details__img"
							src={data.images[0]}
							alt={data.brand}
						/>
					</div>
					<div className="product-details__title-btns-container">
						<div className="product-details__rating-container">
							<h4 className="product-details__headline">{data.title}</h4>
							<p className="product-details__rating">⭐️ {data.rating}</p>
						</div>
						<div className="product-details__buttons">
							<button onClick={handleMinusClick} className="product-details__button-minus">-</button>
							<p>{count}</p>
							<button onClick={handlePlusClick} className="product-details__button-plus">+</button>
						</div>
					</div>
					<div className="product-details__price-space-container">
						<p className="product-details__space">
							{data.stock} pieces in stock
						</p>
						<p className="product-details__price">${data.price}</p>
					</div>
					<div className="product-details__container-description">
						<h4 className="product-details__head-description">Description</h4>
						<p className="product-details__description">{data.description.substring(0, 120) + "..."}</p>
						<CustomButton
							pr_onClickHandler={handleClick}
							children="Add to Cart"
							pr_class="custom-button__product-details"
						/>
					</div>
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default ProductDetails;
