import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetails.css";
import "../../components/CustomButton/CustomButton.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import Footer from "../../components/Footer/Footer";
import FilterHeader from "../../components/FilterHeader/FilterHeader";

const ProductDetails = (props) => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch(`https://dummyjson.com/products/${id}`)
			.then((response) => response.json())
			.then((json) => {
				setData(json);
				setLoading(false);
			});
	}, [id]);

	if (loading) {
		return (
			<div className="loader-container">
				<div className="loader"></div>
			</div>
		);
	}

	console.log(data);

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
							<button className="product-details__button-minus">-</button>
							<p>1</p>
							<button className="product-details__button-plus">+</button>
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
