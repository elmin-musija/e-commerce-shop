import { useState, useEffect, useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductItem from "../../components/ProductItem/ProductItem";
import FooterSticky from "../../components/Footer/FooterSticky";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = (props) => {
	const [data, setData] = useState([]);

	const {
		getUserSearchString,
		getFetchAllItemsData,
		resetUserSearchButtonClicked,
	} = useContext(AppContext);

	useEffect(() => {
		if (getUserSearchString() !== "") {
			const result = getFetchAllItemsData().filter((element) => {
				if (
					element.title.toLowerCase().includes(getUserSearchString()) ||
					element.brand.toLowerCase().includes(getUserSearchString()) ||
					element.description.toLowerCase().includes(getUserSearchString())
				) {
					return element;
				}
			});
			setData(result);
			resetUserSearchButtonClicked();
		}
	}, [getUserSearchString, getFetchAllItemsData]);

	return (
		<div className="product-list">
			<SearchBar className="product-list__searchbar" />
			<p className="product-list__p">Sort by: </p>
			<div className="product-list-props">
				{data.map((element, index) => {
					return (
						<Link to={`/productdetails/${element.id}`}>
						<ProductItem
							key={index}
							pr_image={element.images[0]}
							pr_title={element.title}
							pr_alt={element.brand}
							pr_rating={element.rating}
							pr_price={element.price}
						/>
						</Link>
					);
				})}
			</div>
			<FooterSticky />
		</div>
	);
};

export default ProductList;
